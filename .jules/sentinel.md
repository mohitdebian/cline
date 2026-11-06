## 2024-05-18 - [DOMPurify over dangerouslySetInnerHTML]
**Vulnerability:** XSS through dangerouslySetInnerHTML
**Learning:** Need to use DOMPurify when using dangerouslySetInnerHTML, or parseHighlightedText to reconstruct safe React elements natively
**Prevention:** Use DOMPurify for any HTML injection
