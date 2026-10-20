<?php

$total = 185;
$minutes = intdiv($total, 60);
$secondes = $total % 60;
if ($secondes < 10) {
    echo "{$minutes}:0{$secondes}\n";
} else {
    echo "{$minutes}:{$secondes}\n";
}
