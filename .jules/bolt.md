## 2025-05-15 - React Component Memoization
**Learning:** Found multiple chat components like `OptionsButtons` and `UserMessage` that are frequently rendered in lists (`ChatRow`) but missing `React.memo()`, potentially causing unnecessary re-renders in the webview during streaming and chatting.
**Action:** Add `memo` to `OptionsButtons` or `UserMessage` to prevent unnecessary re-renders as chat lines update, which improves webview rendering performance significantly for long conversations.
