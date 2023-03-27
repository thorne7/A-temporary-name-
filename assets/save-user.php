<?php
$data = $_POST;

// Open file for appending
$file = fopen('users.txt', 'a');

// Write data to file
fwrite($