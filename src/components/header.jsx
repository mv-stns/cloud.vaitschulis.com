import React, { Fragment, useState, useEffect } from "react";
import DropdownMenu from "./scripts/DropdownMenu.jsx";

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
						<DropdownMenu />
					</div>
				</div>
			</div>
		</>
	);
}
