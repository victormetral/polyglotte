# 01 — Finding the maximum

## Problem

Find the largest value in a list, reading it only once.

## Pseudo-code

```
IF the list is empty THEN
    answer "empty list" and stop
max ← first element
FOR EACH following element:
    IF element > max THEN
        max ← element
answer max
```

## Pitfalls

- Don't start at 0: it fails when every value is negative.
- Always handle the empty list first (guard clause).

## Variants (TypeScript)

| Method | Code | Verdict |
|---|---|---|
| Loop | `for (const x of list) if (x > max) max = x;` | the algorithm itself, one pass |
| `Math.max` | `Math.max(...list)` | **recommended** for small lists: states the intent |
| `reduce` | `list.reduce((a, b) => (b > a ? b : a))` | functional style, one pass |
| Sort | `[...list].sort((a, b) => a - b).at(-1)` | avoid: sorting is slower (O(n log n)) than one pass (O(n)) |

Same idea in the other languages: PHP `max($list)`, Java `Collections.max(list)`, Python `max(list)`.

To be coded in the four languages at session 10 (loops).