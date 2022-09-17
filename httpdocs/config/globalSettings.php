<?php
$rootPath = getcwd() . '/../';
  // load autoloader
  // require __DIR__ . '/vendor/autoload.php';
  // echo root path of working directory
  require $rootPath . 'vendor/autoload.php';
  // get env variables
  $dotenv = Dotenv\Dotenv::createImmutable($rootPath);
  $dotenv->load();
