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
  <link rel="stylesheet" href="css/main.css">
  <title>v.CLOUD Personal Portfolio</title>
  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
  <script src="./scripts/components.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

<body class="relative">

  <?php
  // load header component from components folder
  include 'components/header.php';
  ?>

  <main class="relative w-screen h-screen overflow-hidden">
    <div class="relative bg-[#252525]">
      <img src="./assets/img/blobs/subtle_grain.png" class="absolute pointer-events-none inset-0 w-full h-full object-cover z-[1] opacity-10 mix-blend-darken" />


      <img src="./assets/img/blobs/vertical_static.png" class="inset-0 hidden object-cover w-full h-screen sm:block md:hidden" />
      <img src="./assets/img/blobs/horizontal_static.png" class="inset-0 object-cover w-full h-screen sm:hidden md:block lg:hidden" />
      <svg class="hidden w-screen h-screen lg:block" viewBox="0 0 1512 982" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g width="100%">
          <rect width="100%" height="100%" fill="#252525" />
          <g filter="url(#filter0_f_878_1737)">
            <path d="M984 217.5C984 359 658.5 387.756 583 456.5C507.5 525.244 158.359 964 -19.5 964C-162.829 1141.33 -139 1008 -52.805 933.553C-174.626 933.553 -103.184 -0.252945 -103.184 -97.0044C-103.184 -193.756 355.031 -40.2318 476.852 -40.2318C763.466 -126.742 984 120.749 984 217.5Z" fill="#A390CE" />
          </g>
          <g filter="url(#filter1_f_878_1737)">
            <ellipse cx="983.5" cy="-15.5" rx="332.5" ry="263.5" fill="#8EADD9" />
          </g>


          <g id="blobToMouse" class="mix-blend-color-dodge" filter="url(#filter2_f_878_1737)">
            <path d="M145.315 -7.65351C122.208 154.962 385.107 134.277 519.445 103.607C555.57 82.7502 509.545 -26.117 443.829 -95.7139C378.113 -165.311 548.881 -294.712 484.481 -387.158C420.081 -479.603 174.199 -210.923 145.315 -7.65351Z" fill="#F838CD" />
            <path d="M233.221 -116.853C162.602 -177.782 -362.623 426.665 -182.463 523.08C-19.1196 610.495 401.825 195.226 451.222 153.295C512.968 100.882 321.496 -40.6913 233.221 -116.853Z" fill="#7A81BD" />
            <path d="M98.7067 -164.626C43.8658 -288.255 -143.801 -301.321 -235.873 -301.321C-327.946 -301.321 -513.6 -280.817 -519.637 -198.8C-527.184 -96.2787 -414.484 -88.7404 -414.484 128.363C-414.484 345.467 -216.754 206.259 23.2375 206.259C215.231 206.259 153.548 -40.9977 98.7067 -164.626Z" fill="#F1972C" />
          </g>

        </g>
        <defs>
          <filter id="filter0_f_878_1737" x="-424" y="-429" width="1708" height="1780.99" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_878_1737" />
          </filter>
          <filter id="filter1_f_878_1737" x="351" y="-579" width="1265" height="1127" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_878_1737" />
          </filter>
          <filter id="filter2_f_878_1737" x="-960" y="-845.921" width="1932.12" height="1821.06" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_878_1737" />
          </filter>
          <clipPath id="clip0_878_1737">
            <rect width="100%" height="982" fill="white" />
          </clipPath>
        </defs>
      </svg>

    </div>

    <img class="absolute block w-auto h-8 bottom-10 right-10" src="./assets/img/logo/white_logo.svg" alt="v.Cloud">

  </main>

  <footer></footer>

  <!--
    all the scripts
  -->
  <script>
    // get the userpic from github api and set it
    fetch('https://api.github.com/users/mv-stns')
      .then(response => response.json())
      .then(data => {
        // set all elements with class userpic to the image
        document.querySelectorAll('.userpic').forEach((el) => {
          el.src = data.avatar_url;
        });
      });
    // center blobToMouse on mouse
    document.addEventListener('mousemove', (e) => {
      const blob = document.getElementById('blobToMouse');
      blob.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
    // center blobToMouse on touch
    document.addEventListener('touchmove', (e) => {
      const blob = document.getElementById('blobToMouse');
      blob.style.transform = `translate(${e.touches[0].clientX}px, ${e.touches[0].clientY}px)`;
    });
  </script>
</body>

</html>
