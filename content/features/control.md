---
title: Control
description: Per-feature toggles, boot hardening, and conflict resolution
---

The Control page gives you fine-grained control over every aspect of Specter's behavior.

## Per-Feature Toggles

| Toggle | Default | Description |
|---|---|---|
| Boot Hardening | ON | Lock down security-sensitive settings at boot |
| Bootloader Spoofer Block | ON | Block BootloaderSpoofer module |
| ROM Spoof Blocking | ON | Block ROM spoof engines (pihooks, pixelprops, entryhooks) |
| LSPosed Clean | ON | Remove LSPosed ODEX traces |
| Recovery Hide | ON | Hide TWRP/OrangeFox/PBRP folders |
| Action Pipeline Steps | ON | Enable individual pipeline step execution |
| Developer Options | OFF | Disable developer options at boot |

## Conflict Resolution

Specter automatically detects conflicting modules and resolves them silently at boot:

| Module | Conflict Area | Default |
|---|---|---|
| NoHello | Prop hardening, suspicious props | Specter blocks NoHello's service.sh |
| TSupport-Advance | Full overlap (aggressive) | Specter renames both boot scripts |
| TreatWheel | Boot hardening (passive) | Both coexist; Specter defers overlapping toggles |
| Sensitive Props | Boot hardening, suspicious props (passive) | Both coexist; Specter defers overlapping toggles |
| Yurikey Manager | Prop hardening, security patch (aggressive) | Specter renames service.sh |
| Integrity Box | Full overlap (aggressive) | Specter renames service.sh |

### Priority Control

Use the **Conflict Resolution** section in the Control page to set priority:
- **Toggle OFF** (default): Specter takes priority — the other module's boot scripts are renamed to `.bak`
- **Toggle ON**: The other module takes priority — Specter disables its overlapping features

> **Note:** When a passive-type conflict is set to "priority module," Specter only disables overlapping toggles. The other module's scripts are never renamed.

### Unaffected Modules

These modules are **never** blocked because they serve complementary roles:
- **Play Integrity Fix** — Zygisk injection and fingerprint management
- **TrickyStore** — Attestation certificate manipulation
- **TEESimulator** — TrickyStore fork with locked.xml support

## Boot Behavior

Specter applies hardening at every boot:
1. `service.sh` runs (late_start): applies immediate `ro.*` property resets
2. On KernelSU/APatch: `boot-completed.sh` runs post-boot for `settings put` operations
3. On Magisk: `service.sh` polls `sys.boot_completed` then runs the same hardening
4. A delayed re-spoof runs after 120 seconds
