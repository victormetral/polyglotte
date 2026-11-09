<?php

$year = 1900;

if ($year % 400 === 0) {
    $leap = true;
} elseif ($year % 100 === 0) {
    $leap = false;
} elseif ($year % 4 === 0) {
    $leap = true;
} else {
    $leap = false;
}

var_dump($leap);
