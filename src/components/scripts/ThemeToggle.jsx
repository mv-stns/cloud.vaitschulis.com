//ThemeToggle.js
import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { Switch } from "@headlessui/react";

const Toggle = () => {
	const { theme, setTheme } = React.useContext(ThemeContext);
	const [enabled, setEnabled] = useState(false);

	const triggerswitch = () => {
		setEnabled();
		setTheme(theme === "dark" ? "light" : "dark");
	};
	return (
		<>
			<Switch.Group onClick={triggerswitch}>
				<div className="flex items-center w-full px-4 py-2 my-5 text-xs font-bold border-2 border-white rounded-lg cursor-pointer md:text-sm text-zinc-700 group dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-400 dark:border-zinc-700 hover:border-zinc-200 dark:hover:border-zinc-400 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600">
					<Switch.Label className="flex items-center mr-2 cursor-pointer select-none">
						{theme === "dark" ? <MoonIcon className="w-3 h-3 mr-2 md:w-5 md:h-5 text-zinc-500 dark:text-blueGray-300" fill="currentColor" aria-hidden="true" /> : <SunIcon className="w-3 h-3 mr-2 text-yellow-400 md:w-5 md:h-5" fill="currentColor" aria-hidden="true" />}
						{theme === "dark" ? "Darkmode deaktivieren" : "Darkmode aktivieren"}
					</Switch.Label>
					<Switch checked={enabled} onChange={triggerswitch} className={`${theme === "dark" ? "bg-blue-600" : "bg-zinc-400 dark:bg-zinc-600 dark:border-zinc-100"} relative inline-flex ml-auto items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
						<span className={`${theme === "dark" ? "translate-x-6" : "translate-x-1"} inline-block w-4 h-4 bg-white rounded-full transition-transform transform transition ease-in-out duration-200`} />
					</Switch>
				</div>
			</Switch.Group>
		</>
	);
};

export default Toggle;
