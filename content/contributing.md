---
title: Contributing
description: How to contribute to Specter
---

## Pull Request Process

1. Branch from `main`
2. Make changes only in `src/` — never `Module/` or `module/`
3. Run `npx tsc --noEmit` and `npm run build` — both must pass
4. Open a PR against the `main` branch
5. Include a clear description of what the change does

## Conventions

### Git Commit Format

```
type: description
```

Types: `fix:`, `feat:`, `refactor:`, `chore:`, `docs:`, `test:`

### Shell Script Rules

- All executable scripts use `set -e`
- Library scripts (`lib/*.sh`) do NOT use `set -e`
- Use `log()` from `lib/common.sh` for all output
- Never use `su -c` in feature scripts
- Never hardcode paths — use `$MODDIR`
- Never edit `.js` files — edit the `.ts` source files

### Boot Safety

`service.sh` and `boot-completed.sh` run in critical boot phases. Every `resetprop` call must use `resetprop_if_diff` with full `2>/dev/null || true` guards. Never call `apply_prop_hardening()`, `check_prop()`, `disable_rom_spoof_engines()`, or `persistprop()` from boot scripts.

## License

GNU GPL v3.0
