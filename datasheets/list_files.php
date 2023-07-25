<?php
$files = scandir(__DIR__);
$files = array_filter($files, function ($file) {
    return !in_array($file, ['.', '..']) && is_file($file);
});

header('Content-Type: application/json');
echo json_encode(array_values($files));
