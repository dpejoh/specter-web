---
title: Changelog
description: Release history for Specter
---

## v1.3.2

### Conflict Resolution Overhaul
- New conflict type system (`aggressive` vs `passive`)
- Aggressive modules (TSupport-Advance, Yurikey, Integrity Box): scripts renamed to `.bak` at boot
- Passive modules (TreatWheel, NoHello, Sensitive Props): scripts never renamed, only toggles deferred
- Bug fix: aggressive modules now call `cfg_set "conflict_$_rc_id" "priority_specter"` alongside script rename

### Fixed Feature Claims
- Treat Wheel: corrected from `boot_hardening,rom_spoof,suspicious_props` to `boot_hardening`
- Sensitive Props: corrected from `boot_hardening,suspicious_props,rom_spoof` to `boot_hardening,suspicious_props`

### Developer Options Toggle Default Off
- `toggle_dev_options` now defaults to `0` (disabled)
- `_feature_enabled()` now accepts optional 2nd argument as default value

### Tricky Addon Guard Removed
- Removed hardcoded TA_utl suspension from `target.sh`

### Installer
- Removed all volume-key conflict prompts
- Keybox default changed to Yes
- target.txt default changed to Yes

## v1.3.1

### WebUI Refactoring
- `app.ts` split from 844 to 140 lines — extracted 5 domain modules
- `target-apps.ts` cleanup — eliminated 7 module-level mutable variables

### Performance
- Batch config init (`cfgInit`): single bridge exec instead of ~15 separate spawns
- HTTP fetch cache with configurable TTL
- Network polling reduced from 3s to 15s

### APatch / KSU Compatibility
- `window.ksu` detection logic corrected

## v1.3.0

Initial public release as Specter (rewrite of Yurikey).
