---
title: Development Guide
description: How to develop and contribute to Specter
---

## Quick Reference

| Area | Files | Lines |
|---|---|---|
| `src/lib/` | 5 shared libraries | ~415 total |
| `src/features/` | 18 feature scripts | Varies |
| `src/webroot/js/` | 21 TypeScript modules | ~2300 total |
| `src/webroot/css/app.css` | 1 stylesheet | ~790 |
| `src/webroot/index.html` | 1 HTML page | ~460 |

## Development Setup

```bash
git clone https://github.com/dpejoh/specter
cd specter
npm ci
```

Requirements: Node.js >= 20, npm >= 9.

## WebUI Development

For hot-reload during WebUI development:

```bash
npm run dev
```

This starts Vite's dev server. Edit files in `src/webroot/` and changes reflect instantly.

## Building

```bash
npm run build
```

Output: `module.zip` — flashable Magisk/KernelSU/APatch module.

## Type Checking

```bash
npx tsc --noEmit
```

The WebUI is strict TypeScript (`strict: true`). Always run the type checker before committing.

## Shell Script Linting

```bash
find src/ -name '*.sh' -exec shellcheck {} +
```

## Pipeline System

Pipelines are text files in `src/pipelines/` listing feature scripts to run:

```
# pipelines/full_integrity
gms.sh
target.sh
security_patch.sh
keybox.sh
pif.sh?
```

- `?` suffix = optional (skipped if file missing)
- Any script exiting non-zero **aborts** the pipeline

## Adding a New Feature

1. Create a new file in `src/features/<name>.sh`
2. Follow the feature script contract (`set -e`, `MODDIR`, sourcing, `exit 0`)
3. Add it to a pipeline in `src/pipelines/`
4. Add a WebUI button in `src/webroot/index.html` with `data-script="<name>.sh"`

## Adding a Translation

1. Edit `src/webroot/lang/source/string.json` with the new English string
2. Tag the string with a `data-i18n` attribute in HTML
3. Submit translations (ar, es, ru, zh)
