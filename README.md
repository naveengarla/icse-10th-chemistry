# ICSE Class X Chemistry · Practice

Offline, interactive practice pages built from the past-paper questions in Dalal's textbook. On each question she answers first, then can open a 💡 hint, then a 📘 concept lesson with diagrams, then the step-by-step solution. Page numbers refer to the printed textbook.

Open `index.html`. It works straight from disk or on GitHub Pages and needs no build step.

**Live site:** https://naveengarla.github.io/icse-10th-chemistry/ (GitHub Pages, served from `main` /). Push to `main` and the site updates in about a minute.

## Chapters
| Chapter | Pages |
|---|---|
| 2 Chemical bonding | practice |
| 4 Mole concept & stoichiometry | 4 practice pages + Mole Lab |
| 5 Electrolysis | 2 practice pages + Electrolysis Lab |
| 7A Hydrogen chloride | 📖 reading guide + practice |
| 7B Ammonia | practice |
| 7C Nitric acid | practice |

## Layout
```
index.html            home page: chapter list, progress bars, export/import progress
data/chapters.js      the list shown on the home page
data/<page>.js        one practice page's content: PAGE, TOPICS, CONCEPT, Q, CHAPTER ...
chapters/<page>.html  thin shell that loads lib/ + its data file
data/hcl-guide.js     7A reading guide (standalone page, no questions, no progress)
prompts/              reusable prompts: clear-writing.md (style), new-chapter.md (session starters)
docs/                 new-chapter-playbook.md: full workflow, decisions, lessons learned
CLAUDE.md             rules Claude Code loads automatically in every session
lib/                  shared engine (common.js, engine.js, style.css)
lab/                  interactive tools: lab.js, chem.js, lab.css, one w-<tool>.js per tool
tools/                tests (Node) + book.py (renders textbook pages)
book/                 rendered textbook pages for the 📖 links (git-ignored, local only)
sources/              textbook PDFs + legacy drafts (git-ignored, local only)
```

## Add a chapter
1. Write `data/<name>.js`. Copy an existing one; the contract is documented at the top of `lib/engine.js`. Give it a new, unique `PAGE.key`.
2. Copy any file in `chapters/` to `chapters/<name>.html` and change the one `../data/….js` line.
3. Add one line to `data/chapters.js`.
4. Render the book pages: `python tools/book.py "sources/<chapter>.pdf" <dir> <first printed page>`, then set `PAGE.book={dir,from,to}` in the data file. Page numbers in the 📖 refs then open the scanned page. The scans go to `book/`, which is git-ignored, and the links show only when the page is opened from disk.
5. Run the tests.

### Visuals (cheap, from chapter 6 onward)
No Lab widgets or hand-drawn animated SVGs. Use instead:
- **Book page links** (step 4): the textbook's own diagrams.
- **`flow(...)` strips** (lib/common.js): the order of the apparatus, or a cause → effect chain such as the fountain experiment.
- **`watch('search terms')`** (lib/common.js): a "▶ Watch it" YouTube search link for each experiment.

Add a simple static diagram only when an answer genuinely needs one.

Keep filenames lowercase-kebab, because GitHub Pages is case-sensitive.

## Writing style for concept text
Write concept text by [prompts/clear-writing.md](prompts/clear-writing.md). It is a light version of ASD-STE100 Simplified Technical English:
- short sentences, one idea per sentence
- numbered steps, one action per step, with "You see:" lines for observations
- a 📘 Terms table, and one name for each thing
- a **"Why …? / Why not …?" table** after each method or experiment
- ★ definitions and exam-ready answers keep the textbook wording, passive voice included

### Reading guides
A reading guide is a separate page that explains the whole chapter in this style, with no questions. The first one is `chapters/hcl-guide.html` (7A). To add one:
1. Write `data/<name>-guide.js`. Copy `data/hcl-guide.js`.
2. Write `chapters/<name>-guide.html`. Copy `chapters/hcl-guide.html`.
3. Add a `lab:1` line in `data/chapters.js`, above the chapter's practice page.

The existing practice pages stay unchanged.

## Add a Lab tool
Create `lab/w-<id>.js` that calls `LAB.add({id,icon,name,blurb,ref,mount(el)})`, then add its `<script>` tag to `chapters/mole-lab.html`.

## Tests
```
cd tools && npm install && npm test
```
The tests check every data file (all question types render, counts match coverage), every Lab tool, and that every page loads without errors and with no broken links.

## Publishing
- Never commit PDFs or textbook scans. `.gitignore` excludes `sources/`, `book/` and `*.pdf`. To check, run `git ls-files | grep -i pdf`. It should print nothing.
- The repo is public. Commits use the GitHub noreply email (set in this repo's local git config).

## Progress
Progress is saved in the browser's localStorage, which is separate for each site, so `file://` and the GitHub Pages URL do not share it. Use **Export / Import progress** on the home page to move it. Never change an existing `PAGE.key`: that would reset her progress.
