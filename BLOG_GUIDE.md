# Blog Post Guide

## Creating New Blog Posts

### 1. File Location
Create your MDX file in: `src/features/blog/content/`

### 2. File Naming
Use kebab-case: `my-awesome-post.mdx` (filename becomes URL slug)

### 3. Frontmatter Template

```yaml
---
title: "Your Blog Post Title"
description: "SEO-friendly description of your post (used in meta tags)"
image: "/og/simple?title=Your Blog Post Title"
category: "automation"  # Options: automation, ai, open-source, personal, etc.
icon: "code"  # Lucide icon name (code, zap, brain, git-pull-request, etc.)
new: true  # Shows "New" badge (remove after a while)
createdAt: "2024-10-27"  # YYYY-MM-DD format
updatedAt: "2024-10-27"  # YYYY-MM-DD format
---
```

### 4. Dynamic OG Image Setup

**IMPORTANT**: Always use the dynamic image format:
```yaml
image: "/og/simple?title=Your Exact Post Title Here"
```

This automatically generates a 1200x630px Open Graph image with:
- Your post title centered
- Branded design with your logo
- Proper formatting for social media previews

**Benefits:**
- No need to create custom images
- Consistent branding across all posts
- Automatically updates if you change the title
- Perfect for LinkedIn, Twitter, Facebook previews

### 5. Example Complete Frontmatter

```yaml
---
title: "Building AI Agents with LangChain"
description: "A comprehensive guide to building production-ready AI agents using LangChain, OpenAI, and vector databases."
image: "/og/simple?title=Building AI Agents with LangChain"
category: "ai"
icon: "brain"
new: true
createdAt: "2024-10-27"
updatedAt: "2024-10-27"
---
```

### 6. Writing Content

Use standard Markdown syntax:

```markdown
# Main Heading

Your introduction paragraph...

## Section Heading

Your content with **bold**, *italic*, and `code`.

### Subsection

- Bullet points
- Work great

```python
# Code blocks with syntax highlighting
def hello_world():
    print("Hello, World!")
```

## Tips

1. **URLs are auto-generated** from filename (no need to configure routes)
2. **Posts auto-sorted** by `createdAt` date (newest first)
3. **Categories** help organize posts (used for filtering)
4. **Icons** from Lucide React library (see: https://lucide.dev)
5. **New badge** automatically shows for posts with `new: true`

## Common Categories

- `automation` - n8n, workflow automation, DevOps
- `ai` - Machine learning, AI agents, data science
- `open-source` - OSS contributions, projects
- `personal` - Career, journey, general updates

## Common Icons

- `code` - Programming, development
- `zap` - Performance, optimization
- `brain` - AI, machine learning
- `git-pull-request` - Open source contributions
- `workflow` - Automation, processes
- `user` - Personal posts
