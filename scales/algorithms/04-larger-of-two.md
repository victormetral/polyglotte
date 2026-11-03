# 04 — Larger of two numbers

## Problem
Given two numbers a and b, display the larger one.

## Pseudo-code
```
IF a > b THEN
    max ← a
ELSE
    max ← b
display max
```

## Pitfalls
- Equal values need no special case: they fall into ELSE, and b is the right answer.
- Always return the same type (here a number), never a number in one case and text in another.
- In pseudo-code, `←` assigns; `<=` means "less than or equal".

## Variants (TypeScript)

| Method | Code | Verdict |
|---|---|---|
| if / else | `if (a > b) { max = a; } else { max = b; }` | the algorithm itself, needs `let` |
| Ternary | `const max = a > b ? a : b;` | short, works with `const` |
| `Math.max` | `Math.max(a, b)` | **recommended**: states the intent |
| Arithmetic | `(a + b + Math.abs(a - b)) / 2` | culture only: clever but unreadable |

Same idea in the other languages: PHP `max($a, $b)`, Java `Math.max(a, b)`, Python `max(a, b)`.
