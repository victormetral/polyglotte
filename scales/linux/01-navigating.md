# Linux 01 — Navigating the file system

```bash
docker run -it --rm ubuntu bash   # Ubuntu sandbox, deleted on exit
pwd                               # where am I?
ls /                              # contents of the root folder
cd /home                          # go to a folder
cd ~                              # go to my home folder
exit                              # leave the container
```

## Takeaways
- `root` is the superuser; its prompt ends with `#` (a regular user's ends with `$`).
- root's home folder is `/root`, not `/home/root`.
- macOS and Linux are cousins (both Unix): same commands; homes live in `/Users` on macOS, `/home` on Linux.