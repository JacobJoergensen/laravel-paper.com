import type { ShikiConfig } from "astro";

type ShikiTransformer = NonNullable<ShikiConfig["transformers"]>[number];

export const shiki = {
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: "light",
} as const;

const labels: Record<string, string> = {
    sh: "Terminal",
    php: "PHP",
    blade: "Blade",
    json: "JSON",
    yaml: "YAML",
    markdown: "Markdown",
};

export const codeBlock: ShikiTransformer = {
    root(hast) {
        const label = labels[this.options.lang];

        if (!label) {
            return hast;
        }

        return {
            type: "root",
            children: [
                {
                    type: "element",
                    tagName: "div",
                    properties: { class: "code-block" },
                    children: [
                        {
                            type: "element",
                            tagName: "div",
                            properties: { class: "code-block-header" },
                            children: [
                                {
                                    type: "element",
                                    tagName: "span",
                                    properties: {},
                                    children: [{ type: "text", value: label }],
                                },
                                {
                                    type: "element",
                                    tagName: "button",
                                    properties: {
                                        type: "button",
                                        dataCopyText: this.source,
                                        dataPagefindIgnore: true,
                                    },
                                    children: [{ type: "text", value: "Copy" }],
                                },
                            ],
                        },
                        this.pre,
                    ],
                },
            ],
        };
    },
};
