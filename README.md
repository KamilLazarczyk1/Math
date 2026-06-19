# Analysis 2 — Worked Solutions (Worksheets 6–10)

A self-contained website with fully worked, step-by-step solutions to Worksheets 6–10
(Dr. Simon Wittmann, Politechnika Wrocławska), plus a formula reference and a printable
cheat sheet. Math is rendered with **KaTeX bundled locally**, so the site works **completely
offline** and also on **GitHub Pages** — no internet connection required.

## Open it locally
Just double-click **`index.html`** (or open it in any browser). Everything loads from this
folder; nothing is fetched from the internet.

## Contents
| Page | Topic |
|------|-------|
| `index.html` | Home / overview |
| `worksheet6.html` | 2nd-order linear ODEs — undetermined coefficients (incl. full ODE theory primer) |
| `worksheet7.html` | Resonance + variation of parameters (tan t, eᵗ/t, 1/(eᵗ+1)) |
| `worksheet8.html` | Partial derivatives, gradient, directional derivative, differentiability |
| `worksheet9.html` | Hessian / local extrema, Jacobian / stability, chain rule |
| `worksheet10.html` | Double integral, change of variables, surface integral |
| `formulas.html` | Every formula used, tagged "on official sheet" vs "bring yourself" |
| `cheatsheet.html` | Dense, **printable** master list of all formulas (Print → Save as PDF) |

## Correctness
Every general solution, constant, derivative, eigenvalue and integral was recomputed
independently with a computer-algebra system and matched against the official answer keys
(Worksheets 6, 7, 10) or verified directly where no key was provided (Worksheets 8, 9).
All 1001 LaTeX expressions were validated to render without error.

## Share via GitHub Pages
1. Create a new GitHub repository and upload the **entire contents of this folder** (keep the
   folder structure: `katex/`, `css/`, `js/`, all `.html`, and the `.nojekyll` file).
2. In the repo: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**,
   pick the `main` branch and `/ (root)` folder, then **Save**.
3. After a minute, your site is live at `https://<your-username>.github.io/<repo-name>/`.

The `.nojekyll` file is already included so GitHub Pages serves all files as-is.

*Built for offline study — KaTeX v0.16.11 bundled locally.*
