# Jacob Iwaniw — Engineering Portfolio

A complete, static portfolio built for GitHub Pages. No package installation, paid theme, or build process is needed. All internal links are relative, so the site works at a repository subpath as well as a root domain.

## Publish the replacement

1. Unzip the download. Open the inner `jacob-portfolio` folder.
2. In your existing repository, remove the old `index.md`. Keep your existing résumé or other assets if needed. The old `_config.yml` and unused Markdown pages can also be removed after saving a copy; this replacement does not use Jekyll.
3. On the repository Code tab, choose **Add file → Upload files**. Drag the CONTENTS of the `jacob-portfolio` folder into GitHub, including the `assets` folder, not the outer folder itself. Commit to `main`.
4. Make sure `.nojekyll` is in the root. If your file picker hid it, create it using **Add file → Create new file**, name it `.nojekyll`, put a space in it, and commit.
5. Open **Settings → Pages**. Select **Deploy from a branch**, `main`, and `/ (root)`. Save. Use the exact published URL shown there.
6. Check the Actions tab for a successful Pages deployment, then open the site. A refresh or a few minutes may be needed.

### Your repository name

Your account is `Jmiwaniw`, while your repository is `JacobIwaniw.github.io`. Those names do not match the special `username.github.io` convention. Unless a custom domain is configured, the expected project-site address is:

`https://jmiwaniw.github.io/JacobIwaniw.github.io/`

This package works at that address without changes. If you want the shorter `https://jmiwaniw.github.io/`, rename the repository to `Jmiwaniw.github.io` in its General settings, provided a repository with that name does not already exist. Renaming is optional. The existing repository could not be retrieved during preparation, so use Settings → Pages to confirm its actual published URL.

## Pages

- `index.html` — minimal homepage
- `about.html` — introduction, education, tools, interests
- `projects.html` — project index
- `experience.html` — professional experience
- `community.html` — confirmed student involvement
- `rocket-structures.html`, `shattuck-automation.html`, `loops.html`, `radiaid.html` — individual case studies
- `assets/styles.css` — site design and responsive layouts
- `assets/site.js` — accessible mobile navigation and copyright year
- `assets/Jacob_Iwaniw_Resume.pdf` — supplied résumé, copied unchanged
- `.nojekyll` — tells GitHub Pages to serve the files directly

## Editing

Open an HTML file on GitHub, click the pencil, edit its text, and commit. The same header/footer is present in every HTML file so the site renders and navigates without JavaScript. Apply navigation changes consistently to all nine HTML pages. Change colors once in the `:root` section of `assets/styles.css`.

The Community page contains verified memberships, not invented volunteer experience. Add volunteering when you have the organization, role, dates, and what you did. The résumé is the previously supplied Rocket Lab résumé: replace it with a general version under the same filename when ready. Confirm that dates, GPA, project status, and achievements remain current before publishing.

## Adding real project images

The initial design uses original typography instead of stock photos or fabricated CAD screenshots. To add an image, upload it to `assets`, then add this inside the relevant HTML page:

```html
<figure>
  <img src="assets/rocket-assembly.webp"
       alt="Explain what the assembly shows"
       width="1200" height="800" loading="lazy">
  <figcaption>Describe your contribution and the engineering decision shown.</figcaption>
</figure>
```

Use the image's actual dimensions. Include real simulation loads, units, constraints, and result explanations in captions. Only publish material you have permission to share. Avoid placing unapproved employer images or proprietary data in the public repository.

## Quality checks before sharing

- Open every page and test the résumé, email, and LinkedIn links.
- On a narrow screen, test Menu, Close, and project links.
- Replace the supplied résumé if needed, and review public contact information.
- Add actual project photography and analysis figures as they become available.

No third-party scripts, trackers, external fonts, or framework dependencies are required.
