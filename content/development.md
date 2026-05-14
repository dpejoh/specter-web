---
title: Development
description: Build, develop, and contribute to Specter
---

## Prerequisites

- Node.js >= 20, npm >= 9
- TypeScript knowledge for WebUI changes
- Shell scripting knowledge for feature/lib changes

## Setup

```bash
git clone https://github.com/dpejoh/specter
cd specter
npm ci
```

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Vite dev server with hot-reload for WebUI |
| `npm run build` | Vite build → copy module assets → zip module.zip |
| `npx tsc --noEmit` | TypeScript strict type check |
| `find src/ -name '*.sh' -exec shellcheck {} +` | Lint shell scripts |

## Source Rules

- Edit only files in `src/` — never `Module/` or `module/`
- All executable scripts use `set -e`
- Library scripts (`lib/*.sh`) never call `exit` or `return` at top level
- Never use `su -c` in feature scripts
- Never hardcode `/data/adb/modules/Specter` — use `$MODDIR`
- The WebUI is TypeScript; edit `.ts` files in `src/webroot/js/`, not `.js` files

## Boot Safety

`service.sh` and `boot-completed.sh` run in critical boot phases. Every `resetprop` call must use `resetprop_if_diff` (which has `2>/dev/null || true` guards). Never call `apply_prop_hardening()`, `check_prop()`, `disable_rom_spoof_engines()`, or `persistprop()` from boot scripts — a single unguarded failure with `set -e` can cause a bootloop.

## Adding a Feature

1. Create `src/features/<name>.sh` following the script contract (`set -e`, `MODDIR`, source lib, `exit 0`)
2. Add a config toggle with default value
3. Add a WebUI button in `src/webroot/index.html` with `data-script="<name>.sh"`
4. Add to a pipeline in `src/pipelines/` if it should run automatically
