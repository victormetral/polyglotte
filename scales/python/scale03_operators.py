mesures: int = 32
temps_par_mesure: int = 4
tempo: int = 120

total_temps: int = mesures * temps_par_mesure
minutes: float = total_temps / tempo

print(f"total : {total_temps} temps")
print(f"duree : {minutes} minutes")
print(17 % 4)
print(7 / 2)
print(7 // 2)