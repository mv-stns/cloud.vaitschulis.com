import React, { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, LogoutIcon } from "@heroicons/react/solid";
import Modal from "./modals/settingsmodal";
import ThemeToggle from "./scripts/ThemeToggle";
import profileImage from "./assets/profile.png";
import { VERSION_NUMBER, VERSION_TXT, VERSION_STXT} from "./version";

export default function Header() {
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY >= 8);
		});
	}, []);
	let [isOpen, setIsOpen] = useState(true);

	function openModal() {
		setIsOpen(true);
	}
	return (
		<>
			<div className={scroll ? "w-full h-4  bg-white dark:bg-zinc-900" : "w-full h-4 bg-white dark:bg-zinc-900"}></div>
			<div className={scroll ? "w-full mx-auto px-3 border-b dark:border-zinc-800 sticky top-0 z-[200000] shadow-xl transition-all ease-in-out duration-100 bg-white dark:bg-zinc-900" : "w-full navigation sticky top-0 mx-auto px-3 bg-white dark:bg-zinc-900 z-[200000]"}>
				<div className="container h-20 mx-auto">
					<div className="flex items-center justify-between h-full px-2 mx-auto max-w-screen-2xl sm:px-2 md:px-2 lg:px-0">
						<span className="font-black cursor-default select-none text-zinc-900 font-sharp-sans dark:text-white">v.Cloud</span>
						<Menu as="div" className="relative z-[200] inline-block text-left">
							<div>
								<Menu.Button className="inline-flex justify-center w-full px-4 py-1 text-sm font-medium align-middle rounded-sm text-zinc-700 justify-items-center hover:text-zinc-500">
									<span className="relative inline-block mt-2 mr-4">
										<div className="relative w-10 h-10">
											<span className="inline-flex items-center justify-center w-10 h-10 bg-blue-700 mask mask-squircle"></span>
											<img className="absolute left-0 -top-1" src={profileImage} alt="Profilepic" />
										</div>
										<span className="absolute top-[3%] right-[3%] block w-3 h-3">
											<span className="absolute inline-flex w-full h-full my-auto bg-red-400 border border-red-500 rounded-full animate-ping border-1"></span>
											<span className="absolute w-full h-full bg-red-500 rounded-full"></span>
										</span>
									</span>
									<span class="my-auto font-black text-zinc-900 dark:text-white">MV</span>
									<ChevronDownIcon className="w-5 h-5 my-auto ml-2 -mr-1 fill-current text-zinc-900 dark:text-white" aria-hidden="true" />
								</Menu.Button>
							</div>
							<Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
								<Menu.Items className="absolute right-0 z-10 px-3 pt-10 mt-4 origin-top-right bg-white divide-y divide-zinc-100 rounded-md shadow-lg w-72 md:w-[320px] dark:bg-zinc-900 ring-1 ring-black ring-opacity-5 dark:divide-zinc-600 focus:outline-none">
									<div className="py-1 ">
										<div className="flex items-center px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300" role="menuitem" tabindex="-1" id="menu-item-0">
											<span className="mr-3 font-black">MV</span>
											<span className="px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-200 rounded font-metropolis">AZUBI</span>
										</div>
										<div className="relative px-4 pt-1">
											<div className="flex h-1 mb-2 overflow-hidden text-xs rounded bg-zinc-100 dark:bg-zinc-700">
												<div className="flex flex-col justify-center w-10/12 text-center text-white shadow-none bg-zinc-500 whitespace-nowrap dark:text-zinc-900"></div>
											</div>
											<div className="flex items-center justify-between mb-2">
												<div>
													<span className="inline-block px-4 py-1 text-xs font-medium rounded-full text-zinc-600 bg-zinc-100 font-metropolis dark:text-zinc-400 dark:bg-zinc-800">83% von 100%</span>
												</div>
											</div>
										</div>
										<Menu.Item>
											<ThemeToggle />
										</Menu.Item>
										<Menu.Item>{({ active }) => <Modal />}</Menu.Item>
										<div data-tip="Derzeit ist diese Funktion nicht verfügbar" className="tooltip">
											<Menu.Item disabled>
												{({ active }) => (
													<button className={`${active ? "text-zinc-700 bg-zinc-200 border-zinc-200 dark:text-zinc-400 dark:bg-zinc-600 dark:border-zinc-400 " : "text-zinc-700 dark:text-zinc-400 border-white dark:border-zinc-700 bg-white dark:bg-zinc-700"} group flex items-center w-full my-5 px-4 py-2 text-xs md:text-sm font-bold rounded-lg border-2 opacity-30 pointer-events-none`}>
														{active ? <LogoutIcon className="w-3 h-3 mr-2 md:w-5 md:h-5 text-zinc-500 dark:text-zinc-400" fill="currentColor" aria-hidden="true" /> : <LogoutIcon className="w-3 h-3 mr-2 md:w-5 md:h-5 text-zinc-400" fill="currentColor" aria-hidden="true" />}
														Logout
													</button>
												)}
											</Menu.Item>
										</div>
										<Menu.Item>
											<button className="flex items-center w-full px-4 py-2 my-5 text-sm font-bold rounded-lg pointer-events-none select-none text-zinc-700 dark:text-zinc-400 opacity-30">
												<div className="w-5 h-5 mr-2"></div>
												<span className="lowercase">{VERSION_STXT}</span> {VERSION_NUMBER}
											</button>
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
					</div>
				</div>
			</div>
		</>
	);
}
