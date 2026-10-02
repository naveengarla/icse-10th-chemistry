# Playbook: adding a new chapter

This file holds the know-how from building chapters 2, 4, 5 and 7A–7C. An AI agent or a person can follow it on any computer.

## 0. Set up a new computer
1. Clone the repo: `git clone https://github.com/naveengarla/icse-10th-chemistry`.
2. Copy the textbook chapter PDFs into `sources/`. They are not in git. Name them like `sources/7.A. Hydrogen Chloride.pdf`.
3. Install Node.js. Then run `cd tools && npm install && npm test`.
4. Install Python with PyMuPDF: `pip install pymupdf`. `tools/book.py` uses it to render textbook pages.
5. Set git to use the noreply email for this repo: `git config user.email "8161871+naveengarla@users.noreply.github.com"`.

## 1. What a chapter consists of
| Piece | Files | Required? |
|---|---|---|
| Practice page(s) | `data/<name>.js` + `chapters/<name>.html` | Yes |
| Reading guide | `data/<name>-guide.js` + `chapters/<name>-guide.html` | Recommended. The student liked the 7A guide. |
| Home page entry | one line in `data/chapters.js` per page | Yes |
| Book scans | `book/<dir>/p<N>.jpg` via `tools/book.py` | Local only. Never commit them. |

Split a big chapter into several practice pages, for example `mole-1` … `mole-4`. Aim for 30–100 questions per page.

## 2. The practice page: how each question works
The student answers first. Then she can open:
1. 💡 a hint,
2. 📘 a concept lesson (the `CONCEPT` entry for the question's topic),
3. the step-by-step solution.

Lessons use the helpers in `lib/common.js`: `hook()` (a starting question), `story()` (the idea in plain words), `steps()`, `flow()` (apparatus order or cause → effect chain), `trap()` (where marks are lost), `cy()` (check yourself), `exam()` (exam-ready answer), `watch()` (YouTube search link) and `tr()` (table rows).

Refer to printed page numbers ("p.152"). Do not crop images from the PDF. It is slow, and the student did not need it. Set `PAGE.book` so the page numbers link to the scans.

## 3. Workflow
1. **Render the pages.** Run `python tools/book.py "sources/<chapter>.pdf" <dir> <first printed page>`. Read the pages.
2. **Make a question list first.** Before any writing, list every question number in the chapter: exercises, solved examples, past ICSE questions, MCQs, HOTS. Assign each number to a page and a topic. Later, check the finished data against this list. No question may be missing.
3. **Write the data file.** Copy `data/nitric.js` (the most recent full chapter). The contract is at the top of `lib/engine.js`. Give it a new, unique `PAGE.key` like `<name>-v1`.
4. **Check the chemistry yourself.** Verify every numerical in Python. Read the agent's chemistry claims critically. Example: one agent wrote that Ni²⁺ is discharged before H⁺ because of its position in the series. The real reason is concentration.
5. **Write the reading guide** by [prompts/clear-writing.md](../prompts/clear-writing.md). Copy `data/hcl-guide.js`. Start with a "Start here" section: the chapter path as a `flow()` strip, the 2–3 ideas that explain most of the chapter, and one Terms table.
6. **Add the home page lines** in `data/chapters.js`. Put the guide (`lab:1`) above the practice page.
7. **Test.** Run `cd tools && npm test`. Then open the pages from disk and check one card of each question type.
8. **Publish** only when the user asks: commit, run the PDF check, push.

## 4. Decisions and why
| Decision | Why |
|---|---|
| No Lab widgets or animated SVGs from chapter 6 on | The first session (Bonding + Mole + Electrolysis + 2 Labs) cost about $37. The user asked for cheaper chapters. |
| Cheap visuals instead: book-page links, `flow()` strips, `watch()` links | They cost almost nothing. They matter most in experiment chapters. |
| One agent per chapter, fresh session per chapter | Long sessions and many agents raise the cost a lot. |
| Teaching style adapts to the chapter type | The question practice stays the same. Only the concept explanations change. Example: Electrolysis uses one routine everywhere (IONS → GO → WIN → WRITE → SEE) plus a "case file" for each standard cell. |
| Reading guide as a separate page | Rewriting lessons inside the practice page looked like "no change". A separate page shows the clear style properly and leaves progress untouched. |
| "Why …? / Why not …?" tables | The student liked them most. Each answer starts with a reason she can write in the exam. |
| Exam wording kept as in the textbook | ICSE examiners expect it, including passive voice ("A white precipitate is formed"). |
| Separate small files per page | The user prefers modular files. They are easier to fix and cheaper to load. |

## 5. Mistakes to avoid
- A chapter page with questions missing. Always compare against the question list from step 2.
- Writing "HCl" for both the gas and the acid. Use "HCl gas" and "hydrochloric acid".
- Rewriting ★ definitions into simple English. Copy them exactly.
- Changing a `PAGE.key`, which wipes progress.
- Committing anything from `sources/` or `book/`.
