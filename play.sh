#!/usr/bin/env bash
# Plays the same exercise in the 4 languages.
# Usage: play scale 03   or   play algo 03
type=$1
num=$2
cd "$(dirname "$0")/scales"
if [ "$type" = "algo" ]; then
  ts="ts/algo-$num-*.ts"; php="php/algo-$num-*.php"
  java="java/Algo$num*.java"; py="python/algo${num}_*.py"
else
  ts="ts/$num-*.ts"; php="php/$num-*.php"
  java="java/Scale$num*.java"; py="python/scale${num}_*.py"
fi
echo "── TypeScript"; node $ts
echo "── PHP"; php $php
echo "── Java"; java $java
echo "── Python"; python3 $py
