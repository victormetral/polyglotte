# Linux 04 — Comparisons in Bash

```bash
[ 92 -lt 120 ]; echo $?     # 0: true (success)
[ 92 -gt 120 ]; echo $?     # 1: false (failure)
[ "a" = "a" ]               # same text
[[ "$a" = "$b" ]]           # Bash-only, safer for text
(( 92 < 120 ))              # Bash arithmetic: < and > work here
```

## Takeaways
- Exit code 0 means success (true); any other number means failure (false).
- `[` is a command: spaces inside the brackets are required.
- Never use `<` or `>` inside `[ ]`: `[ 92 > 120 ]` creates a file named 120 and returns true.
- Numbers: `-eq -ne -lt -le -gt -ge`, or `(( ))` in Bash.
