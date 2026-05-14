---
title: Keybox Management
description: Install, validate, and manage keyboxes for Tricky Store
---

Specter installs and manages keyboxes for Tricky Store. A keybox is an XML file containing attestation certificate keys used to pass device integrity checks.

## Keybox Catalog

Specter fetches a multi-source catalog of available keyboxes. Each entry shows:
- Provider name and source attribution
- Version tracking
- Google revocation status

To install: **Tools tab** → select a provider → tap **Install Keybox**.

## Custom Keybox

Import a keybox from three sources:
- **File** — pick a `.xml` file from your device storage
- **URL** — paste a direct download URL
- **Path** — specify a local file path on device

Custom keyboxes can be marked as **private** (not tied to any catalog entry).

## Google Revocation

Every keybox serial is checked against Google's attestation endpoint at install time. Revoked keyboxes show a warning badge in the UI but can still be installed.

## How It Works

1. Keybox is fetched (catalog download, file upload, or URL fetch)
2. The shuffled-base64 encoded payload is decoded via `tr` + `base64 -d`
3. Keys (ECDA/RSA) and certificate serial are validated
4. Serial is checked against Google's revocation list
5. Valid keybox is installed to Tricky Store as `keybox.xml`
6. Previous keybox is backed up to `keybox.xml.bak`

For TEESimulator (Tricky Store fork), keybox is installed as `locked.xml` instead.

## Related Paths

| Path | Purpose |
|---|---|
| `/data/adb/tricky_store/keybox.xml` | Active keybox |
| `/data/adb/tricky_store/keybox.xml.bak` | Previous keybox backup |
| `/data/adb/tricky_store/locked.xml` | TEESimulator locked keybox |
