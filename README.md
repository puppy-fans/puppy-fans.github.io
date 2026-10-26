# Puppy Panic #847 – fan site

A small Jekyll site that GitHub Pages builds for you automatically. No installs needed.

## Put it online

1. Create a new repository on GitHub. Naming it `YOUR-USERNAME.github.io` gives you the address `https://YOUR-USERNAME.github.io/`. Any other name gives `https://YOUR-USERNAME.github.io/REPO-NAME/`.
2. Upload everything in this folder (keep the folder structure) to the repository's main branch. On github.com you can drag the files and folders onto **Add file › Upload files**.
3. If you used a repo name other than `YOUR-USERNAME.github.io`, open `_config.yml` and change `baseurl: ""` to `baseurl: "/REPO-NAME"`.
4. Go to **Settings › Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then save.
5. After a minute or two the site appears at the address shown on that Settings page.

## Updating it

Everything can be done in the browser on github.com. Each change goes live a minute or two after you commit it.

**Bio** – edit `index.md`. Write under the `---` lines. Leave a blank line between paragraphs.

**News** – in the `_posts` folder, choose **Add file › Create new file** and name it with the date first, like `2026-11-08-first-b-team-game.md`. Start it with:

```
---
title: "My first B Team game"
---

Write the post here.
```

Newest posts show first. To remove a post, delete its file. Delete `2026-10-26-site-launch.md` whenever you like.

**Gallery** – upload photos into the `photos` folder (jpg, png, webp or gif). Start the file names with the date, like `2026-11-08-lineup.jpg`, and the newest show first. Large phone photos load slowly, so shrinking them to around 1600 px wide first helps.

**Captions (optional)** – add a line to `_data/captions.yml`, like:

```
2026-11-08-lineup.jpg: "Lining up for my first jam"
```

**Headshot** – replace `assets/img/headshot.webp` with a new file of the same name.
