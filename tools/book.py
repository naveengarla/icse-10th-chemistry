# Renders textbook pages to book/<dir>/p<NNN>.jpg (printed page numbers) for the 📖 page links.
# book/ is git-ignored: the scans stay on this laptop and the links show only when a page is opened from disk.
# Usage (from the repo root): python tools/book.py "sources/7.A. Hydrogen Chloride.pdf" hcl 149
import sys, os, fitz
pdf, d, first = sys.argv[1], sys.argv[2], int(sys.argv[3])
out = os.path.join('book', d); os.makedirs(out, exist_ok=True)
doc = fitz.open(pdf)
for i, p in enumerate(doc):
    p.get_pixmap(dpi=130).save(os.path.join(out, f'p{first+i}.jpg'), jpg_quality=72)
print(f'{doc.page_count} pages -> {out}/p{first}.jpg ... p{first+doc.page_count-1}.jpg  (set PAGE.book={{dir:\'{d}\',from:{first},to:{first+doc.page_count-1}}})')
