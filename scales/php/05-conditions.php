<?php

$tempo = 92;

if ($tempo < 60) {
  $marking = "Largo";
} else if ($tempo < 108) {
  $marking = "Andante";
} else if ($tempo < 168) {
  $marking = "Allegro";
} else {
  $marking = "Presto";
}
echo $marking . PHP_EOL;

$speed = $tempo >= 120 ? "fast" : "slow";
echo $speed . PHP_EOL;

$note = "C";
$name = match ($note) {
    "C" => "do",
    "D" => "re",
    default => "unknown",
};
echo $name. PHP_EOL;
