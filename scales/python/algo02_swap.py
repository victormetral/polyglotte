a: str = "Ravel"
b: str = "Liszt"

print(f"avant : a = {a}, b = {b}")

tmp = a
a = b
b = tmp

print(f"apres : a = {a}, b = {b}")
