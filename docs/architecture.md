---
title: Architecture
description: How Specter works — boot flow, pipelines, WebUI, and config
---

## Boot Flow

Specter runs at every boot to apply hardening, resolve conflicts, and restore state.

### KernelSU / APatch
```
service.sh         → immediate ro.* property resets (apply_boot_props)
                   → exits early
boot-completed.sh  → apply_boot_hardening (settings put, resetprop --delete)
                   → set module description
```

### Magisk
```
service.sh         → immediate ro.* property resets
                   → polls sys.boot_completed
                   → apply_boot_hardening, hide recovery folders
                   → block ROM spoof engines (background)
                   → delayed re-spoof after 120s
                   → hourly suspicious props re-clean loop
```

### Post-fs-data (all root solutions)
```
post-fs-data.sh    → resolve_conflicts() — rename conflicting module scripts
                     to .bak before they can execute at boot
```

## Pipeline System

Named pipelines (text files in `src/pipelines/`) define ordered steps:

```
full_integrity:  kill_play_store → target → security_patch → keybox → pif?
root_hide:       hma → zygisk_next?
```

Each line is a feature script. `?` suffix marks optional steps. Any failure aborts the pipeline.

## WebUI → Shell Bridge

The WebUI (TypeScript, Vite-bundled) communicates with the shell via `window.ksu.exec`:
- KernelSU/APatch: native bridge (`window.ksu.exec`, `window.ksu.spawn`)
- Development: mock bridge with realistic test data

Config reads/writes go through the same persistence layer as shell scripts.

## Config Persistence

Dual-layer approach:
- **KernelSU**: `ksud module config get/set` (native)
- **Magisk/APatch**: flat files in `/data/adb/Specter/config/<key>.val`

Both layers expose the same `cfg_get`/`cfg_set` API. The WebUI mirrors this via shell exec with debounced batch writes.

## Directory Structure

```
specter/
├── src/lib/           # 5 shared shell libraries
│   ├── common.sh      # Core functions (log, download, prop hardening, conflicts)
│   ├── config_env.sh  # Config persistence (ksud + file fallback)
│   ├── paths.sh       # Path constants
│   ├── urls.sh        # Remote URL constants
│   └── package_list.sh # App package lists
├── src/features/      # 16 feature scripts (one file = one feature)
├── src/pipelines/     # 2 pipeline definitions
├── src/webroot/       # WebUI (27 TypeScript modules + HTML + CSS)
├── src/rka/           # Remote Key Attestation (pure awk JSON library)
├── src/orchestrator.sh # Pipeline runner
├── src/service.sh     # Late-boot service
├── src/boot-completed.sh # KernelSU/APatch post-boot
├── src/customize.sh   # Installer wizard
├── src/uninstall.sh   # Clean removal
├── src/action.sh      # Action button entry point
└── vite.config.js     # Vite config: root=src/webroot, outDir=Module/webroot
```

## Key Patterns

- **Dual root detection** — `$KSU` flag for KernelSU/APatch vs Magisk detection
- **set -e everywhere** — all executable scripts fail fast, library scripts don't use it
- **Idempotent features** — every feature script is safe to run multiple times
- **Data-driven conflicts** — registry-based with one line per module, no hardcoded case blocks
- **Shuffled-base64** — keybox payloads are shuffled-base64 encoded, decoded via `tr` + `base64 -d`
