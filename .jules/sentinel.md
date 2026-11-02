## 2024-03-01 - [XSS Mitigation in ModelPickers]
**Vulnerability:** ModelPicker components were using `dangerouslySetInnerHTML={{ __html: item.html }}` without any HTML sanitization, posing a Cross-Site Scripting (XSS) risk if model configurations, items, or banners contain malicious scripts.
**Learning:** The UI extensively relies on `fuse.js` highlighting and dynamic HTML configuration passed from providers. Using `dangerouslySetInnerHTML` directly in this manner exposes the application to rendering arbitrary executable content.
**Prevention:** Always wrap dynamically generated HTML or third-party supplied HTML strings passed to `dangerouslySetInnerHTML` with `DOMPurify.sanitize()`. The `dompurify` library is the standard method used in this React webview to neutralize such risks.
