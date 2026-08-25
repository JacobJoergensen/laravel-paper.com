// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: "https://laravel-paper.com",
    integrations: [mdx(), sitemap()],
    prefetch: {
        prefetchAll: true,
    },
    redirects: {
        "/docs": "/docs/getting-started",
    },
    fonts: [
        {
            name: "Inter",
            cssVariable: "--font-inter",
            provider: fontProviders.google(),
            weights: [400, 450, 500, 600],
            styles: ["normal"],
            subsets: ["latin"],
            fallbacks: ["system-ui", "sans-serif"],
        },
        {
            name: "Newsreader",
            cssVariable: "--font-newsreader",
            provider: fontProviders.google(),
            weights: [400, 500, 600],
            styles: ["normal", "italic"],
            subsets: ["latin"],
            fallbacks: ["Georgia", "serif"],
        },
        {
            name: "JetBrains Mono",
            cssVariable: "--font-jetbrains-mono",
            provider: fontProviders.google(),
            weights: [400, 500, 600, 700],
            styles: ["normal"],
            subsets: ["latin"],
            fallbacks: ["ui-monospace", "monospace"],
        },
    ],
    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        shikiConfig: {
            themes: {
                light: "github-light",
                dark: "github-dark",
            },
            defaultColor: "light",
        },
    },
});
