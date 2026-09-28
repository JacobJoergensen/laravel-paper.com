export function toMarkdown(title: string, description: string, body: string): string {
    const content = body
        .replace(/^import .+;\n/gm, "")
        .replace(/<CodeBlock code="(.+?)" \/>/g, "```sh\n$1\n```")
        .replace(/<Callout label="(.+?)">([\s\S]+?)<\/Callout>/g, (_, label: string, text: string) => {
            return `> **${label}:** ${text.trim().replace(/\s+/g, " ")}`;
        })
        .trim();

    return `# ${title}\n\n${description}\n\n${content}\n`;
}
