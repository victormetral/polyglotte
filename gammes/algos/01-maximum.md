# 01 — Trouver le maximum

## Énoncé

Trouver la plus grande valeur d'une liste, en la lisant une seule fois.

## Pseudo-code

```
SI la liste est vide ALORS
    répondre « liste vide » et s'arrêter
max ← premier élément
POUR chaque élément suivant :
    SI élément > max ALORS
        max ← élément
répondre max
```

## Pièges

- Ne pas initialiser à 0 : ça échoue avec des valeurs négatives.
- Toujours traiter la liste vide (clause de garde).
