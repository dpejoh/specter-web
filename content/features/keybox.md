---
title: Keybox Management
description: Multi-source keybox catalog, custom keyboxes, Google revocation checking
---

Specter provides comprehensive keybox management through an intuitive WebUI interface.

## Features

### Multi-Source Catalog

Browse and install keyboxes from the integrated catalog. The catalog provides:
- Multiple keybox sources with version tracking
- Google revocation status checking
- Source attribution for each keybox

### Custom Keybox

Import keyboxes from:
- **File upload** — pick a keybox XML file from your device
- **URL** — provide a direct download URL
- **Path** — specify a local file path on your device

### Private Keybox Support

Specter supports private keyboxes that are not part of the public catalog. These are also checked against Google's attestation endpoint for revocation status.

### Google Revocation Checking

Every keybox is checked against [Google's attestation endpoint](https://android.googleapis.com/attestation/status) before installation. Revoked keyboxes display a warning badge in the UI but can still be installed.

### Backup and Restore

- **Backup** — save your current keybox configuration
- **Restore** — recover from a previous backup

## How It Works

1. Keybox is downloaded or uploaded
2. Keys and certificate serial are validated
3. Serial is checked against Google's revocation list
4. Valid keybox is installed to Tricky Store's `keybox.xml`

## Related Paths

| Path | Purpose |
|---|---|
| `/data/adb/tricky_store/keybox.xml` | Active keybox |
| `/data/adb/tricky_store/keybox.xml.bak` | Keybox backup |
| `/data/adb/tricky_store/locked.xml` | Locked keybox (TEESimulator) |
