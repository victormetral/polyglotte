<?php

$a = "Ravel";
$b = "Liszt";

echo "avant : a = {$a}, b = {$b}\n";

$tmp = $a;
$a = $b;
$b = $tmp;

echo "apres : a = {$a}, b = {$b}\n";
