# Linux 02 — Working with files

```bash
mkdir -p practice/scales        # create a folder and its parents
touch practice/scales/notes.txt # create an empty file
cp a.txt b.txt                  # copy
mv b.txt dir/c.txt              # move and/or rename
rm c.txt                        # delete: no trash, no undo
rm -i c.txt                     # ask before deleting
ls -R practice                  # list recursively
ls -la                          # details + hidden files
```

## Takeaways
- `rm` has no trash: always `ls` before `rm`; never `rm -rf` lightly.
- `.` is the current folder, `..` its parent.
- Servers run on UTC: container times differ from local time.