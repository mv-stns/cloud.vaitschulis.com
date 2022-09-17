<?php
// T-33 create user fetch api

// import globalSettings.php
require '../config/globalSettings.php';

// load db data from .env
$server = $_ENV['DB_DEV_HOST'];
$username = $_ENV['DB_USERNAME'];
$password = $_ENV['DB_PASSWORD'];
$dbname = $_ENV['DB_NAME'];
$dbport = $_ENV['DB_PORT'];

// await get request from index.php
// check if user exists, if not create user

if ($_POST['action'] == 'checkUser') {
    // create connection
    $conn = new mysqli($server, $username, $password, $dbname, $dbport);
    // check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    // prepare statement
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    // bind parameters
    $stmt->bind_param("ss", $username, $password);
    // set parameters and execute
    $username = $_POST['username'];
    $password = $_POST['password'];
    $stmt->execute();
    // close connection
    $stmt->close();
    $conn->close();
}
