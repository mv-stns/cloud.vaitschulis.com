import React, { Component } from "react";

class Header extends React.Component {
	render() {
		return (
			<div>
				<div className="h-4 w-full bg-white dark:bg-gray-900"></div>
				<header id="mainnav" className="w-full mx-auto px-3 bg-white dark:bg-gray-900">
					<nav className="container h16 mx-auto">
						<div className="h-full items-center flex justify-between px-2 sm:px-2 md:px-2 lg:px-0">
							<span className="font-sharp-sans font-black text-gray-900 dark:text-white">v.Cloud</span>
							<div className="relative inline-block text-left">
								<div>
									<button className="inline-flex justify-center justify-items-center align-middle w-full px-4 py-2 text-sm rounded-2xl font-medium text-gray-700 hover:text-gray-500">
										<span className="inline-block relative mr-4">
											<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-700 border-2 border-blue-200">
												<img src="https://vaitschulis.com/wp-content/uploads/logo/profile-e1638139724991.png" alt="Profilepic" />
											</span>
											<span className="absolute top-0 right-0 block h-3 w-3">
												<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 border border-1 border-red-500"></span>
												<span className="absolute rounded-full h-full w-full bg-red-500"></span>
											</span>
										</span>
										<span className="my-auto font-black text-gray-900 dark:text-white">MV</span>
										<svg className="-mr-1 ml-2 h-5 w-5 my-auto fill-current text-gray-900 dark:text-white" x-description="Heroicon name: solid/chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
											<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
										</svg>
									</button>
								</div>
								<div class="origin-top-right absolute right-0 mt-4 pt-10 px-3 w-80 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 dark:divide-gray-600 focus:outline-none z-50">
									<div class="py-1" role="none">
										<div class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300" role="menuitem" tabindex="-1" id="menu-item-0">
											<span class="font-black mr-3">MV</span>
											<span class="text-xs px-2 py-1 rounded bg-blue-200 text-blue-600 font-metropolis font-semibold">AZUBI</span>
										</div>
										<div class="relative pt-1 px-4">
											<div class="overflow-hidden h-1 mb-2 text-xs flex rounded bg-gray-100 dark:bg-gray-700">
												<div class="w- shadow-none flex flex-col text-center whitespace-nowrap text-white dark:text-gray-900 justify-center bg-gray-500"></div>
											</div>
											<div class="flex mb-2 items-center justify-between">
												<div>
													<span class="text-xs inline-block py-1 px-4 font-metropolis font-medium rounded-full text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800">83% von 100%</span>
												</div>
											</div>
										</div>
										<div>
											<button class="group flex items-center w-full my-5 px-4 py-2 text-sm font-bold text-gray-700 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-400 rounded-lg border-2 border-white dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:border-gray-400 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer">
												<svg class="mr-3 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
													<path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
												</svg>
												Einstellungen
											</button>
											<div class="fixed z-50 inset-0 overflow-y-auto" role="dialog">
												<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
													<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
													<span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
													<div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 shadow-2xl">
														<div class="sm:flex sm:items-start">
															<div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
																<svg class="h-6 w-6 text-red-600" x-description="Heroicon name: outline/exclamation" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
																	<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
																</svg>
															</div>
															<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
																<h3 class="text-lg leading-6 font-black text-gray-900">Whoops!</h3>
																<div class="mt-2">
																	<p class="text-sm text-gray-500">Diese Funktion ist derzeit nicht verfügbar. Bitte komm zu einem späteren Zeitpunkt wieder.</p>
																</div>
															</div>
														</div>
														<div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
															<button class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:w-auto sm:text-sm">Okay</button>
														</div>
													</div>
												</div>
											</div>
										</div>
										<button class="group flex items-center w-full disabled:opacity-30 pointer-events-none my-5 px-4 py-2 text-sm font-bold text-gray-700 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-400 rounded-lg border-2 border-white dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 dark:hover:border-gray-400 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer">
											<svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: solid/logout" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
												<path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
											</svg>
											Logout
										</button>
										<div class="flex items-center w-full my-5 px-4 py-2 text-xs font-black text-gray-200 select-none">
											<div class="mr-3 h-5 w-5"></div>
											V-1.0.0
										</div>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</header>
			</div>
		);
	}
}

export default Header;
