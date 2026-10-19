#!/usr/bin/env bash
# Lance le même exercice dans les 4 langages.
# Usage : jouer algo 03   ou   jouer gamme 03

type=$1
num=$2

cd "$(dirname "$0")/gammes"

if [ "$type" = "algo" ]; then
  ts="ts/algo-$num-*.ts"; php="php/algo-$num-*.php"
  java="java/Algo$num*.java"; py="python/algo${num}_*.py"
else
  ts="ts/$num-*.ts"; php="php/$num-*.php"
  java="java/Gamme$num*.java"; py="python/gamme${num}_*.py"
fi

echo "── TypeScript"; node $ts
echo "── PHP"; php $php
echo "── Java"; java $java
echo "── Python"; python3 $py