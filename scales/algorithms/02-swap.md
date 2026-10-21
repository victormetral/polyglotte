# 02 — Swapping two values

## Problem
Swap the contents of two variables, a and b.

## Pseudo-code
```
tmp ← a
a ← b
b ← tmp
```

## Pitfalls
- `a ← b` then `b ← a` loses the value of a: storing a value in a box erases what was there.
- Always save first the value that is about to be overwritten.

## Variants

| Method | Code | Verdict |
|---|---|---|
| Temporary variable | `const tmp = a; a = b; b = tmp;` | works everywhere, the clearest |
| Destructuring (TS) | `[a, b] = [b, a];` | **recommended** in TypeScript: one line, intent obvious |
| Arithmetic | `a = a + b; b = a - b; a = a - b;` | avoid: numbers only, and can overflow or lose precision |
| XOR | `a ^= b; b ^= a; a ^= b;` | avoid: integers only, unreadable; worth recognising |

Same idea in the other languages: PHP `[$a, $b] = [$b, $a];`, Python `a, b = b, a`. Java has no one-line swap for two variables: the temporary variable is the idiomatic way.