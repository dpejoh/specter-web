---
title: Settings
description: Theme, language, developer mode, and contributors
---

## Theme

Specter's WebUI supports Material 3 theming with multiple customization options:

- **Mode**: Light, Dark, or Auto (follows system preference)
- **Color Presets**: 9 presets (blue, yellow, red, purple, green, orange, pink, cyan, grey)
- **Monet**: Android 12+ dynamic color extraction from wallpaper

The theme engine uses Material Web Components' CSS custom properties for consistent Material 3 design tokens.

## Language

Specter supports multiple languages:

| Language | Code |
|---|---|
| English | en |
| Chinese (Simplified) | zh |
| Russian | ru |
| Spanish | es |
| Arabic | ar |

Translations are loaded asynchronously from the `lang/` directory. English source strings are in `lang/source/string.json`.

## Developer Mode

Enable **Developer Mode** in settings to access:
- Live terminal with real-time stdout/stderr streaming during script execution
- Detailed script output history viewer
- Advanced diagnostic information

## Contributors

The contributors section displays project contributors in a grid layout. Data is loaded from `json/dev.json`.
