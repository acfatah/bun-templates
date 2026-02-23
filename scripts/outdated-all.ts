#!/usr/bin/env bun

/**
 * Script to run `bun outdated` command on all TARGET_DIRS.
 */

import type { Dirent } from 'node:fs'

import Bun from 'bun'
import process from 'node:process'
import { join } from 'pathe'

import { readDir } from './utils'

const TARGET_DIRS = ['templates']

/**
 * Check outdated dependencies in the given directory.
 */
async function checkDeps(target: string | Dirent): Promise<void> {
  const path = typeof target === 'string' ? target : join(target.parentPath, target.name)
  const pathName = path === '.' ? 'root' : `"${path}"`
  const args = ['bun', 'outdated'] as string[]

  console.log(`Checking "${pathName}"`)
  const proc = Bun.spawn(args, {
    cwd: path,
    // Avoid backpressure: stream directly to terminal
    stdout: 'inherit',
    stderr: 'inherit',
  })

  // Safety timeout (default 5 minutes; override with UPDATE_TIMEOUT_MS)
  const timeoutMs = Number(process.env.UPDATE_TIMEOUT_MS ?? 5 * 60 * 1000)
  let timedOut = false
  const timer = setTimeout(() => {
    timedOut = true
    try {
      proc.kill()
    }
    catch {}
  }, timeoutMs)

  const exitCode = await proc.exited.finally(() => clearTimeout(timer))

  if (timedOut) {
    console.error(`Timed out after ${timeoutMs}ms and was killed.`)

    return
  }

  if (exitCode) {
    console.error(`ERROR: Failed to check "${path}" (exit ${exitCode}). See output above.`)
  }
  else {
    console.log(`Done checking "${pathName}".`)
  }
}

async function main() {
  // Check outdated dependencies in root directory
  await checkDeps('.')

  for (const targetDir of TARGET_DIRS) {
    const dir = await readDir(targetDir, {
      withFileTypes: true,
    }) as Dirent[]

    // Run sequentially to avoid backpressure and resource spikes per template set
    for (const dirent of dir) {
      if (!dirent.isDirectory())
        continue

      try {
        await checkDeps(dirent)
      }
      catch (error) {
        console.error(`An error occurred during the check of "${join(dirent.parentPath, dirent.name)}":`, error)
      }
    }
  }

  console.log('All checks completed.')
}

void main()
