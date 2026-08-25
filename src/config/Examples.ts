export interface Example {
    id: string;
    label: string;
    file: string;
    lang: string;
    content: string;
    codeFile: string;
    code: string;
}

export const examples: Example[] = [
    {
        id: "markdown",
        label: "Markdown",
        file: "content/posts/hello-world.md",
        lang: "markdown",
        content: `---
title: Building a Blog with Flat Files
published: true
date: "2024-03-15"
tags: [laravel, markdown]
---

Flat files, version controlled, reviewed in a pull request.
`,
        codeFile: "app/Models/Post.php",
        code: `#[Driver('markdown')]
#[ContentPath('content/posts')]
class Post extends Model
{
    use Paper;
}

$posts = Post::where('published', true)
    ->whereContains('tags', 'laravel')
    ->orderBy('date', 'desc')
    ->get();`,
    },
    {
        id: "json",
        label: "JSON",
        file: "content/team/jane-doe.json",
        lang: "json",
        content: `{
    "name": "Jane Doe",
    "role": "Developer",
    "github": "janedoe"
}
`,
        codeFile: "app/Models/TeamMember.php",
        code: `#[Driver('json')]
#[ContentPath('content/team')]
class TeamMember extends Model
{
    use Paper;
}

$developers = TeamMember::where('role', 'Developer')
    ->orderBy('name')
    ->get();`,
    },
];
