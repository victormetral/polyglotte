# 03 — Formatting a duration as m:ss

## Problem
Convert a duration in seconds to the m:ss format (200 → 3:20).

## Pseudo-code
```
minutes ← total integer-divided by 60
seconds ← total % 60
IF seconds < 10 THEN
    display minutes ":0" seconds
ELSE
    display minutes ":" seconds
```

## Pitfalls
- Regular division gives 3.333…: integer division is needed.
- Integer division and modulo go together, with the same divisor.
- Seconds always take two digits: 185 s → 3:05, not 3:5 (edge case).

## Variants (TypeScript)

| Method | Code | Verdict |
|---|---|---|
| if / else | `if (s < 10) {…} else {…}` | clear, needs `let` |
| Ternary | `` s < 10 ? `${m}:0${s}` : `${m}:${s}` `` | short choice between two values |
| padStart | `String(s).padStart(2, "0")` | **recommended**: states the intent |
| slice | `("0" + s).slice(-2)` | old trick: recognise it, don't write it |
| Date | `new Date(t * 1000).toISOString().slice(14, 19)` | avoid: breaks after one hour |

Same idea in the other languages: PHP `str_pad`, Java `String.format("%02d", s)`, Python `f"{s:02d}"`.