<!DOCTYPE html>
<!--
    todolist for heightapp:
      // T-27 start building basic components
  -->
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/main.css">
  <title>v.CLOUD Personal Portfolio</title>
  <script src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
  <script src="./scripts/components.js"></script>
</head>

<body>
  <!--
  When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars

  Open: "fixed inset-0 z-40 overflow-y-auto", Closed: ""
-->
  <header class="bg-white shadow-sm lg:static lg:overflow-y-visible" x-state:on="Open" x-state:off="Closed" :class="{ 'fixed inset-0 z-40 overflow-y-auto': open }" x-data="Components.popover({ open: false, focus: false })" x-init="init()" @keydown.escape="onEscape" @close-popover-group.window="onClosePopoverGroup">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
        <div class="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
          <div class="flex items-center flex-shrink-0">
            <a href="#">
              <img class="block w-auto h-8" src="./assets/img/logo/black_logo.svg" alt="v.Cloud">
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

          <a href="#" class="inline-flex items-center px-4 py-2 ml-5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Anmelden
          </a>

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

  <main>

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
  </script>
</body>

</html>
