<?php

$mesures = 32;
$tempsParMesure = 4;
$tempo = 120;

$totalTemps = $mesures * $tempsParMesure;
$minutes = $totalTemps / $tempo;

echo "total : {$totalTemps} temps\n";
echo "duree : {$minutes} minutes\n";
echo 17 % 4 . "\n";
echo 7 / 2 . "\n";

