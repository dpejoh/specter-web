---
title: Configuration Reference
description: All config toggles, paths, and URLs
---

## Config Toggles

Stored as individual `.val` files in `/data/adb/Specter/config/` (Magisk/APatch) or via `ksud module config` (KernelSU).

### Boot Behavior

| Key | Default | Description |
|---|---|---|
| `toggle_recovery` | 1 | Hide TWRP/OrangeFox/PBRP folders at boot |
| `toggle_boot_hardening` | 1 | Apply security prop hardening at boot |
| `toggle_dev_options` | 0 | Disable Developer Options at boot |
| `toggle_bootloader_spoofer` | 1 | Block BootloaderSpoofer module |
| `toggle_rom_spoof` | 1 | Block ROM spoof engines (PixelProps, PIHooks, EntryHooks) |
| `toggle_lsposed` | 1 | Clean LSPosed base.odex traces at boot |
| `toggle_security_patch` | 1 | Write spoofed security patch at boot |
| `toggle_suspicious_props` | 1 | Clean suspicious persistent props at boot |

### Action Pipeline

| Key | Default | Description |
|---|---|---|
| `toggle_action_gms` | 1 | Kill Play Store in action pipeline |
| `toggle_action_target` | 1 | Regenerate target.txt in action pipeline |
| `toggle_action_security_patch` | 1 | Set security patch in action pipeline |
| `toggle_action_pif` | 0 | Run PIF update in action pipeline |

### Features

| Key | Default | Description |
|---|---|---|
| `toggle_cleanup` | 1 | Detection trace cleanup |
| `toggle_gms` | 1 | GMS kill feature |
| `toggle_hma` | 1 | HMA-OSS config deploy |
| `toggle_kill_all` | 1 | Kill all detector processes |
| `toggle_pif` | 1 | PIF fingerprint update |
| `toggle_rka` | 1 | RKA config provision |
| `toggle_target` | 1 | target.txt generation |
| `toggle_widevine` | 1 | Widevine L1 fix |
| `toggle_zygisk_next` | 1 | Zygisk Next config |

### Keybox

| Key | Default | Description |
|---|---|---|
| `kb_provider` | auto | Keybox catalog provider |
| `kb_custom_type` | (empty) | Custom keybox type (file/url/path) |
| `kb_custom_value` | (empty) | Custom keybox value |
| `kb_private` | (empty) | Private keybox flag |

### UI

| Key | Default | Description |
|---|---|---|
| `theme` | dark | Theme mode (dark/light/auto) |
| `theme_preset` | monet | Color preset |
| `monet_seed` | (auto) | Cached Monet seed color |
| `lang` | auto | Language |
| `dev_mode` | false | Developer mode |

## Paths

| Path | Purpose |
|---|---|
| `/data/adb/tricky_store/keybox.xml` | Active keybox |
| `/data/adb/tricky_store/keybox.xml.bak` | Keybox backup |
| `/data/adb/tricky_store/locked.xml` | TEESimulator locked keybox |
| `/data/adb/tricky_store/target.txt` | Tricky Store target list |
| `/data/adb/tricky_store/security_patch.txt` | Spoofed security patch date |
| `/data/adb/tricky_store/tee_status` | TEE status flag |
| `/data/adb/Specter/` | Specter module data directory |
| `/data/adb/Specter/config/*.val` | Config toggle files |
| `/data/adb/Specter/conflict_backups.txt` | Renamed script backup manifest |
| `/data/adb/Specter/persist_backup.txt` | Persisted property restore list |

## URLs

| URL | Purpose |
|---|---|
| `https://rawbin.netlify.app/key` | Keybox download |
| `https://rawbin.netlify.app/key/catalog` | Keybox catalog |
| `https://rawbin.netlify.app/clips/attestation` | Attestation clips |
| `https://rawbin.netlify.app/clips/hma` | HMA-OSS config |
| `https://android.googleapis.com/attestation/status` | Google revocation check |
