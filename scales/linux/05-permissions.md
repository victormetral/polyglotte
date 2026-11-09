# Linux 05 — Permissions and users

```bash
ls -l score.txt                  # -rw-r--r-- : type, user, group, others
chmod 600 score.txt              # rw------- : owner only
useradd -m victor                # create a user with a home folder
su victor -c "cat score.txt"     # run a command as victor
chown victor score.txt           # change the owner
```

## Takeaways
- r = 4, w = 2, x = 1, added per category: 644 = rw-r--r--, 600 = rw-------.
- Permissions are checked as user, then group, then others.
- root ignores read and write permissions: work as a normal user, use sudo when needed.
