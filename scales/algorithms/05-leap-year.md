# 05 — Leap year

## Problem
Given a year, display whether it is a leap year.

## Pseudo-code
```
IF year % 400 = 0 THEN
    leap ← true
ELSE IF year % 100 = 0 THEN
    leap ← false
ELSE IF year % 4 = 0 THEN
    leap ← true
ELSE
    leap ← false
display leap
```

## Pitfalls
- Test from the rarest case to the most common: 400, then 100, then 4.
- Edge cases: 1900 is not a leap year, 2000 is.

## Variants (TypeScript)

| Method | Code | Verdict |
|---|---|---|
| if / else if | the pseudo-code above | the algorithm itself, readable |
| One boolean expression | `(y % 4 === 0 && y % 100 !== 0) \|\| y % 400 === 0` | **recommended** once `&&` and `\|\|` are known |
| Date trick | `new Date(y, 1, 29).getDate() === 29` | clever, but hides the rule |

Built-in helpers: PHP `checkdate(2, 29, $y)`, Java `Year.isLeap(y)`, Python `calendar.isleap(y)`.
