import React from "react";
import ContentHead from "./browserframes/content-head";
import Projects from "./projects/bloglist";

export default function Content() {
	return (
		<>
			<main className="bg-white dark:bg-zinc-700">
				<ContentHead></ContentHead>
				<div className="bg-zinc-50 dark:bg-zinc-700">
					<div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
						<p className="text-sm font-semibold tracking-wide text-center uppercase text-zinc-500">Bereits für folgende Unternehmen gearbeitet</p>
						<div className="grid grid-cols-2 gap-8 mt-16 md:grid-cols-6 lg:grid-cols-5">
							<div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
								<svg className="h-12 duration-200 fill-current text-zinc-400 hover:text-deepred hover:drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 2560 269" version="1.1">
									<g transform="matrix(31.6718,0,0,31.6718,-5.34253,-437.098)">
										<g transform="matrix(0.49613,0,0,0.49613,-0.118575,-30.1647)">
											<path d="M21.089,93.621C21.089,92.913 20.561,92.372 19.503,91.993C18.681,91.714 17.738,91.574 16.682,91.574L4.352,91.574L4.352,102.546L16.682,102.546C17.717,102.546 18.637,102.421 19.439,102.176C20.538,101.813 21.089,101.296 21.089,100.622C21.089,99.933 20.538,99.406 19.439,99.044C18.617,98.783 17.697,98.65 16.682,98.65L6.569,98.65L6.569,95.717L16.682,95.717C17.738,95.717 18.681,95.57 19.503,95.273C20.561,94.895 21.089,94.344 21.089,93.621ZM24.733,100.599C24.733,101.32 24.502,102.002 24.037,102.643C22.641,104.534 20.001,105.479 16.113,105.479L0.579,105.479L0.579,88.641L16.113,88.641C19.81,88.641 22.398,89.536 23.878,91.327C24.448,92.051 24.733,92.824 24.733,93.646C24.733,95.042 23.974,96.217 22.452,97.171C23.974,98.093 24.733,99.235 24.733,100.599Z" />
										</g>
										<g transform="matrix(0.49613,0,0,0.49613,-0.118575,-30.1647)">
											<path d="M52.977,97.936C52.977,100.648 51.93,102.628 49.838,103.876C48.001,104.962 45.273,105.504 41.659,105.504L40.358,105.504C36.746,105.504 34.019,104.962 32.181,103.876C30.088,102.628 29.041,100.648 29.041,97.936L29.041,88.663L32.814,88.663L32.814,97.936C32.814,99.956 33.712,101.296 35.507,101.954C36.67,102.364 38.721,102.571 41.659,102.571C44.11,102.571 45.908,102.282 47.048,101.708C48.485,100.984 49.204,99.726 49.204,97.936L49.204,88.663L52.977,88.663L52.977,97.936Z" />
										</g>
										<g transform="matrix(0.49613,0,0,0.49613,-0.118575,-30.1647)">
											<path d="M82.924,105.504L77.344,105.504L71.29,100.77L63.144,100.77L63.144,97.861L73.286,97.861C74.683,97.861 75.855,97.624 76.806,97.148C77.885,96.587 78.423,95.79 78.423,94.753C78.423,92.652 76.712,91.6 73.286,91.6L60.922,91.6L60.922,105.504L57.149,105.504L57.149,88.665L72.684,88.665C75.476,88.665 77.726,89.134 79.436,90.071C81.401,91.138 82.386,92.708 82.386,94.781C82.386,96.193 81.815,97.409 80.674,98.43C79.615,99.382 78.18,100.046 76.361,100.426L82.924,105.504Z" />
										</g>
										<g transform="matrix(0.49613,0,0,0.49613,-0.118575,-30.1647)">
											<path d="M90.27,105.503L86.498,105.503L86.498,88.665L90.27,88.665L90.27,105.503ZM108.465,105.503L104.693,105.503L104.693,98.501L91.981,98.501L91.981,95.57L104.693,95.57L104.693,88.665L108.465,88.665L108.465,105.503Z" />
										</g>
										<g transform="matrix(0.49613,0,0,0.49613,-0.118575,-30.1647)">
											<path d="M140.086,105.504L135.236,105.479L131.59,100.77L121.319,100.77L123.602,97.861L129.34,97.861L125.568,93.005L115.805,105.479L110.954,105.479L122.715,90.267C123.011,89.874 123.422,89.512 123.952,89.182C124.584,88.804 125.155,88.617 125.661,88.617C126.213,88.617 126.784,88.796 127.375,89.158C127.881,89.47 128.294,89.839 128.612,90.267L140.086,105.504Z" />
										</g>
										<g transform="matrix(0.49613,0,0,0.49613,-0.118575,-30.1647)">
											<path d="M163.498,104.05C163.498,105.134 163.024,105.675 162.071,105.675C161.375,105.675 160.591,105.341 159.725,104.666L145.84,93.818L145.84,105.504L142.099,105.504L142.099,90.12C142.099,89.726 142.237,89.384 142.512,89.096C142.788,88.81 143.178,88.663 143.685,88.663C144.383,88.663 145.103,88.952 145.84,89.53L159.725,100.352L159.725,88.663L163.498,88.663L163.498,104.05Z" />
										</g>
									</g>
								</svg>
							</div>
							<div className="relative flex justify-center col-span-1 md:col-span-2 lg:col-span-1 filter">
								<svg className="h-12 fill-current text-zinc-400 hover:text-deepred" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M5.388.004l4.75 13.46v-.01l.37 1.06c2.08 5.91 3.21 9.07 3.21 9.084 0 0 .32.02.702.04 1.15.05 2.59.18 3.67.31 .25.03.46.04.48.03L13.86 10.6l-.44-1.23 -2.423-6.86c-.46-1.3-.85-2.408-.87-2.45l-.04-.09H5.35Zm8.509.008l-.01 5.3 -.01 5.3 -.44-1.24v-.01l-.57 11.81c.55 1.56.85 2.404.85 2.4 0 0 .32.02.702.04 1.157.05 2.59.18 3.68.31 .25.03.46.04.48.03 .01-.01.02-5.42.01-12.012l-.01-11.98h-4.71ZM5.388.002V11.99c0 6.59 0 11.99.01 12.005 0 0 .41-.03.907-.09 .49-.06 1.17-.13 1.51-.16 .51-.05 2.06-.15 2.248-.15 .05 0 .05-.27.06-5.09l0-5.08 .38 1.06 .13.375L11.2 3.06l-.19-.55 -.88-2.44 -.03-.09Z" className="b" />
								</svg>
								<div className="absolute inset-0 backdrop-blur-lg"></div>
							</div>
							<div className="relative flex justify-center col-span-1 md:col-span-2 lg:col-span-1 filter">
								<svg className="h-12 fill-current text-zinc-400 hover:text-blue-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 0C5.36 0 0 5.36 0 12c0 6.64 5.36 12 12 12s12-5.36 12-12 -5.36-12-12-12m0 1.41c1.2 0 2.36.22 3.43.59l-3.3 7.13c-.04.04-.04.13-.13.13s-.09-.09-.13-.13L8.57 2c1.07-.37 2.23-.58 3.43-.58M6.9 2.74l3.82 8.23c.08.17.17.22.28.22h2c.12 0 .2-.05.29-.22l3.77-8.23c1.58.9 2.94 2.19 3.9 3.73L15.6 16.84c-.04.09-.1.13-.13.13 -.08 0-.08-.08-.13-.13l-2.05-4.54c-.09-.17-.17-.21-.29-.21h-2c-.11 0-.2.04-.29.21l-2.05 4.54c-.05.05-.04.13-.13.13s-.09-.08-.13-.13L3 6.47c.94-1.54 2.32-2.83 3.9-3.73M2.06 8.53l6.17 12c.08.17.17.3.39.3 .21 0 .29-.13.38-.3l2.87-6.39c.04-.08.09-.14.13-.14 .09 0 .09.1.13.14l2.91 6.39c.09.17.17.3.39.3 .21 0 .3-.13.38-.3l6.19-12c.37 1.07.59 2.23.59 3.47 -.05 5.79-4.8 10.59-10.59 10.59s-10.54-4.8-10.54-10.59c-.001-1.2.21-2.35.6-3.47Z" className="b" />
								</svg>
								<div className="absolute inset-0 backdrop-blur-lg"></div>
							</div>
							<div className="relative flex justify-center col-span-1 md:col-span-2 md:col-start-2 lg:col-span-1 filter">
								<svg className="h-12 fill-current text-zinc-400 hover:text-zinc-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M21 12c0 4.97-4.03 9-9 9 -4.98 0-9-4.03-9-9 0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9ZM5 12c0 3.86 3.13 7 7 7v-7h7c0-3.87-3.14-7-7-7v7H5Z" />
								</svg>
								<div className="absolute inset-0 backdrop-blur-lg"></div>
							</div>
							<div className="relative flex justify-center col-span-2 md:col-span-2 md:col-start-4 lg:col-span-1 filter">
								<svg className="h-12 fill-current text-zinc-400 hover:text-amber-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M5.23 15.063L7.2 2.38c.03-.2.18-.35.37-.38 .19-.04.383.06.47.23l2.12 3.979 -4.94 8.848Zm14 3.077L17.35 6.46c-.03-.17-.15-.31-.31-.36 -.17-.06-.34-.01-.46.11L4.74 18.129l6.55 3.69c.41.23.91.23 1.32 0l6.6-3.7ZM13.9 7.955l-1.52-2.91c-.08-.15-.24-.25-.4-.25 -.17 0-.33.09-.4.24l-6.67 11.93 8.97-9.04Z" />
								</svg>
								<div className="absolute inset-0 backdrop-blur-lg"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="relative py-16 pt-24 pb-48 bg-white dark:bg-zinc-700">
					<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
						<div className="relative sm:py-16 lg:py-0">
							<div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
								<div className="absolute inset-y-0 w-full h-full right-1/2 bg-zinc-50 dark:bg-zinc-600 rounded-r-3xl lg:right-72"></div>
								<svg className="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
									<defs>
										<pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
											<rect x="0" y="0" width="4" height="4" className="text-zinc-200 dark:text-zinc-500" fill="currentColor" />
										</pattern>
									</defs>
									<rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
								</svg>
							</div>

							<div className="flex">
								<div className="relative max-w-md px-4 mx-auto my-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
									<div className="relative pt-12 pb-10 overflow-hidden shadow-2xl md:pt-64 rounded-2xl">
										<img className="absolute inset-0 object-cover w-full h-full" src="https://images.unsplash.com/photo-1515890922410-ae767899d6b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdWR8ZW58MHx8MHx8&auto=format&fit=crop&w=1100&q=60" alt="" />
										<div className="absolute inset-0 bg-amber-500 dark:bg-amber-900 mix-blend-multiply"></div>
										<div className="absolute inset-0 opacity-50 bg-gradient-to-t from-amber-600 via-amber-600 dark:from-amber-900 dark:via-amber-900 dark:to-amber-800"></div>
										<div className="relative px-8">
											<div>
												<span className="text-6xl font-extrabold text-white font-sharp-sans" style={{ transform: "translateZ(20px)" }}>
													v.Cloud
												</span>
											</div>
											<blockquote className="mt-8">
												<div className="relative text-lg font-medium text-white md:flex-grow">
													<svg className="absolute top-0 left-0 w-8 h-8 transform -translate-x-3 -translate-y-2 text-amber-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
														<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
													</svg>
													<p className="relative pt-4">Diese Seite ist ein Miniprojekt meinerseits, um sowohl meine Coding Fähigkeiten unter Beweis zu stellen, aber auch, um meine Projekte in diesem Portfolio präsentieren zu können.</p>
												</div>
												<footer className="mt-4">
													<p className="text-base font-semibold text-amber-200">Marcus Vaitschulis, CEO bei v.Cloud</p>
												</footer>
											</blockquote>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
							<div className="pt-12 sm:pt-16 lg:pt-20">
								<div className="relative">
									<div className="absolute inset-0 flex items-center" aria-hidden="true">
										<div className="w-full border-t border-zinc-300 dark:border-zinc-500"></div>
									</div>
									<div className="relative flex justify-start">
										<h2 className="pr-4 text-3xl font-bold tracking-tight bg-white dark:text-zinc-300 text-zinc-700 dark:bg-zinc-700 sm:text-4xl">Über mich</h2>
									</div>
								</div>
								<div className="mt-6 space-y-6 text-xs leading-7 md:text-base text-zinc-500 dark:text-zinc-300">
									<p>
										Ich bin ein ambitionierter junger Mann, der sich bereits seit 2015 im Bereich Mediengestaltung / Mediendesign Fuß fasst. In der schulischen Ausbildung am{" "}
										<a href="https://adolph-kolping-berufskolleg.eu" target="_blank" className="font-medium underline transition-all duration-150 ease-in-out decoration-orange-500 hover:decoration-orange-300 underline-offset-[5px] decoration-wavy decoration-2">
											Adolph-Kolping-Berufskolleg in Münster
										</a>
										&nbsp;als Gestaltungstechnischen Assistenten wurde mir ein breit gefächertes Themengebiet auf dem Silbertablett serviert, in denen ich mich erstmal zurechtfinden musste. In dieser Zeit konnte ich während meiner Schulzeit und natürlich auch privat in die Bereiche 3D-Animation, Film & Schnitt, Bildbearbeitung, HTML & CSS und vieles mehr hineinarbeiten. An meisten interessierte ich mich jedoch für die Coding-Projekte.
									</p>
									<p>Nach meinem erfolgreichen Abschluss an der Schule habe ich eine Ausbildung als Mediengestalter im Fachbereich Gestaltung & Technik begonnen. Dort konnte ich mithilfe von WordPress einen sehr komplexen E-Commerce-Shop für das Unternehmen entwickeln. Zusätzlich noch eine kleinere multilinguale Homepage des Tochterunternehmens. Diese beiden Webseiten haben mehrere Monate benötigt, um vollständig entwickelt zu werden, da von Grund auf neue Freisteller fotografiert und bearbeitet und diverse Servertechnologien selbst erlernt werden mussten. Da sind mir die Erfahrungen der vorherigen Lehre sehr gelegen gekommen.</p>
									<p>Mittlerweile bin ich in der Lage dazu, mich mithilfe dieser erlangten Fähigkeiten meine eigenen komplexen Projekte entwickeln.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Projects />
				
				<div className="my-72"></div>
				<div className="relative py-16 bg-white dark:bg-zinc-700">
					<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
						<div className="absolute inset-0 z-10 bg-gradient-to-t via-white from-white dark:from-zinc-500 dark:via-zinc-600 backdrop-filter backdrop-blur-lg"></div>
						<div className="absolute z-20 px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
							<h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">
								<span className="block text-center text-black">mehr folgt…</span>
							</h1>
						</div>
						<div className="px-6 py-10 bg-gradient-to-bl from-red-500 via-indigo-500 to-blue-500 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
							<div className="lg:w-0 lg:flex-1">
								<h2 className="text-3xl font-extrabold tracking-tight text-white">Abonnieren Sie den Newsletter</h2>
								<p className="max-w-3xl mt-4 text-lg text-zinc-100">Ab und an versende ich wohl möglich paar hilfreiche Tipps für Mediengestalter oder UI/UX Designer ✌🏻.</p>
							</div>
							<div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
								<form className="sm:flex">
									<label for="email-address" className="sr-only">
										E-Mail Adresse
									</label>
									<input id="email-address" name="email-address" type="email" autocomplete="email" required className="w-full px-5 py-3 border-white rounded-md placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-700 focus:ring-white disabled:opacity-30" placeholder="E-Mail Adresse eingeben" disabled />
									<button type="submit" className="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-white border border-transparent rounded-md pointer-events-none bg-zinc-500 hover:bg-zinc-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 disabled:opacity-30" disabled>
										Abonnieren
									</button>
								</form>
								<p className="mt-3 text-sm text-zinc-100">
									Der Schutz Ihrer Daten liegt mir am Herzen. Lesen Sie unsere
									<a href="#" className="font-medium text-white underline">
										Datenschutzerklärung.
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
