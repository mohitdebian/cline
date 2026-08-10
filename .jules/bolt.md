## 2024-05-24 - React.memo on ContextMenu
**Learning:** The ContextMenu component, rendered within ChatTextArea, re-rendered heavily on every keypress due to parent state updates, causing potential UI jank, even when its props hadn't changed. Using React.memo for components tightly bound to rapid user input (like a textarea) is a critical optimization.
**Action:** Always consider React.memo for complex child components embedded inside rapid-state-changing parents like text areas or input fields.
