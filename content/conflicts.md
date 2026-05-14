---
title: Conflict Handling
description: How Specter detects and resolves conflicts with other modules
---

Specter automatically detects conflicting modules and resolves them silently. No user prompts during install — all conflict handling is done at boot and configurable from the Control page.

## How It Works

At every boot, `service.sh` calls `resolve_conflicts()` which:

1. **Detects** conflicting modules by checking `/data/adb/modules/<id>/`
2. **Reads** the user's choice from config (`priority_specter` or `priority_module`)
3. **Acts** based on the choice:
   - `priority_specter` (default): renames the module's boot scripts to `.bak`
   - `priority_module`: Specter disables its overlapping features

## Conflict Types

| Type | Behavior | Examples |
|---|---|---|
| **Aggressive** | 100% overlap — full replacement. Scripts renamed to `.bak` at boot. No user prompt. | TSupport-Advance, Yurikey, Integrity Box |
| **Passive** | Partial overlap — both coexist. Scripts never renamed. Specter defers overlapping toggles. | TreatWheel, NoHello, Sensitive Props |

## Per-Module Table

| Module | Detection | Default | Specter Priority | Module Priority |
|---|---|---|---|---|
| NoHello | `/data/adb/modules/nohello` | Block service.sh | Rename service.sh → .bak | Specter skips boot hardening, suspicious props, LSPosed clean, ROM spoof block |
| TSupport-Advance | `/data/adb/modules/tsupport-advance` | Block both boot scripts | Rename post-fs-data.sh + service.sh → .bak | Specter skips all overlapping features |
| TreatWheel | `/data/adb/modules/treat_wheel` | Block service.sh | Rename service.sh → .bak | Specter skips boot hardening, ROM spoof block, suspicious props |
| Sensitive Props | `/data/adb/modules/sensitive_props` | Block service.sh | Rename service.sh → .bak | Specter skips boot hardening, suspicious props, ROM spoof block |
| Yurikey Manager | `/data/adb/modules/Yurikey` | Block service.sh | Rename service.sh → .bak | Specter skips boot hardening, security patch, suspicious props, ROM spoof block |
| Integrity Box | `/data/adb/Box-Brain` + `/data/adb/modules/playintegrityfix` | Block service.sh | Rename service.sh → .bak | Specter skips all overlapping features |

## Always Blocked

| Module | Action |
|---|---|
| BootloaderSpoofer (`es.chiteroman.bootloaderspoofer`) | `pm uninstall --user 0` |

## Compatible Modules (Never Blocked)

| Module | Reason |
|---|---|
| Play Integrity Fix | Essential, complementary features |
| TrickyStore | Different layer from prop spoofing |
| TEESimulator | TrickyStore fork — already integrated |

## Backup and Restore

Specter keeps a list of renamed scripts at `/data/adb/Specter/conflict_backups.txt`. On uninstall, all `.bak` files are automatically restored.

## Important Notes

- Do **not** manually rename `.bak` files back while Specter is active
- Do **not** run both TSupport-Advance and Specter with both active
- NoHello's Zygisk root hiding keeps working even when its `service.sh` is blocked
- TreatWheel's Zygisk library stays active when its `service.sh` is blocked
