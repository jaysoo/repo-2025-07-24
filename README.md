Run:

```
nx run api:build
nx run api:prune-lockfile
nx run api:copy-workspace-modules
```

Notice that lockfile pruning fails with this message:

```
Pruning lockfile...

 NX   An error occured while creating pruned lockfile

Please open an issue at `https://github.com/nrwl/nx/issues/new?template=1-bug.yml` and provide a reproduction.
To prevent the build from breaking we are returning the root lock file.
If you run `pnpm install --lockfile-only` in your output folder it will regenerate the correct pruned lockfile.

Original error: Cannot read properties of undefined (reading '@node-acme/hello')


TypeError: Cannot read properties of undefined (reading '@node-acme/hello')
    at /private/tmp/repo-2025-07-24/node_modules/.pnpm/nx@21.3.5_@swc-node+register@1.9.2_@swc+core@1.5.29/node_modules/nx/src/plugins/js/lock-file/pnpm-parser.js:425:75
    at Array.forEach (<anonymous>)
    at /private/tmp/repo-2025-07-24/node_modules/.pnpm/nx@21.3.5_@swc-node+register@1.9.2_@swc+core@1.5.29/node_modules/nx/src/plugins/js/lock-file/pnpm-parser.js:421:47
    at Array.forEach (<anonymous>)
    at mapRootSnapshot (/private/tmp/repo-2025-07-24/node_modules/.pnpm/nx@21.3.5_@swc-node+register@1.9.2_@swc+core@1.5.29/node_modules/nx/src/plugins/js/lock-file/pnpm-parser.js:419:7)
    at stringifyPnpmLockfile (/private/tmp/repo-2025-07-24/node_modules/.pnpm/nx@21.3.5_@swc-node+register@1.9.2_@swc+core@1.5.29/node_modules/nx/src/plugins/js/lock-file/pnpm-parser.js:284:70)
    at createLockFile (/private/tmp/repo-2025-07-24/node_modules/.pnpm/nx@21.3.5_@swc-node+register@1.9.2_@swc+core@1.5.29/node_modules/nx/src/plugins/js/lock-file/lock-file.js:184:60)
    at createPrunedLockfile (/private/tmp/repo-2025-07-24/node_modules/.pnpm/@nx+js@21.3.5_@swc-node+register@1.9.2_@swc+core@1.5.29_nx@21.3.5/node_modules/@nx/js/src/executors/prune-lockfile/prune-lockfile.js:33:53)
    at pruneLockfileExecutor (/private/tmp/repo-2025-07-24/node_modules/.pnpm/@nx+js@21.3.5_@swc-node+register@1.9.2_@swc+core@1.5.29_nx@21.3.5/node_modules/@nx/js/src/executors/prune-lockfile/prune-lockfile.js:20:44)
    at runExecutorInternal (/private/tmp/repo-2025-07-24/node_modules/.pnpm/nx@21.3.5_@swc-node+register@1.9.2_@swc+core@1.5.29/node_modules/nx/src/command-line/run/run.js:98:19)

Lockfile pruned: /private/tmp/repo-2025-07-24/apps/api/dist/pnpm-lock.yaml
```

Something went wrong, but the last line suggests that it worked.

