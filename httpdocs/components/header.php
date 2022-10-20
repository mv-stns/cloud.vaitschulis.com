<?php
?>
<!-- T-34 Hide searchbar for not logged in users -->
<!-- T-35 Hide Bell for not logged in users -->
<!-- T-36 Hide Userpic for not logged in users -->
<header class="absolute top-0 z-10 w-full bg-white backdrop-blur-xl lg:overflow-y-visible" x-state:on="Open" x-state:off="Closed" :class="{ 'fixed inset-0 z-40 overflow-y-auto': open }" x-data="Components.popover({ open: false, focus: false })" x-init="init()" @keydown.escape="onEscape" @close-popover-group.window="onClosePopoverGroup">
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
      <div class="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
        <div class="flex items-center flex-shrink-0">
          <a href="/">
            <svg class="block w-auto h-8" viewBox="0 0 447 197" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.6693 85.4348H62.0946L73.0233 116.756L83.6576 85.4348H100.689L81.0975 138.623H64.5587L44.6724 85.4348H44.6693Z" fill="black" />
              <path d="M93.6969 130.055C93.6969 127.165 94.5833 124.821 96.3562 123.013C98.1291 121.209 100.457 120.303 103.346 120.303C106.234 120.303 108.562 121.206 110.335 123.013C112.108 124.821 112.994 127.168 112.994 130.055C112.994 132.942 112.108 135.274 110.335 137.048C108.562 138.821 106.231 139.708 103.346 139.708C100.46 139.708 98.0454 138.821 96.3066 137.048C94.5678 135.274 93.6969 132.945 93.6969 130.055Z" fill="black" />
              <path d="M155.72 139.609C150.207 139.609 145.185 138.638 140.657 136.703C136.129 134.769 132.254 132.139 129.04 128.824C125.823 125.51 123.331 121.603 121.558 117.103C119.785 112.607 118.899 107.795 118.899 102.675C118.899 97.5558 119.816 92.548 121.654 88.0487C123.492 83.5526 126.049 79.6456 129.335 76.3277C132.617 73.013 136.504 70.4176 141.001 68.5478C145.495 66.6749 150.402 65.7416 155.72 65.7416C159.198 65.7416 162.515 66.1695 165.664 67.0222C168.813 67.8749 171.766 69.075 174.525 70.6161C177.28 72.1603 179.776 74.03 182.007 76.2316C184.239 78.4332 186.142 80.8456 187.716 83.472L172.653 93.0255C171.01 89.81 168.779 87.2643 165.958 85.3914C163.134 83.5185 159.756 82.5851 155.817 82.5851C152.928 82.5851 150.303 83.1123 147.941 84.1603C145.579 85.2115 143.543 86.641 141.838 88.4457C140.13 90.2534 138.8 92.3868 137.852 94.8488C136.9 97.3108 136.423 99.9217 136.423 102.678C136.423 105.435 136.882 108.015 137.802 110.409C138.72 112.806 140.034 114.908 141.742 116.713C143.447 118.52 145.467 119.947 147.798 120.998C150.126 122.049 152.736 122.573 155.624 122.573C159.957 122.573 163.565 121.475 166.454 119.274C169.343 117.075 171.54 114.266 173.05 110.852L188.9 119.323C187.391 122.278 185.519 125.004 183.287 127.497C181.056 129.993 178.545 132.142 175.755 133.95C172.966 135.758 169.882 137.15 166.5 138.136C163.119 139.122 159.527 139.612 155.72 139.612V139.609Z" fill="black" />
              <path d="M195.595 61.0098H212.038V138.623H195.595V61.0098Z" fill="black" />
              <path d="M248.169 139.609C244.034 139.609 240.209 138.886 236.697 137.441C233.186 135.996 230.182 134.027 227.69 131.531C225.195 129.035 223.243 126.114 221.832 122.765C220.419 119.416 219.715 115.838 219.715 112.03C219.715 108.223 220.419 104.644 221.832 101.295C223.243 97.9465 225.195 95.01 227.69 92.4798C230.182 89.9526 233.186 87.965 236.697 86.52C240.209 85.0751 244.031 84.3526 248.169 84.3526C252.306 84.3526 256.01 85.0751 259.491 86.52C262.969 87.965 265.987 89.9526 268.548 92.4798C271.108 95.0069 273.11 97.9465 274.554 101.295C275.999 104.644 276.721 108.223 276.721 112.03C276.721 115.838 276.014 119.416 274.604 122.765C273.191 126.114 271.222 129.035 268.696 131.531C266.167 134.027 263.167 135.996 259.689 137.441C256.209 138.886 252.368 139.609 248.172 139.609H248.169ZM248.268 123.947C249.907 123.947 251.466 123.637 252.945 123.01C254.42 122.387 255.7 121.534 256.785 120.449C257.87 119.364 258.719 118.102 259.345 116.657C259.968 115.212 260.281 113.637 260.281 111.928C260.281 110.219 259.968 108.728 259.345 107.249C258.722 105.773 257.87 104.492 256.785 103.407C255.7 102.322 254.423 101.472 252.945 100.846C251.47 100.222 249.907 99.9093 248.268 99.9093C246.628 99.9093 245.069 100.222 243.591 100.846C242.115 101.472 240.835 102.322 239.75 103.407C238.666 104.492 237.813 105.77 237.19 107.249C236.567 108.725 236.254 110.288 236.254 111.928C236.254 113.568 236.564 115.212 237.19 116.657C237.813 118.102 238.666 119.364 239.75 120.449C240.835 121.534 242.112 122.387 243.591 123.01C245.066 123.637 246.625 123.947 248.268 123.947Z" fill="black" />
              <path d="M303.593 139.708C297.553 139.708 292.813 137.869 289.367 134.192C285.92 130.514 284.197 125.327 284.197 118.629V85.4348H301.228V115.475C301.228 118.564 301.882 120.927 303.197 122.567C304.508 124.207 306.544 125.029 309.3 125.029C311.726 125.029 313.713 124.192 315.257 122.517C316.797 120.843 317.569 118.232 317.569 114.688V85.4348L334.405 85.3356V138.524L317.767 138.623V132.517C316.059 134.818 314.011 136.589 311.615 137.835C309.219 139.082 306.544 139.708 303.59 139.708H303.593Z" fill="black" />
              <path d="M366.603 139.708C363.516 139.708 360.5 139.069 357.546 137.789C354.592 136.508 351.967 134.685 349.67 132.322C347.37 129.959 345.535 127.069 344.156 123.655C342.777 120.241 342.089 116.365 342.089 112.033C342.089 107.702 342.777 103.925 344.156 100.511C345.535 97.0969 347.355 94.1914 349.621 91.7945C351.886 89.3976 354.508 87.5588 357.496 86.2782C360.481 84.9975 363.584 84.3588 366.801 84.3588C370.018 84.3588 373.053 84.9851 375.514 86.2317C377.975 87.4813 379.992 89.1867 381.57 91.3542V61.0191H397.914V138.632H381.669V132.133C379.961 134.564 377.844 136.434 375.318 137.748C372.792 139.06 369.885 139.717 366.606 139.717L366.603 139.708ZM370.542 123.95C372.182 123.95 373.741 123.64 375.219 123.013C376.695 122.39 377.975 121.537 379.059 120.452C380.144 119.367 380.993 118.105 381.62 116.66C382.243 115.215 382.556 113.64 382.556 111.931C382.556 110.223 382.243 108.731 381.62 107.252C380.997 105.776 380.144 104.495 379.059 103.41C377.975 102.325 376.698 101.475 375.219 100.849C373.744 100.226 372.182 99.9124 370.542 99.9124C368.902 99.9124 367.343 100.226 365.865 100.849C364.39 101.475 363.11 102.325 362.025 103.41C360.94 104.495 360.088 105.773 359.465 107.252C358.842 108.728 358.528 110.291 358.528 111.931C358.528 113.571 358.838 115.215 359.465 116.66C360.088 118.105 360.94 119.367 362.025 120.452C363.11 121.537 364.386 122.39 365.865 123.013C367.34 123.64 368.899 123.95 370.542 123.95Z" fill="black" />
              <g filter="url(#filter0_b_1_30)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M73.8909 67.5105C77.5091 64.1154 78.4721 58.712 76.1921 54.2566C69.0233 40.2478 71.3053 22.6369 83.0271 10.9151C97.5759 -3.63367 121.197 -3.63835 135.751 10.9011L135.765 10.9151C150.318 25.4877 150.312 49.1054 135.765 63.6527C122.575 76.8431 101.927 78.0852 87.344 67.3628C83.311 64.3973 77.8216 64.4823 73.8909 67.5105ZM73.0559 68.221C69.4378 71.6161 68.4748 77.0196 70.7548 81.4749C76.1928 92.1013 76.1938 104.801 70.753 115.424C68.4453 119.93 69.455 125.406 73.1743 128.794C69.2359 125.663 63.6689 125.54 59.5893 128.537C45.0068 139.248 24.3681 138.003 11.182 124.816C-3.37139 110.263 -3.37139 86.6321 11.182 72.0788C24.3724 58.8884 45.0203 57.6463 59.6028 68.3687C63.6358 71.3341 69.1252 71.2492 73.0559 68.221V68.221ZM73.751 129.285C77.6886 132.416 83.2561 132.54 87.336 129.543C101.918 118.832 122.557 120.077 135.743 133.263C150.297 147.817 150.297 171.448 135.743 186.001C121.19 200.554 97.559 200.554 83.0056 186.001C71.2823 174.278 69.0012 156.664 76.1733 142.654C78.4797 138.148 77.4698 132.673 73.751 129.285Z" fill="#B3B3B3" fill-opacity="0.2" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M73.8909 67.5105C77.5091 64.1154 78.4721 58.712 76.1921 54.2566C69.0233 40.2478 71.3053 22.6369 83.0271 10.9151C97.5759 -3.63367 121.197 -3.63835 135.751 10.9011L135.765 10.9151C150.318 25.4877 150.312 49.1054 135.765 63.6527C122.575 76.8431 101.927 78.0852 87.344 67.3628C83.311 64.3973 77.8216 64.4823 73.8909 67.5105ZM73.0559 68.221C69.4378 71.6161 68.4748 77.0196 70.7548 81.4749C76.1928 92.1013 76.1938 104.801 70.753 115.424C68.4453 119.93 69.455 125.406 73.1743 128.794C69.2359 125.663 63.6689 125.54 59.5893 128.537C45.0068 139.248 24.3681 138.003 11.182 124.816C-3.37139 110.263 -3.37139 86.6321 11.182 72.0788C24.3724 58.8884 45.0203 57.6463 59.6028 68.3687C63.6358 71.3341 69.1252 71.2492 73.0559 68.221V68.221ZM73.751 129.285C77.6886 132.416 83.2561 132.54 87.336 129.543C101.918 118.832 122.557 120.077 135.743 133.263C150.297 147.817 150.297 171.448 135.743 186.001C121.19 200.554 97.559 200.554 83.0056 186.001C71.2823 174.278 69.0012 156.664 76.1733 142.654C78.4797 138.148 77.4698 132.673 73.751 129.285Z" fill="url(#paint0_linear_1_30)" />
              </g>
              <defs>
                <filter id="filter0_b_1_30" x="-7.73303" y="-7.99998" width="162.411" height="212.916" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImage" stdDeviation="4" />
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_30" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_30" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_1_30" x1="-8.5" y1="-42" x2="157.5" y2="191.5" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6000FE" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>

          </a>
        </div>
      </div>
      <div class="flex-1 min-w-0 md:px-8 lg:px-0 xl:col-span-6">
        <div class="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
          <div class="w-full">
            <label for="search" class="sr-only">Suche</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <input id="search" name="search" class="block w-full py-2 pl-10 pr-3 text-sm placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Suche" type="search">
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
        <!-- Mobile menu button -->
        <button type="button" class="inline-flex items-center justify-center p-2 -mx-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" @click="toggle" @mousedown="if (open) $event.preventDefault()" aria-expanded="false" :aria-expanded="open.toString()">
          <span class="sr-only">Open menu</span>
          <svg x-description="Icon when menu is closed.

Heroicon name: outline/menu" x-state:on="Menu open" x-state:off="Menu closed" class="block w-6 h-6" :class="{ 'hidden': open, 'block': !(open) }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg x-description="Icon when menu is open.

Heroicon name: outline/x" x-state:on="Menu open" x-state:off="Menu closed" class="hidden w-6 h-6" :class="{ 'block': open, 'hidden': !(open) }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
        <a href="#" class="flex-shrink-0 p-1 ml-5 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <span class="sr-only">View notifications</span>
          <svg class="w-6 h-6" x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
        </a>

        <!-- Profile dropdown -->
        <div x-data="Components.menu({ open: false })" x-init="init()" @keydown.escape.stop="open = false; focusButton()" @click.away="onClickAway($event)" class="relative flex-shrink-0 ml-5">
          <div>
            <button type="button" class="flex bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" id="user-menu-button" x-ref="button" @click="onButtonClick()" @keyup.space.prevent="onButtonEnter()" @keydown.enter.prevent="onButtonEnter()" aria-expanded="false" aria-haspopup="true" x-bind:aria-expanded="open.toString()" @keydown.arrow-up.prevent="onArrowUp()" @keydown.arrow-down.prevent="onArrowDown()">
              <span class="sr-only">Open user menu</span>
              <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
            </button>
          </div>

          <div x-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" x-ref="menu-items" x-description="Dropdown menu, show/hide based on menu state." x-bind:aria-activedescendant="activeDescendant" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" @keydown.arrow-up.prevent="onArrowUp()" @keydown.arrow-down.prevent="onArrowDown()" @keydown.tab="open = false" @keydown.enter.prevent="open = false; focusButton()" @keyup.space.prevent="open = false; focusButton()" style="display: none;">

            <a href="#" class="block px-4 py-2 text-sm text-gray-700" x-state:on="Active" x-state:off="Not Active" :class="{ 'bg-gray-100': activeIndex === 0 }" role="menuitem" tabindex="-1" id="user-menu-item-0" @mouseenter="activeIndex = 0" @mouseleave="activeIndex = -1" @click="open = false; focusButton()">Your Profile</a>

            <a href="#" class="block px-4 py-2 text-sm text-gray-700" :class="{ 'bg-gray-100': activeIndex === 1 }" role="menuitem" tabindex="-1" id="user-menu-item-1" @mouseenter="activeIndex = 1" @mouseleave="activeIndex = -1" @click="open = false; focusButton()">Settings</a>

            <a href="#" class="block px-4 py-2 text-sm text-gray-700" :class="{ 'bg-gray-100': activeIndex === 2 }" role="menuitem" tabindex="-1" id="user-menu-item-2" @mouseenter="activeIndex = 2" @mouseleave="activeIndex = -1" @click="open = false; focusButton()">Sign out</a>

          </div>

        </div>

        <button x-data="{ open: false }" @click="open=true" onclick="" class="inline-flex items-center px-4 py-2 ml-5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Anmelden
          <template x-teleport="body">
            <div @keydown.window.escape="open = false" x-show="open" class="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" x-ref="dialog" aria-modal="true">
              <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">

                <div x-show="open" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" x-description="Background overlay, show/hide based on modal state." class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 backdrop-blur-md" @click="open = false" aria-hidden="true">
                </div>

                <!-- This element is to trick the browser into centering the modal contents. -->
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&ZeroWidthSpace;</span>

                <div x-show="open" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-description="Modal panel, show/hide based on modal state." class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                  <div>

                    <div id="errorModel" class="relative hidden p-4 rounded-md bg-red-50 animate-pulse">
                      <div class="flex">
                        <div class="flex-shrink-0">
                          <!-- Heroicon name: solid/x-circle -->
                          <svg class="w-5 h-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <div class="ml-3">
                          <h3 class="text-sm font-medium text-red-800">Fehler</h3>
                          <div class="mt-2 text-sm text-red-700">
                            <ul id="errorList" role="list" class="pl-5 space-y-1 list-disc">
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <form class="mt-8 space-y-6" action="#" method="POST">
                      <input type="hidden" name="remember" value="true">
                      <div class="-space-y-px rounded-md shadow-sm">
                        <div>
                          <label for="email" class="sr-only">E-Mail</label>
                          <input id="email" name="email" type="text" required="" class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="E-Mail">
                        </div>
                        <div>
                          <label for="password" class="sr-only">Passwort</label>
                          <input id="password" name="password" type="password" autocomplete="current-password" required="" class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Passwort">
                        </div>
                      </div>

                      <div class="flex items-center justify-between">
                        <div class="flex items-center">
                          <input id="remember-me" name="remember-me" type="checkbox" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                          <label for="remember-me" class="block ml-2 text-sm text-gray-900">
                            Remember me
                          </label>
                        </div>

                        <div class="text-sm">
                          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot your password?
                          </a>
                        </div>
                      </div>

                      <div id="signInContainer">
                        <button id="signIn" type="button" onclick="login()" class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg class="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" x-description="Heroicon name: solid/lock-closed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </template>
        </button>

      </div>
    </div>
  </div>

  <nav x-description="Mobile menu, show/hide based on menu state." class="lg:hidden" aria-label="Global" x-ref="panel" x-show="open" @click.away="open = false" style="display: none;">
    <div class="max-w-3xl px-2 pt-2 pb-3 mx-auto space-y-1 sm:px-4">

      <a href="#" aria-current="page" class="block px-3 py-2 text-base font-medium text-gray-900 bg-gray-100 rounded-md" x-state:on="Current" x-state:off="Default" x-state-description="Current: &quot;bg-gray-100 text-gray-900&quot;, Default: &quot;hover:bg-gray-50&quot;">Dashboard</a>

      <a href="#" class="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-50" x-state-description="undefined: &quot;bg-gray-100 text-gray-900&quot;, undefined: &quot;hover:bg-gray-50&quot;">Calendar</a>

      <a href="#" class="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-50" x-state-description="undefined: &quot;bg-gray-100 text-gray-900&quot;, undefined: &quot;hover:bg-gray-50&quot;">Teams</a>

      <a href="#" class="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-50" x-state-description="undefined: &quot;bg-gray-100 text-gray-900&quot;, undefined: &quot;hover:bg-gray-50&quot;">Directory</a>

    </div>
    <div class="pt-4 pb-3 border-t border-gray-200">
      <div class="flex items-center max-w-3xl px-4 mx-auto sm:px-6">
        <div class="flex-shrink-0">
          <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
        </div>
        <div class="ml-3">
          <div class="text-base font-medium text-gray-800">Chelsea Hagon</div>
          <div class="text-sm font-medium text-gray-500">chelsea.hagon@example.com</div>
        </div>
        <button type="button" class="flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <span class="sr-only">View notifications</span>
          <svg class="w-6 h-6" x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
        </button>
      </div>
      <div class="max-w-3xl px-2 mx-auto mt-3 space-y-1 sm:px-4">

        <a href="#" class="block px-3 py-2 text-base font-medium text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900">Your Profile</a>

        <a href="#" class="block px-3 py-2 text-base font-medium text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900">Settings</a>

        <a href="#" class="block px-3 py-2 text-base font-medium text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900">Sign out</a>

      </div>
    </div>
  </nav>
</header>
<script>
  // when button signIn is pressed, run animation ping again
  function signIn() {
    document.getElementById("signIn").classList.add("ping");
    setTimeout(function() {
      document.getElementById("signIn").classList.remove("ping");
    }, 1000);
  }
  // register
  // send json request to php file api/users.php
  // await response with status and message
  // if status is success, redirect to dashboard
  // if status is error, display error message
  async function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const action = 'register';
    const response = await fetch('api/users.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action,
        email,
        password
      })
    });
    const data = await response.json();
    if (data.status === 'success') {
      window.location.href = '/pages/dashboard.php';
    } else {
      document.getElementById('error').innerHTML = data.message;
    }
  }
  // login
  // send json request to php file api/users.php
  // await response with status and message
  // if status is success, redirect to dashboard
  // if status is error, display error message
  async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const action = 'login';
    const response = await fetch('api/users.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action,
        email,
        password
      })
    });
    const data = await response.json();
    if (data.status === 'success') {
      // window.location.href = 'dashboard.php';
      // remove signIn button from dom and exchange it with the following code:
      //       <button disabled type="button" class="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
      //     <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      //     <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
      //     <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
      //     </svg>
      //     Loading...
      // </button>
      document.getElementById('signIn').remove();
      document.getElementById('signInContainer').innerHTML = `<button disabled type="button" class="py-2.5 px-5 w-full inline-flex justify-center items-center mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
      <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
      </svg>
      Sie werden eingeloggt...
      </button>`;
      // after 2 seconds redirect to dashboard
      setTimeout(() => {
        window.location.href = '/pages/dashboard.php';
      }, 4000);


    } else {
      // remove class hidden from errorModel
      document.getElementById('errorModel').classList.remove('hidden');
      // add data.message to errorList as a list item
      document.getElementById('errorList').innerHTML = `<li>${data.message}</li>`;
    }
  }
</script>
