code gammes/algos/02-echange.md
# 02 — Échanger deux valeurs

## Énoncé
Échanger le contenu de deux variables a et b.

## Pseudo-code
```
tmp ← a
a ← b
b ← tmp
```

## Pièges
- `a ← b` puis `b ← a` perd la valeur de a : ranger dans une boîte efface son ancien contenu.
- Toujours sauvegarder d'abord la valeur qui va être écrasée.