## 2025-02-23 - XSS Vulnerability in Model Picker
**Vulnerability:** Unsanitized external banner text was passed to `dangerouslySetInnerHTML` in `OcaModelPicker.tsx`.
**Learning:** External API data in UI components (like server-provided banners or model infos) must always be sanitized as they can be manipulated to run untrusted code.
**Prevention:** Always use `DOMPurify.sanitize()` when rendering raw HTML from external sources via `dangerouslySetInnerHTML`.
