## 2024-05-18 - Sanitize highlighted HTML injected via dangerouslySetInnerHTML
**Vulnerability:** XSS vulnerability through unchecked string rendering in search highlights. `fuse.js` outputs matches, which get parsed by `generateHighlightedText` placing raw text and `span` tags directly into strings passed to `dangerouslySetInnerHTML`.
**Learning:** `dangerouslySetInnerHTML` must not be used on raw model search fields or dynamic input without proper sanitization.
**Prevention:** Wrap all HTML strings assembled manually with dynamic data in `DOMPurify.sanitize()` before passing them into `dangerouslySetInnerHTML`.
