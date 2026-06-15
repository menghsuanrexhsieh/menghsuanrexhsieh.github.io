# Personal site

A clean, fast personal/academic site built with [Jekyll](https://jekyllrb.com/)
and hosted on GitHub Pages. No external theme — everything is in this repo.

Features: a right-hand vertical nav with a portrait, sections for **CV**,
**Research**, and **Teaching**, and a **Posts** blog with tags and live
title + full-text search. Warm cream background (`#FAF8EE`) with a dark mode.

## Structure

```
index.html        Home (intro, about, recent posts)
cv.html           /cv/
research.html     /research/  (interests, publications, projects)
teaching.html     /teaching/
posts.html        /posts/     (blog index with search + tag filter)
_posts/           Your blog posts (one Markdown file each)
_layouts/         Page shells (default, post)
_includes/        head, sidebar (portrait + nav), footer
_data/            projects.yml, skills.yml
assets/           css/, js/, img/portrait.svg, favicon.svg
_config.yml       Name, tagline, intro, email, social links
```

## Editing your content

| What to change | Where |
| --- | --- |
| Name, tagline, intro, email, social | `_config.yml` |
| Portrait photo | replace `assets/img/portrait.svg` (e.g. with `portrait.jpg`) and update the `src` in `_includes/sidebar.html` |
| CV / Research / Teaching content | `cv.html`, `research.html`, `teaching.html` |
| Projects & skills | `_data/projects.yml`, `_data/skills.yml` |
| Colors, fonts, the cream background | `assets/css/style.css` (`:root` / `[data-theme]` blocks) |

### Writing a blog post

Create a file in `_posts/` named `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "My post title"
date: 2026-06-15
tags: [research, notes]
---

Your post body in Markdown…
```

Tags automatically appear as filter buttons on the Posts page, and both the
title and full body text are searchable from the search box — no extra setup.

## Preview locally

```bash
bundle install            # first time only
bundle exec jekyll serve  # → http://localhost:4000
```

## Deploy

Set up as a **user site**: the repo is named `menghsuanrexhsieh.github.io`, so
once it's **public** it serves at `https://menghsuanrexhsieh.github.io/`.

1. Make the repo public (Settings → General → Change visibility).
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.
3. Wait ~1–2 minutes. Every push to `main` rebuilds automatically.

> GitHub's free plan only serves Pages from public repos.
