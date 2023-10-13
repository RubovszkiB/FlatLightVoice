<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $newID = $_POST["lampID"];
    if (is_numeric($newID) && strlen($newID) === 3) {
        $filename = "lamp_ids.txt";
        if (!file_exists($filename)) {
            file_put_contents($filename, $newID . PHP_EOL);
            echo "success";
        } else {
            $existingIDs = file($filename, FILE_IGNORE_NEW_LINES);
            if (!in_array($newID, $existingIDs)) {
                file_put_contents($filename, $newID . PHP_EOL, FILE_APPEND);
                echo "success";
            } else {
                echo "exists";
            }
        }
    } else {
        echo "invalid";
    }
} else {
    echo "Method not allowed.";

}
error_reporting(E_ALL);
ini_set('display_errors', 1);

?>
