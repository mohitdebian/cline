
## 2024-05-30 - O(n*m) Avoidance in React array filtering
**Learning:** Found an `O(n*m)` bottleneck in `apps/vscode/webview-ui/src/components/history/HistoryView.tsx` where an array `.filter` looped through an array to call `.includes` on a second array of selections (`selectedItems.includes`).
**Action:** Always prefer `Set` for lookups over `Array.includes` when performing bulk operations, like in `.reduce` or `.filter` over large datasets, to bring time complexity to `O(n + m)`.
