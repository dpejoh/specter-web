---
title: Getting Started
description: Install Specter and run it for the first time
---

## Prerequisites

1. Root via Magisk, KernelSU, or APatch
2. [Tricky Store](https://github.com/5ec1cff/TrickyStore/releases/latest) installed
3. A PIF fork installed (recommended): [Play Integrity Fix](https://github.com/KOWX712/PlayIntegrityFix/releases/latest) or [Play Integrity Fork](https://github.com/osm0sis/PlayIntegrityFork/releases/latest)

## Install

1. Download `module.zip` from the [releases page](https://github.com/dpejoh/specter/releases/latest)
2. Flash in Magisk / KernelSU / APatch
3. During install: choose whether to install a keybox and generate target.txt (volume keys)
4. Reboot

## First Run

1. Open the WebUI (KernelSU WebUI launcher or Specter Manager app)
2. **Tools tab** → tap **Generate target.txt**
3. **Tools tab** → tap **Install Keybox**
4. Reboot

Alternatively, use the action button in Magisk Manager / KernelSU modules page — it runs the full setup pipeline automatically.

## Build from Source

```bash
git clone https://github.com/dpejoh/specter
cd specter
npm install
npm run build
```

Output: `module.zip`
