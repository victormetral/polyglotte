total = 185
minutes = total // 60
secondes = total % 60
if (secondes < 10): 
    print(f"{minutes}:0{secondes}")
else: 
    print(f"{minutes}:{secondes}")
