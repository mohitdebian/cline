## 2025-05-19 - deepEqual in ChatRowContent
**Learning:** `ChatRowContent` in `apps/vscode/webview-ui/src/components/chat/ChatRow.tsx` is wrapped in `memo()` but doesn't have a custom comparison function (like `deepEqual`) for its large and complex props, unlike `ChatRow` which correctly uses `deepEqual` from `fast-deep-equal`. This can cause unnecessary re-renders of the heavy content component when shallow prop comparison fails on object/array props.
**Action:** Adding `deepEqual` as the second argument to `memo` for `ChatRowContent` will prevent these unnecessary re-renders.

## 2025-05-19 - Test environment workspace failures
**Learning:** The test suite for `webview-ui` has pre-existing failures related to missing module resolutions (e.g. `react/jsx-dev-runtime`, `@shared/...`) when run directly with `bun test` in the subdirectory.
**Action:** When validating my optimizations, check the test logs to ensure the modified files do not introduce new failures, but recognize that global workspace configuration issues exist.
