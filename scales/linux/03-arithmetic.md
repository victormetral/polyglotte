# Linux 03 — Arithmetic and redirection in Bash

```bash
total=185                              # no spaces around =
minutes=$(( total / 60 ))              # arithmetic expansion
seconds=$(( total % 60 ))
echo "$minutes:$seconds"               # 3:5
printf "%d:%02d\n" "$minutes" "$seconds"   # 3:05 (zero-padded)
printf "%d:%02d\n" 3 20 > duration.txt     # > overwrites the file
printf "%d:%02d\n" 4 10 >> duration.txt    # >> appends
cat duration.txt
```

## Takeaways
- Bash arithmetic is integers only: `$(( 7 / 2 ))` gives `3`; decimals need `bc`.
- `printf "%02d"` pads with zeros, like Java's `String.format("%02d", s)`: both come from C.
- `>` overwrites, `>>` appends.