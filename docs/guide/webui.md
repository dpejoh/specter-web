---
title: WebUI Guide
description: How to use Specter's WebUI — all 4 tabs explained
---

Specter's WebUI has 4 tabs: **Home**, **Tools**, **Control**, and **Settings**.

## Home

Shows device and keybox status at a glance.

- **Keybox card** — source, version, format (XML/locked), Google revocation badge
- **Device info grid** — module version, Android release, kernel, root solution, security patch date, TEE status, flags
- **Refresh** — re-runs device info and keybox status checks

## Tools

Organized into 5 sections:

### Keybox
- **Install Keybox** — select a provider from the catalog, tap install
- **Set Custom Keybox** — import from file, URL, or device path; serial auto-detection + catalog matching for private keyboxes

### Tricky Store
- **Set target.txt** — generate or regenerate Tricky Store's target list
- **App Targeting** — interactive overlay for per-app targeting states (unchecked / bare / conditional `?` / force `!`)
- **Set Security Patch** — set spoofed security patch date (auto-generates previous month's date)

### Google Services
- **Kill Play Store** — force-stops and clears Play Store cache/data

### Module Configs
- **HMA-OSS** — download and deploy Hide My Applist config
- **Zygisk Next** — configure denylist and memory mode
- **PIF Fingerprint** — update Play Integrity Fix fingerprints
- **RKA Config** — provision Remote Key Attestation for PlayStrong

### Danger Zone
- **Clear All Detection Traces** — full cleanup (recovery hiding, prop hardening, suspicious props, bootloader spoofer removal, temp files)
- **Kill All Processes** — force-stop all detector, GMS, remote control, and tool apps
- **Scan & Clean Suspicious Props** — check for 17 known leftover persistent props from modding tools
- **Fix Widevine L1** — download attestation keys and run kmInstallKeybox (Qualcomm only)

## Control

### Boot Behavior toggles

| Toggle | Default | What it does |
|---|---|---|
| Auto-Hide Recovery Folders | ON | Hide TWRP/OrangeFox/PBRP folders from /sdcard at boot |
| Boot Hardening | ON | Lock down security-sensitive settings at boot |
| Disable Developer Options | OFF | Disable dev options at boot |
| Bootloader Spoofer Block | ON | Remove es.chiteroman.bootloaderspoofer if installed |
| Block ROM Spoof Engines | ON | Disable PixelProps/PIHooks/EntryHooks via persist props |
| LSPosed ODEX Clean | ON | Delete LSPosed base.odex traces at boot |

### Conflict Resolution

Lists detected conflicting modules. Each has a switch to set priority:
- **OFF** (default): Specter takes priority — the other module's boot scripts are renamed to `.bak`
- **ON**: The other module takes priority — Specter disables its overlapping features

### Action Pipeline

Controls which steps run when you tap the action button:
- Kill Play Store, Regenerate Target, Set Security Patch, Set Fingerprint (PIF)

## Settings

- **Language** — auto-detect or manually select (English, Arabic, Spanish, Russian, Chinese)
- **Appearance** — Light / Dark / Auto mode + 9 color presets (blue, yellow, red, purple, green, orange, pink, cyan, grey) + Monet dynamic colors (Android 12+)
- **Developer Mode** — enables live terminal output during script execution, detailed activity history viewer
- **Update & Support** — links to GitHub, Telegram support group
- **Contributors** — project contributor credits
