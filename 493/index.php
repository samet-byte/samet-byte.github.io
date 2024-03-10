<?php
$arrFiles = array();
$dirPath = "./reasearch";


// Using scandir()
echo "--------------------------------<br>";
echo "Method 1: Using scandir() <br>";
echo "--------------------------------<br>";
$files = scandir($dirPath);
foreach ($files as $file) {
    $filePath = $dirPath . '/' . $file;
    if (is_file($filePath)) {
        echo $file . "<br>";
    }
}
?>