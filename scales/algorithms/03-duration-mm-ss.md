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