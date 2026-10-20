# 03 — Afficher une durée en minutes:secondes

## Énoncé
Convertir une durée en secondes au format m:ss (200 → 3:20).

## Pseudo-code
```
minutes ← total division entière 60
secondes ← total % 60
SI secondes < 10 ALORS
    afficher minutes ":0" secondes
SINON
    afficher minutes ":" secondes
```

## Pièges
- La division normale donne 3.333… : il faut la division entière.
- Division entière et modulo vont par paire, avec le même diviseur.
- Les secondes s'affichent sur deux chiffres : 185 s → 3:05, pas 3:5 (cas limite).

## Variants (TypeScript)

| Method | Code | Verdict |
|---|---|---|
| if / else | `if (s < 10) {…} else {…}` | clear, needs `let` |
| Ternary | `` s < 10 ? `${m}:0${s}` : `${m}:${s}` `` | short choice between two values || padStart | `String(s).padStart(2, "0")` | **recommended**: states the intent |
| slice | `("0" + s).slice(-2)` | old trick: recognise it, don't write it |
| Date | `new Date(t * 1000).toISOString().slice(14, 19)` | avoid: breaks after one hour |

Same idea in the other languages: PHP `str_pad`, Java `String.format("%02d", s)`, Python `f"{s:02d}"`.