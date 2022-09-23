<?php

// autloader from vendor
require __DIR__ . '/../../vendor/autoload.php';

$rootPath = __DIR__ . '/../../';

// get env variables
$dotenv = Dotenv\Dotenv::createImmutable($rootPath);
$dotenv->load();

$db_host = $_ENV['DB_DEV_HOST'];
$db_user = $_ENV['DB_USER'];
$db_password = $_ENV['DB_PASS'];
$db_name = $_ENV['DB_NAME'];

// connect to database mariadb
$connection = new mysqli($db_host, $db_user, $db_password, $db_name);

$_POST = json_decode(file_get_contents('php://input'), true);

$username = $_POST['email'];
$password = $_POST['password'];

// if post 'action' is set to 'login' run function login
if (isset($_POST['action']) && $_POST['action'] == 'login') {
    login($username, $password);
}

// if post 'action' is set to 'register' run function register
if (isset($_POST['action']) && $_POST['action'] == 'register') {
    register($username, $password);
}

  // define login function
  function login($username, $password) {
    global $connection;

    // get user from database
    $sql = "SELECT * FROM users WHERE email = '$username'";

    $result = $connection->query($sql);

    // if user exists
    if ($result->num_rows > 0) {
      // get user data
      $user = $result->fetch_assoc();

      // check if password is correct
      if (password_verify($password, $user['password'])) {
        // create session
        session_start();
        $_SESSION['user'] = $user['id'];

        // return response
        $response = array(
          'status' => 'success',
          'message' => 'Erfolgreich eingeloggt',
        );
      } else {
        // return response
        $response = array(
          'status' => 'error',
          'message' => 'Passwort ist falsch',
        );
      }
    } else {
      // return response
      $response = array(
        'status' => 'error',
        'message' => 'Nutzer existiert nicht',
      );
    }

    // return response
    echo json_encode($response);
  }

  // define register function
  function register($username, $password) {
    global $connection;

    // check if user exists
    $sql = "SELECT * FROM users WHERE email = '$username'";

    $result = $connection->query($sql);

    // if user exists
    if ($result->num_rows > 0) {
      // return response
      $response = array(
        'status' => 'error',
        'message' => 'Nutzer existiert bereits',
      );
    } else {
      // hash password
      $password = password_hash($password, PASSWORD_DEFAULT);

      // insert user into database
      $sql = "INSERT INTO users (email, password) VALUES ('$username', '$password')";

      if ($connection->query($sql) === TRUE) {
        // return response
        $response = array(
          'status' => 'success',
          'message' => 'Nutzer wurde erfolgreich erstellt',
        );
      } else {
        // return response
        $response = array(
          'status' => 'error',
          'message' => 'Fehler: ' . $sql . '<br>' . $connection->error
        );
      }
    }

    // return response
    echo json_encode($response);
  }

  // close connection
  $connection->close();

?>
