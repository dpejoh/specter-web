---
title: Conflict Resolution
description: How Specter detects and resolves conflicts with other modules
---

Specter detects conflicting modules at boot and resolves them automatically — no user prompts during install.

## Conflict Types

| Type | Behavior | Examples |
|---|---|---|
| **Aggressive** | 100% feature overlap. Specter renames the module's boot scripts to `.bak`. The module's native/Zygisk code continues to work. | TSupport-Advance, Yurikey, Integrity Box |
| **Passive** | Partial overlap. Both modules coexist. Specter disables only its overlapping toggles. The other module's scripts are never renamed. | TreatWheel, NoHello, Sensitive Props |

## Detected Modules

| Module | Type | Overlapping features |
|---|---|---|
| NoHello | Passive | boot hardening |
| TSupport-Advance | Aggressive | boot hardening, security patch, suspicious props, LSPosed clean, ROM spoof block, bootloader spoofer, target |
| TreatWheel | Passive | boot hardening |
| Sensitive Props | Passive | boot hardening, suspicious props |
| Yurikey | Aggressive | boot hardening, security patch, suspicious props, ROM spoof block |
| Integrity Box | Aggressive | boot hardening, security patch, suspicious props, ROM spoof block, bootloader spoofer, target |

## Setting Priority

In the **Control tab** → **Conflict Resolution** section, each module has a toggle:

- **OFF** (default): Specter takes priority — the other module's boot scripts are blocked
- **ON**: The other module takes priority — Specter disables its overlapping features

For passive modules, toggling ON only disables Specter's overlapping toggles; the other module's scripts are never touched.

## Compatible Modules

These modules are **never** blocked — they serve complementary roles:
- **Play Integrity Fix** — Zygisk injection and fingerprint management
- **TrickyStore** — attestation certificate manipulation
- **TEESimulator** — TrickyStore fork

## Backup and Restore

Specter tracks renamed scripts in `/data/adb/Specter/conflict_backups.txt`. On uninstall, all `.bak` files are restored automatically — no permanent changes to other modules.
