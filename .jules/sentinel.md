## 2025-02-28 - [Cross-Site Scripting (XSS) in Model Pickers and History]
**Vulnerability:** Found unescaped user input (model IDs) injected directly into HTML strings for Fuse.js search highlights in `HistoryView.tsx` and unsanitized `bannerText` passed to `dangerouslySetInnerHTML` in `OcaModelPicker.tsx`.
**Learning:** React components sometimes construct HTML manually via array `.join("")` or use `dangerouslySetInnerHTML` without realizing the injected payload may contain arbitrary external strings.
**Prevention:** Always use `escapeHtml` for manually constructed DOM strings, and `DOMPurify.sanitize()` before setting inner HTML for remote payloads.
