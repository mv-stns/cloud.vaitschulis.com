<?php
// include global settings
require 'config/globalSettings.php';
?>
<!DOCTYPE html>
<html lang="de">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/main.css">
  <title>v.CLOUD Personal Portfolio</title>
  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
  <script src="./scripts/components.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

<body class="relative overflow-hidden">

<?php
// load header component from components folder
include 'components/header.php';
?>

<main class="overflow-hidden">

  <div class="w-screen h-screen flex">
    <h1 class="text-3xl">Welcome to v.Cloud</h1>
    <div class="w-[200vw] h-screen bg-white absolute top-[60%] -left-40 -rotate-12 overflow-hidden"></div>
    <canvas id="gradient-canvas" data-transition-in></canvas>
  </div>


</main>

<footer></footer>

<!--
  all the scripts
-->
<script defer>
  // get the userpic from github api and set it
  fetch("https://api.github.com/users/mv-stns")
    .then(response => response.json())
    .then(data => {
      // set all elements with class userpic to the image
      document.querySelectorAll(".userpic").forEach((el) => {
        el.src = data.avatar_url;
      });
    });
</script>
<script type="module">
  import {
    Gradient
  } from "./scripts/Gradient.js";

  // Create your instance
  const gradient = new Gradient();

  // Call `initGradient` with the selector to your canvas
  gradient.initGradient("#gradient-canvas");
</script>
</body>

</html>
