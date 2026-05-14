---
title: Architecture
description: How Specter is built and how it works
---

## Philosophy

- **TypeScript + Vite** for the WebUI (builds MWC + TS into bundled JS)
- **Runtime bridge detection** — works on KernelSU, APatch (identical `window.ksu`), and Magisk
- **`@material/web` (MWC)** — Google's official Material 3 Web Components
- **`ksud module config`** instead of `localStorage` (survives app uninstall)
- **Dual boot strategy** — `boot-completed.sh` for KernelSU/APatch + `service.sh` with `sys.boot_completed` polling fallback for Magisk
- **Shared config persistence** — `ksud` with file fallback (works on all root solutions)
- **Zero CDN dependencies at runtime** — everything bundled locally by Vite
- **Single shared shell library** (`lib/`) — eliminates all copy-paste
- **No hardcoded paths** — `$MODDIR` everywhere

## Directory Layout

```
specter/
├── .github/workflows/
│   ├── build-test.yml     # CI: lint + build + test
│   └── build-release.yml  # CI: build, sign, release
├── src/                   # Source code (developer edits here)
│   ├── META-INF/          # Magisk installer files
│   ├── module.prop        # Module metadata
│   ├── lib/               # Shared shell libraries (5 files)
│   │   ├── paths.sh       # Path constants
│   │   ├── urls.sh        # Remote URLs
│   │   ├── common.sh      # Core utility functions
│   │   ├── config_env.sh  # Config persistence
│   │   └── package_list.sh # App package lists
│   ├── features/          # One file = one feature (18 scripts)
│   ├── orchestrator.sh    # Pipeline orchestrator
│   ├── pipelines/         # Pipeline definition files
│   ├── customize.sh       # Installer script
│   ├── service.sh         # Boot-time service (late_start)
│   ├── boot-completed.sh  # KernelSU/APatch post-boot
│   ├── uninstall.sh       # Clean removal
│   ├── action.sh          # Action button wrapper
│   ├── rka/               # Remote Key Attestation
│   └── webroot/           # WebUI source (Vite-bundled)
│       ├── config.json
│       ├── index.html
│       ├── css/app.css
│       ├── js/            # 21 TypeScript modules
│       ├── json/          # Runtime data (JSON)
│       ├── lang/          # Translation files
│       ├── assets/        # Material Icons CSS
│       └── common/        # WebUI-triggered scripts
├── Module/                # Build output (gitignored)
├── docs/                  # Documentation
├── changelog.md
├── README.md
├── vite.config.js
└── package.json
```

## Execution Flow

### Action Button
```
action.sh
  → orchestrator.sh
    → reads pipeline file
    → runs each feature script sequentially
    → optional features marked with `?`
```

### WebUI Button
```
WebUI button click
  → bridge detection (window.ksu.exec)
  → spawns feature script
  → stdout/stderr → dialog + history log
```

### Boot (KernelSU / APatch)
```
service.sh           → immediate ro.* property resets
                     → exits early
boot-completed.sh    → apply_boot_hardening()
                     → override.description
```

### Boot (Magisk)
```
service.sh           → immediate ro.* property resets
                     → poll sys.boot_completed
                     → apply_boot_hardening()
                     → GMS kill, recovery hiding
                     → delayed re-spoof after 120s
```

## Script Contracts

### exit vs return

| Context | Use |
|---|---|
| `features/*.sh` (subprocess) | `exit` |
| `service.sh`, `boot-completed.sh` | `exit` |
| `customize.sh`, `uninstall.sh` (sourced) | `return` |
| `lib/*.sh` (sourced) | Never call `exit`/`return` at top level |

### Feature Script Pattern

```sh
#!/system/bin/sh
set -e
MODDIR=${0%/*}
. "$MODDIR/../lib/common.sh"
. "$MODDIR/../lib/paths.sh"

log "FEATURE" "Start"
# ... one responsibility, idempotent ...
log "FEATURE" "Finish"
exit 0
```

## Config Persistence

Dual-layer approach:
- **KernelSU**: `ksud module config get/set`
- **Magisk/APatch**: flat files in `/data/adb/Specter/config/*.val`

WebUI mirrors this via shell `exec()` with a debounce-based flush system for batch writes.

## WebUI Architecture

The WebUI is written in **TypeScript with strict mode** (`strict: true`). Key modules:

| Module | Purpose |
|---|---|
| `bridge.ts` | Bridge detection (ksu.exec) and script spawning |
| `cfg.ts` | Config persistence with debounce flushing |
| `device.ts` | Device info and keybox status refresh |
| `theme.ts` | Material 3 theme engine (Monet + presets) |
| `i18n.ts` | Async translation loader |
| `terminal.ts` | Live terminal output for dev mode |

## Build Process

```bash
npm run build
```

This runs:
1. `vite build` — bundles WebUI into `Module/webroot/`
2. Copy shell scripts, libs, features, pipelines to `Module/`
3. Zip `Module/` → `module.zip`
