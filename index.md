---
layout: home

hero:
  name: "Specter"
  text: "Keybox management, security spoofing, and detection avoidance"
  tagline: "Clean, focused, no bloat"
  image:
    src: /ghost.svg
    alt: Specter
  actions:
    - theme: brand
      text: Get Started
      link: /docs/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/dpejoh/specter

features:
  - title: Keybox Management
    details: Multi-source catalog, custom keybox import (file/URL/path), Google revocation checking, private keybox support, backup and restore
  - title: Tools
    details: target.txt generation, App Targeting, security patch spoofing, TEESimulator support, GMS kill, PIF fix, HMA-OSS, Zygisk Next, RKA configs, detection cleanup, Widevine L1
  - title: Control
    details: Per-feature toggles for boot hardening, bootloader spoofer block, ROM spoof blocking, LSPosed clean, recovery hide, action pipeline steps, and conflict resolution management
  - title: Material 3 WebUI
    details: Dark/light/auto theme with 9 color presets and Monet dynamic colors. Multi-language support (English, Arabic, Spanish, Russian, Chinese). Developer mode with live terminal
  - title: Pipeline System
    details: Orchestrated feature execution with idempotent scripts. Full integrity and root hiding pipelines with conditional optional steps
  - title: Conflict Resolution
    details: Automatic detection of conflicting modules. Aggressive and passive resolution types. No interactive prompts during install — all handled at boot
---

## Requirements

- Root access (Magisk / KernelSU / APatch)
- Tricky Store
- Play Integrity Fix or any fork (recommended)

## Support

- [GitHub](https://github.com/dpejoh/specter) — source code, issues, releases
