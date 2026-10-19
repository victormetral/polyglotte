# Linux 01 — Se repérer et se déplacer

```bash
docker run -it --rm ubuntu bash   # bac à sable Ubuntu, effacé à la sortie
pwd                               # où suis-je ?
ls /                              # contenu de la racine
cd /home                          # aller dans un dossier
cd ~                              # aller chez moi
exit                              # quitter le conteneur
```

## À retenir
- `root` = superutilisateur ; invite `#` (un utilisateur normal a `$`).
- Le dossier de root est `/root`, pas `/home/root`.
- Mac et Linux sont cousins (Unix) : mêmes commandes ; `/Users` sur Mac, `/home` sous Linux.