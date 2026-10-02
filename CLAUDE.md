# ICSE Class 10 Chemistry practice site: notes for AI agents

Static HTML practice pages for one student's ICSE Class 10 Chemistry (Dalal textbook). No build step. Live at https://naveengarla.github.io/icse-10th-chemistry/ (public repo, GitHub Pages from `main`).

**Building a new chapter? Read [docs/new-chapter-playbook.md](docs/new-chapter-playbook.md) first.** It holds the whole workflow, the decisions behind it and the lessons learned.

## Hard rules
- **Never commit PDFs or textbook scans.** `sources/`, `book/` and `*.pdf` are git-ignored. Before every push, run `git ls-files | grep -i pdf`. It must print nothing.
- **Never change an existing `PAGE.key`.** The key stores the student's progress. A changed key resets it.
- **Never drop a question.** Every textbook question goes on a practice page: exercises, solved examples, past ICSE papers, MCQs and HOTS.
- **Commit or push only when the user asks.** Commits use the GitHub noreply email in this repo's local git config.
- **Keep costs low.** No interactive Lab widgets and no animated or elaborate SVGs for new chapters. Use one agent per chapter (two if the chapter is very large). Start a fresh session for each chapter.
- Use lowercase-kebab filenames. GitHub Pages is case-sensitive.
- Run `cd tools && npm test` after every change. It must print "All checks passed".

## Writing
Concept text and reading guides follow [prompts/clear-writing.md](prompts/clear-writing.md): short sentences, one action per step, a Terms table, one name per thing, and "Why …? / Why not …?" tables. ★ definitions and exam answers keep the textbook wording.

## Where things are
See [README.md](README.md) for the layout. The data-file contract is at the top of [lib/engine.js](lib/engine.js). Copy a recent chapter as a model: `data/nitric.js` for a practice page, `data/hcl-guide.js` for a reading guide.
