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
    {
        id: "yaml",
        label: "YAML",
        file: "content/speakers/alex-rivera.yaml",
        lang: "yaml",
        content: `name: Alex Rivera
# Shown under the talk title
bio: |-
    Joined in 2019.
    Works on the storage layer.
topics: [php, laravel]
`,
        codeFile: "app/Models/Speaker.php",
        code: `#[Driver('yaml')]
#[ContentPath('content/speakers')]
class Speaker extends Model
{
    use Paper;
}

$speakers = Speaker::whereContains('topics', 'laravel')
    ->orderBy('name')
    ->get();`,
    },
];
