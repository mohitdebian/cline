## 2024-05-18 - Avoid repeated array filtering in React components
**Learning:** In `HistoryPreview.tsx`, the same filter (`taskHistory.filter((item) => item.ts && item.task)`) was being calculated three times inside the render method. For large task histories, this could cause performance issues on every render.
**Action:** Memoize the filtered array using `useMemo` so it's calculated only when `taskHistory` changes, and use the memoized array instead of calling `.filter()` inline repeatedly.
