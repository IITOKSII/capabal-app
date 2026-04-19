## COMPLETED
- [x] Modularize index.html into /modules (CSS/JS)
- [x] Secure Firebase config with UID-based userDocRef pattern
- [x] Resolve Git sync conflicts and ignore .claude workstates
- [x] Phase 1: Accessibility (A11y) Audit & Barrier Log implementation

## NEXT STEPS
- [ ] Phase 2: Performance Optimization — Lazy-load heavy deps (~1.4MB savings)
  - [ ] jsPDF (~1.1MB): remove static `<script>` from index.html:14; add `loadScript(jspdf cdn)` inside `preview-engine.js:exportDocument()` before `window.jspdf` is accessed. Trigger: user clicks "Download PDF".
  - [ ] html2canvas (~300KB): remove static `<script>` from index.html:13; load dynamically in same `exportDocument()` block alongside jsPDF. Trigger: same as above.
  - [x] mammoth.js (~400KB): already lazy via `loadScript()` in `documents.js:_extractDOCX()`. Trigger: user uploads a .docx file. No action needed.
  - [x] PDF.js (pdfjsLib): already lazy via `loadScript()` in `documents.js:_renderPDFPages()`. No action needed.
- [ ] Verification: A11y Rating UI & Clipper Deep Link Normalization
- [ ] WCAG AA 4.5:1 Color Contrast Check
- [ ] Phase 3: Advanced Intelligence (Specialized Inclusion Database Integration & Values Match)
