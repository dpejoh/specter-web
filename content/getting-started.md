---
title: Getting Started
description: How to install and configure Specter
---

## Installation

### Prerequisites

Before installing Specter, make sure you have:

1. Root access via Magisk, KernelSU, or APatch
2. [Tricky Store](https://github.com/5ec1cff/TrickyStore/releases/latest) installed
3. A PIF fork installed (recommended):
   - [Play Integrity Fix](https://github.com/KOWX712/PlayIntegrityFix/releases/latest)
   - [Play Integrity Fork](https://github.com/osm0sis/PlayIntegrityFork/releases/latest)

### Install Specter

1. Download the latest `module.zip` from the [releases page](https://github.com/dpejoh/specter/releases/latest)
2. Flash the module in Magisk / KernelSU / APatch
3. Reboot your device

### Post-Install

1. Open the WebUI (KernelSU WebUI launcher or Specter Manager app)
2. Go to the **Tools** tab and tap **Generate target.txt**
3. Go to the **Tools** tab and tap **Install Keybox**
4. Reboot for all changes to take effect

## Build from Source

```bash
git clone https://github.com/dpejoh/specter
cd specter
npm install
npm run build
```

Output: `module.zip`
