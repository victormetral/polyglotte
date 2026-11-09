tempo = 92

if tempo < 60:
    marking = "Largo"
elif tempo < 108:
    marking = "Andante"
elif tempo < 168:
    marking = "Allegro"
else:
    marking = "Presto"
print(marking)

speed = "fast" if tempo >= 120 else "slow"
print(speed)

note = "C"
match note:
    case "C":
        name = "do"
    case "D":
        name = "re"
    case _:
        name = "unknown"
print(name)
