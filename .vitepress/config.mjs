import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Specter",
  description: "Keybox management, security spoofing, and detection avoidance",
  base: "/specter-web/",
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", href: "/specter-web/favicon.svg", type: "image/svg+xml" }],
  ],
  vite: {
    publicDir: ".vitepress/public",
  },
  themeConfig: {
    logo: "/ghost.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/getting-started" },
    ],
    sidebar: {
      "/docs/": [
        {
          text: "Docs",
          items: [
            { text: "Getting Started", link: "/docs/getting-started" },
            { text: "WebUI Guide", link: "/docs/guide/webui" },
            { text: "Keybox Management", link: "/docs/guide/keybox" },
            { text: "Conflict Resolution", link: "/docs/guide/conflicts" },
            { text: "Configuration Reference", link: "/docs/reference/config" },
            { text: "Architecture", link: "/docs/architecture" },
            { text: "Development", link: "/docs/development" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/dpejoh/specter" },
    ],
    footer: {
      message: "Released under GNU GPL v3",
      copyright: "2026 Specter",
    },
  },
})
