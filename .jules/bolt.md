## 2024-10-28 - Initializing Bolt Journal
**Learning:** Understanding frontend rendering issues.
**Action:** Always check React.memo implementations.
## 2024-10-28 - Missing fast-deep-equal in ChatRowContent
**Learning:** React.memo requires a custom comparison function for complex objects, or else it falls back to shallow comparison which might still trigger unnecessary re-renders. ChatRow.tsx uses fast-deep-equal for the outer `ChatRow` but misses it for `ChatRowContent`.
**Action:** Adding deepEqual to `ChatRowContent`.
