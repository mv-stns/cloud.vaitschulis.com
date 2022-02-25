import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { VERSION_NUMBER, VERSION_TXT} from "../version";
import contentheadvideo from "../assets/isometric-loop.mp4";
import headerimg from "../assets/bg-01.png";

export default function ContentHead() {
	function Tilt(props) {
		const { options, ...rest } = props;
		const tilt = useRef(null);

		useEffect(() => {
			VanillaTilt.init(tilt.current, options);
		}, [options]);

		return <div ref={tilt} {...rest} />;
	}

	/* 
  {
    reverse:           false,  // reverse the tilt direction
    max:               35,     // max tilt rotation (degrees)
    perspective:       1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:             1,      // 2 = 200%, 1.5 = 150%, etc..
    speed:             300,    // Speed of the enter/exit transition
    transition:        true,   // Set a transition on enter/exit.
    axis:              null,   // What axis should be disabled. Can be X or Y.
    reset:             true,   // If the tilt effect has to be reset on exit.
    easing:            "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    glare:             false,   // if it should have a "glare" effect
    "max-glare":       1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    "glare-prerender": false   // false = VanillaTilt creates the glare elements for you, otherwise
                               // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
} */

	const options = {
		perspective: 500,
		speed: 1000,
		max: 10,
		reverse: true,
		startX: 20,
		axis: "x",
	};

	

	return (
		<>
			<div className="relative items-center justify-center w-full overflow-x-hidden lg:pb-40 sm:pt-8 md:pt-12 bg-grid-zinc-200/50 dark:bg-grid-zinc-800/50">
				<div className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto lg:flex-row xl:px-0">
					<div className="absolute inset-0 bg-gradient-to-r dark:from-zinc-700 dark:to-zinc-800/50 from-white to-white/10"></div>
					<div className="absolute inset-0">
						<img src={headerimg} alt="Blurry Image of isometric bubbles" className="w-full h-full" />
					</div>
					<div className="z-30 flex flex-col items-center w-full max-w-xl text-center lg:items-start lg:w-1/2 lg:pt-24 lg:text-left">
						<div className="flex">
							<h1 className="relative mt-20 mb-4 text-3xl font-semibold leading-tight text-zinc-900 dark:text-white lg:pr-16 sm:text-6xl lg:mb-8">
								Willkommen <br/>auf meinem <span className="font-black text-transparent dark:text-white text-7xl bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text drop-shadow-sm">Portfolio</span>
							</h1>
						</div>
							<div className="relative">
								<span className="rounded-md mt-2 mb-10 bg-blue-50 flex shrink-0 px-2.5 py-1 text-xs font-black text-blue-500 tracking-wide uppercase">{VERSION_TXT}&nbsp;{VERSION_NUMBER}</span>
							</div>
						<a href="#_" className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 mb-16 text-base font-bold text-white bg-blue-700 border-t border-blue-600 rounded shadow-lg sm:mt-1 fold-bold lg:mx-0 shadow-blue-700/50">
							Los geht's!
						</a>
					</div>
					<div className="z-50 flex-col items-end justify-center hidden w-full h-full lg:relative lg:flex shrink-0" style={{"transform" : "perspective(1200px) rotateX(15deg) rotateY(-23deg) scale3d(1, 1, 1)", "will-change" : "transform"}}>
						<div className="ml-auto">
							<div className="container relative left-0 w-full">
								<div className="px-2 mx-auto mt-20 max-w-7xl sm:px-6 md:px-8 z-1">
									<div className="sm:px-2 xl:mt-0">
										<div className="relative">
											<div className="max-w-full min-w-full shadow-2xl rounded-2xl sm:rounded-2xl shadow-zinc-400/50 dark:shadow-zinc-900 ring-1 ring-inset ring-zinc-900/5 dark:ring-zinc-200/5">
												<div className="rounded-xl sm:rounded-xl ring-1 ring-zinc-900/5">
													<div className="rounded-t-xl sm:rounded-t-xl bg-gradient-to-b from-white to-[#FBFBFB] dark:from-zinc-800 dark:to-[#292929]">
														<div className="py-2.5 grid items-center px-4 gap-8 grid-cols-[2.425rem,_1fr,_2.425rem] sm:grid-cols-[8rem,_1fr,_8rem]">
															<div className="flex items-center">
																<div className="w-2.5 h-2.5 rounded-full bg-[#EC6A5F]"></div>
																<div className="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#F4BF50]"></div>
																<div className="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#61C454]"></div>
																<svg width="24" height="24" fill="none" className="flex-none hidden ml-4 sm:block text-zinc-400 dark:text-zinc-700">
																	<path d="m15 7-5 5 5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																</svg>
																<svg width="24" height="24" fill="none" className="flex-none hidden ml-4 sm:block text-zinc-400 dark:text-zinc-700">
																	<path d="m10 7 5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																</svg>
															</div>
															<div>
																<div className="flex items-center justify-center w-11/12 py-1 mx-auto text-xs font-medium leading-6 rounded-md sm:w-4/5 bg-zinc-100 dark:bg-zinc-700 text-zinc-400 dark:text-zinc-200 dark:text-zinc-700 ring-1 ring-inset ring-zinc-900/5 dark:ring-zinc-200/5">
																	<svg viewBox="0 0 20 20" fill="currentColor" className="text-zinc-300 dark:text-zinc-500 w-3.5 h-3.5 mr-1.5">
																		<path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
																	</svg>
																	cloud.vaitschulis.com
																</div>
															</div>
															<div className="justify-end hidden sm:flex">
																<svg width="24" height="24" fill="none" className="text-zinc-400 dark:text-zinc-700">
																	<path d="M12.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
																</svg>
															</div>
														</div>
														<div className="grid grid-cols-4 overflow-hidden text-xs leading-5">
															<div className="text-zinc-900 dark:text-zinc-400/50 font-medium px-4 py-1.5 flex items-center justify-center space-x-2">
																<div className="flex-none text-white dark:text-orange-500">
																	<svg class="w-4 h-4 text-blue-500 fill-current sm:w-5 sm:h-5" viewBox="0 0 39 15" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11.252 1.152C4.184 2.526.454 6.918.061 14.329c1.963-4.049 4.798-5.975 8.503-5.778 2.115.112 3.84 1.295 5.75 2.603 3.11 2.133 6.712 4.601 13.281 3.324 7.068-1.374 10.798-5.766 11.191-13.177-1.963 4.049-4.798 5.975-8.503 5.779-2.115-.113-3.84-1.296-5.75-2.604-3.11-2.133-6.712-4.601-13.281-3.324z" fill-rule="evenodd"></path>
																	</svg>
																</div>
																<div className="truncate">v.Cloud - Mein Portfolio ✌🏻</div>
															</div>
															<a href="https://tailwindcss.com" target="_blank">
																<div className="bg-zinc-100 dark:bg-[#303030] group dark:hover:from-zinc-700 dark:hover:to-zinc-700 hover:bg-gradient-to-b hover:from-zinc-100 text-zinc-400 dark:text-zinc-500 rounded-tl border border-zinc-900/5 pl-4 pr-8 py-1.5 -mb-px -mr-4 flex items-center justify-center space-x-2">
																	<svg width="17" height="10" fill="currentColor" className="flex-none text-zinc-300 dark:text-zinc-500 group-hover:text-sky-400">
																		<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 0C6.233 0 4.817 1.111 4.25 3.334c.85-1.112 1.842-1.528 2.975-1.25.647.158 1.109.618 1.62 1.127C9.68 4.041 10.643 5 12.75 5c2.267 0 3.683-1.111 4.25-3.333-.85 1.111-1.841 1.528-2.975 1.25-.647-.159-1.109-.619-1.62-1.128C11.57.96 10.607 0 8.5 0ZM4.25 5C1.983 5 .567 6.111 0 8.334c.85-1.112 1.842-1.528 2.975-1.25.647.158 1.109.618 1.62 1.127C5.43 9.041 6.393 10 8.5 10c2.267 0 3.684-1.11 4.25-3.333-.85 1.111-1.842 1.528-2.975 1.25-.647-.159-1.109-.619-1.62-1.128C7.32 5.96 6.357 5 4.25 5Z"></path>
																	</svg>
																	<div className="truncate">Tailwind UI - Official Tailwind CSS Components</div>
																</div>
															</a>
															<a href="https://headlessui.dev" target="_blank">
																<div className="bg-zinc-100 dark:bg-[#303030] dark:hover:from-zinc-700 group dark:hover:to-zinc-700 hover:bg-gradient-to-b hover:from-zinc-100 text-zinc-400 dark:text-zinc-500 rounded-tl border border-zinc-900/5 pl-4 pr-8 py-1.5 -mb-px -mr-4 flex items-center justify-center space-x-2">
																	<svg width="15" height="16" fill="currentColor" className="flex-none text-zinc-300 dark:text-zinc-500 group-hover:text-cyan-400/80">
																		<path d="m2.973 9.822 9.154-3.056c-.183-1.144-.314-1.908-.465-2.491-.162-.627-.291-.795-.342-.853a1.785 1.785 0 0 0-.643-.467c-.071-.03-.27-.102-.917-.063-.684.042-1.581.181-3.003.406-1.42.225-2.318.37-2.98.542-.627.162-.796.292-.854.342a1.792 1.792 0 0 0-.466.643c-.03.071-.102.271-.063.918.041.683.181 1.581.406 3.002.063.399.12.755.173 1.077Z"></path>
																		<path
																			fill-rule="evenodd"
																			clip-rule="evenodd"
																			d="M.447 9.117C.012 6.367-.206 4.993.265 3.89a4.166 4.166 0 0 1 1.09-1.5C2.26 1.6 3.633 1.382 6.382.946c2.75-.436 4.125-.653 5.229-.182a4.164 4.164 0 0 1 1.5 1.09c.79.904 1.007 2.278 1.442 5.028.436 2.75.653 4.124.182 5.227a4.164 4.164 0 0 1-1.09 1.5c-.903.79-2.278 1.008-5.028 1.443-2.749.436-4.124.653-5.227.182a4.166 4.166 0 0 1-1.5-1.09C1.1 13.241.883 11.867.447 9.117Zm4.85 4.882c.735-.044 1.684-.193 3.087-.415 1.404-.222 2.351-.374 3.066-.56.691-.179 1.01-.354 1.216-.534a2.68 2.68 0 0 0 .7-.964c.108-.252.176-.609.133-1.322-.045-.736-.193-1.685-.416-3.088-.222-1.404-.373-2.352-.559-3.066-.18-.692-.354-1.01-.534-1.216a2.678 2.678 0 0 0-.964-.7c-.252-.108-.609-.176-1.323-.133-.736.044-1.684.193-3.088.415-1.403.223-2.35.374-3.065.56-.692.179-1.01.354-1.216.534a2.678 2.678 0 0 0-.7.964c-.108.251-.176.609-.133 1.322.045.737.193 1.685.415 3.088.223 1.404.374 2.352.56 3.066.179.692.354 1.01.534 1.216.265.303.594.543.964.7.252.109.608.176 1.323.133Z"
																		></path>
																	</svg>
																	<div className="truncate">Headless UI – Unstyled, fully accessible UI components</div>
																</div>
															</a>
															<a href="https://reactjs.org" target="_blank">
																<div className="bg-zinc-100 dark:bg-[#303030] dark:hover:from-zinc-700 dark:hover:to-zinc-700 group hover:bg-gradient-to-b hover:from-zinc-100 text-zinc-400 dark:text-zinc-500 rounded-tl border border-zinc-900/5 pl-4 pr-8 py-1.5 -mb-px -mr-4 flex items-center justify-center space-x-2">
																	<svg width="15" height="16" fill="currentColor" className="flex-none text-zinc-300 dark:text-zinc-500 group-hover:text-sky-400" viewBox="-11.5 -10.23174 23 20.46348">
																		<circle cx="0" cy="0" r="2.05" fill="currenctColor" />
																		<g stroke="currentColor" stroke-width="1" fill="none">
																			<ellipse rx="11" ry="4.2" />
																			<ellipse rx="11" ry="4.2" transform="rotate(60)" />
																			<ellipse rx="11" ry="4.2" transform="rotate(120)" />
																		</g>
																	</svg>
																	<div className="truncate">React – A JavaScript library for building user interfaces</div>
																</div>
															</a>
														</div>
													</div>
													<div className="relative p-8 -mb-8 bg-white border-t dark:bg-zinc-600 dark:border-zinc-700 border-zinc-200 rounded-b-xl">
														<div className="relative p-4 sm:p-0 rounded-2xl">
															<div className="mx-auto max-w-7xl rounded-2xl">
																<div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
																	<div className="absolute inset-0 rounded-2xl">
																		{/* <img className="object-cover w-full h-full rounded-2xl" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4040&q=80" alt="Hero Image" /> */}
																		<video className="object-cover w-full h-full rounded-2xl" src={contentheadvideo} autoPlay muted loop/>
																		{/* <div className="absolute inset-0 bg-amber-700 mix-blend-multiply rounded-2xl"></div> */}
																		<div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-pink-600 mix-blend-multiply rounded-2xl"></div>
																	</div>
																	<div className="relative w-[1000px] h-[600px]"></div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
