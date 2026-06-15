# Personal site

A clean, fast personal portfolio built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages. No external theme — the whole thing is in this repo and easy to edit.

## Editing your content

Most changes don't require touching HTML:

| What you want to change | Edit this file |
| --- | --- |
| Name, tagline, intro, email, social links | `_config.yml` |
| Projects (cards) | `_data/projects.yml` |
| Skills | `_data/skills.yml` |
| About paragraph, section copy | `index.html` |
| Colors, fonts, spacing | `assets/css/style.css` (the `:root` / `[data-theme]` blocks) |

> After editing `_config.yml`, restart the local server for changes to show.

## Preview locally

```bash
bundle install          # first time only
bundle exec jekyll serve # then open http://localhost:4000
```

## Deploy

This repo is set up as a **user site** — name the repo `menghsuanrexhsieh.github.io` and it will be served at `https://menghsuanrexhsieh.github.io/`.

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, branch `main`, folder `/ (root)`.
4. Wait ~1–2 minutes for the first build.

Every push to `main` rebuilds and redeploys automatically.

### Using a normal project repo instead?

If the repo is **not** named `<username>.github.io`, set `baseurl: "/your-repo-name"` in `_config.yml` so asset links resolve correctly. The site will live at `https://menghsuanrexhsieh.github.io/your-repo-name/`.
