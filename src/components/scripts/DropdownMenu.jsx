import React, { Fragment, useState } from "react";
import ThemeToggle, { triggerswitch } from "./ThemeToggle";
import { ThemeContext, ThemeProvider, getInitialTheme } from "./ThemeContext";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, LogoutIcon } from "@heroicons/react/solid";
import Modal from "../modals/settingsmodal";
import profileImage from "../assets/profile.png";
import weshare_light from "../assets/light-weshare-favicon-nobg.svg";
import weshare_dark from "../assets/dark-weshare-favicon-nobg.svg";
import { VERSION_NUMBER, VERSION_TXT, VERSION_STXT } from "../version";
import ReactTooltip from 'react-tooltip';

function DropdownMenu() {
    const { theme, setTheme } = React.useContext(ThemeContext);
	const [enabled, setEnabled] = useState(false);
	const triggerswitch = () => {
		setEnabled();
		setTheme(theme === "dark" ? "light" : "dark");
	};
	
	var AZUBI_STATE = 90;

	return (
		<>
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
						<span className="my-auto font-black text-zinc-900 dark:text-white">MV</span>
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
									<div className={`flex flex-col w-[${AZUBI_STATE + "%"}] justify-center text-center text-white shadow-none bg-zinc-500 whitespace-nowrap dark:text-zinc-900`}></div>
								</div>
								<div className="flex items-center justify-between mb-2">
									<div>
										<span className="inline-block px-4 py-1 text-xs font-medium rounded-full text-zinc-600 bg-zinc-100 font-metropolis dark:text-zinc-400 dark:bg-zinc-800">{AZUBI_STATE}% von 100%</span>
									</div>
								</div>
							</div>
							<Menu.Item>
								<ThemeToggle />
							</Menu.Item>
							<Menu.Item>{({ active }) => <Modal />}</Menu.Item>
							<Menu.Item>
                                <a href="https://weshare.vaitschulis.com" target="_blank" rel="noopener noreferrer" className="flex items-center w-full px-4 py-2 my-5 text-xs font-bold bg-white border-2 border-white rounded-lg md:text-sm text-zinc-700 hover:text-zinc-700 hover:bg-zinc-200 hover:border-zinc-200 hover:dark:text-zinc-400 hover:dark:bg-zinc-600 hover:dark:border-zinc-400 dark:text-zinc-400 dark:border-zinc-700 dark:bg-zinc-700 group">
									<img className="mr-2 w-7 h-7" src={theme === "dark" ? weshare_light : weshare_dark} alt="Weshare" />
                                    WeShare File Management
                                </a>
							</Menu.Item>

							<Menu.Item as="div">
								<button data-tip data-for="Logout" className="flex items-center w-full px-4 py-2 my-5 text-xs font-bold bg-white border-2 border-white rounded-lg text-zinc-700 dark:text-zinc-400 dark:border-zinc-700 dark:bg-zinc-700 group md:text-sm opacity-30">
									<LogoutIcon className="w-3 h-3 mr-2 md:w-5 md:h-5 text-zinc-400" fill="currentColor" aria-hidden="true" />
									Logout
								</button>
								<ReactTooltip as="div" className="customtooltip" id="Logout" effect="solid">
									Dieses Feature ist derzeit noch nicht verfügbar
								</ReactTooltip>
							</Menu.Item>
										
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
		</>
	);
}

export default DropdownMenu;
