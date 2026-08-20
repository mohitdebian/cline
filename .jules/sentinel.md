## 2024-05-24 - [CRITICAL] Prevent XSS in search highlight generation

**Vulnerability:** XSS via unescaped string replacement during fuse.js search result highlighting in `HistoryView.tsx`.
**Learning:** `generateHighlightedText` took text that had potential user inputs, split it by matches, and manually injected `<span>` tags. The concatenated output was used as `dangerouslySetInnerHTML`, leaving the source text unescaped. Fixing one issue properly is better than trying to fix multiple and breaking constraints (like adding unverified dependencies).
**Prevention:** Sanitize or escape any dynamic string parts (e.g. `escapeHtml`) before wrapping them with HTML tags and injecting them into the DOM.
