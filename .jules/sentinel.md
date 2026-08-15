## 2025-02-27 - OcaModelPicker XSS Fix
**Vulnerability:** XSS vulnerability found in `apps/vscode/webview-ui/src/components/settings/providers/OcaModelPicker.tsx` via `dangerouslySetInnerHTML`
**Learning:** `dangerouslySetInnerHTML` was being used to render external `bannerText` without sanitization, risking XSS if an attacker controls the content.
**Prevention:** Always sanitize dynamically rendered HTML variables with `DOMPurify` before injecting them using `dangerouslySetInnerHTML`.
