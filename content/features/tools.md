---
title: Tools
description: Security tools and utilities in Specter
---

Specter provides a variety of tools accessible from the WebUI to manage and harden your device.

## target.txt Generation

Generate Tricky Store's `target.txt` — a list of packages that should be targeted for keybox-based attestation.

Includes:
- Fixed system targets (7 hardcoded entries)
- Per-app targeting with configurable states
- Blacklist support for excluding specific apps
- Interactive App Targeting for custom overlays

## App Targeting

Configure per-app behavior with state presets:

- **Target** — app gets the keybox treatment
- **Exclude** — app is excluded from targeting
- **Default** — uses the standard configuration

A searchable UI lets you filter by app name or package ID, and toggle system app visibility.

## Security Patch Spoofing

Spoof the security patch date to the previous month. This helps pass CTS/Play Integrity checks that verify the security patch level.

Works by writing to Tricky Store's `security_patch.txt`.

## TEESimulator Support

Detects TEESimulator (Tricky Store fork) and adjusts behavior accordingly, including locked.xml format support.

## GMS Kill

Force-stops and clears the Google Play Store cache. Useful for resetting Play Integrity state to force a fresh check.

## PIF Fix

Updates [Play Integrity Fix](https://github.com/KOWX712/PlayIntegrityFix/releases/latest) fingerprints. Requires an active internet connection.

## HMA-OSS Configuration

Deploys a [Hide My Applist OSS](https://github.com/Dr-TSNG/Hide-My-Applist) configuration that hides root-related packages from detection.

## Zygisk Next Configuration

Configures [Zygisk Next](https://github.com/Dr-TSNG/ZygiskNext) denylist and memory management settings.

## Remote Key Attestation (RKA)

Provisions config for the PassIt app to enable Remote Key Attestation — offloading attestation to a remote server.

## Detection Cleanup

Clears all detection traces including:
- ADB debugging props
- Persistent debug properties
- Stale LSPosed ODEX files

## Widevine L1 Fix

Downloads attestation keys and runs `KmInstallKeybox` to restore Widevine L1 DRM on Qualcomm devices.
