# Prompts to start work on a chapter

Copy a prompt, fill in the <angle brackets>, and paste it into a fresh Claude Code session opened in this repo.

## New chapter (practice page + reading guide)
```
Build chapter <number and name> from sources/<file>.pdf (first printed page <N>).
Follow docs/new-chapter-playbook.md and prompts/clear-writing.md.
First show me the question list (every question number → page → topic) before writing anything.
Keep it cost-lean: no Lab widgets, no animated SVGs, one agent.
```

## Reading guide only (for a chapter that already has a practice page)
```
Write a reading guide for chapter <name>, like chapters/hcl-guide.html.
Use the existing content in data/<name>.js and follow prompts/clear-writing.md.
Include a "Start here" section, a Terms table and "Why? / Why not?" tables after each method or experiment.
Add it to data/chapters.js above the practice page. Don't change the practice page.
```

## Fix or improve something
```
On the <page> page, <what is wrong or what to change>.
Follow CLAUDE.md. Run the tests. Don't commit until I say so.
```

## Publish
```
Commit and push the changes. Check that no PDF or book scan is included.
```
