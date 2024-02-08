<template>
	<div>
		<div class="full-width banner-hero bg-sky-100 banner-1">
			<div class="px-[12px] md:px-[36px] xl:px-0 z-10 relative mx-auto mt-0 py-[60px] max-w-[1320px] lg:flex lg:items-center">
				<div class="flex-1">
					<h1 class="font-chivo font-bold lg:text-display-2 md:text-[80px] md:leading-[88px] sm:text-[50px] sm:leading-[58px] text-[40px] mb-[40px]">
						Empresa líder en<span class="text-sky-900">&nbsp;consultoría y desarrollo de software&nbsp;</span>
					</h1>
					<p class="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[40px] md:text-[24px]">
						Te brindamos las herramientas para que puedas hacer crecer tu empresa y mejores los procesos actuales.
					</p>
					<div class="flex items-center justify-start">
						<button type="button">
							<router-link
								:to="{ name: 'contact' }"
								class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-heading-6 tracking-wide mr-[22px]">
								<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Contactanos</span>
								<i class="group">
									<img class="ml-[7px] w-[12px] filter-white group-hover:filter-black group-hover:hidden" src="@/assets/images/icon-right-white.svg" alt="Icono de flecha a la izquierda" />
									<img class="ml-[7px] w-[12px] filter-white group-hover:filter-black hidden group-hover:block" src="@/assets/images/icon-right.svg" alt="Icono de flecha a la izquierda" />
								</i>
							</router-link>
						</button>
						<router-link
							:to="{ name: 'successStories' }"
							class="text-base flex items-center font-chivo font-bold text-[18px] leading-[18px] gap-[5px]">
							Casos de Éxito
							<i>
								<img class="ml-[7px] w-[12px]" src="@/assets/images/icon-right.svg" alt="Icono de flecha a la izquierda" />
							</i>
						</router-link>
					</div>
				</div>
				<div class="hidden relative flex-1 h-auto self-stretch lg:block">
					<div class="absolute w-full left-20 animate-hero-thumb-sm-animation bottom-[-40px] max-w-[526px]">
						<img class="h-full w-full object-cover" src="@/assets/images/hero2.png" alt="Imagen publicitaria del equipo de CCEO" />
					</div>
					<div class="absolute opacity-80 animate-float max-w-[176px] bottom-[10%] -translate-x-1/3">
						<div class="relative bg-green-900 bg-opacity-80 rounded-2xl grid place-items-center">
							<img class="h-full w-full object-cover" src="@/assets/images/video-bg.png" alt="Imagen de fondo de video" />
							<p class="text-heading-4 absolute text-white font-chivo font-bold ml-[49px]">Ver video</p>
							<button class="rounded-full bg-white grid place-items-center absolute play-video w-[64px] h-[64px] left-[-15%]">
								<img src="@/assets/images/icon-play.svg" alt="Icono de play video" width="15" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-x-[24px] lg:grid-cols-6">
				<a class="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]" href="/">
					<img src="@/assets/images/customers/ttsa.svg" alt="Logotipo nuestro cliente TTSA" />
				</a>
				<a class="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]" href="/">
					<img src="@/assets/images/customers/plerk.svg" alt="Logotipo nuestro cliente Plerk" />
				</a>
				<a class="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]" href="/">
					<img src="@/assets/images/customers/gontex.svg" alt="Logotipo nuestro cliente Gontex" />
				</a>
				<a class="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]" href="/">
					<img src="@/assets/images/customers/sisfum.svg" alt="Logotipo nuestro cliente Sisfum" />
				</a>
				<a class="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px] md:col-start-2 lg:col-start-auto" href="/">
					<img src="@/assets/images/customers/alaman.svg" alt="Logotipo nuestro cliente Alaman{" />
				</a>
				<a class="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px] md:col-start-3 lg:col-start-auto" href="/">
					<img src="@/assets/images/customers/emanagym.svg" alt="Logotipo nuestro cliente TTSA" />
				</a>
			</div>
		</div>

		<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
			<div class="text-center">
				<h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">See why we are trusted the world over</h2>
				<p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.
				</p>
			</div>
			<div class="flex items-center gap-5 justify-center flex-wrap mx-auto w-full mt-[90px] sm:w-[80%] xl:w-full mb-[58px]">
				<p id="branding" class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px] active">Branding</p>
				<p id="development" class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]">Development</p>
				<p id="animation" class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]">Animation</p>
				<p id="user-exp" class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]">User Experience</p>
				<p id="social-network" class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]">Social Network</p>
				<p id="marketing" class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]">Marketing</p>
			</div>
			<div class="tab-content lg:gap-[30px] lg:flex bg-bg-2 branding">
				<div class="p-5 md:p-[60px] lg:w-1/2">
					<h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
						Optimize and scale, easy to start
					</h2>
					<p class="text-excerpt mb-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					<button type="button"> <a class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit" href="#"><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Learn More</span><i> <img class="ml-[7px] w-[12px] filter-black group-hover:filter-white" src="./assets/images/icons/icon-right.svg" alt="arrow right icon" /></i></a></button>
				</div>
				<div class="relative lg:w-1/2">
					<img class="h-full w-full object-cover" src="./assets/images/thumbnail-1.png" alt="Agon" /><img class="absolute top-0 right-0" src="./assets/images/icons/pattern-3.svg" alt="pattern" />
					<button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0"><img src="./assets/images/icons/icon-play.svg" alt="play button" width="30" /></button>
				</div>
			</div>
			<div class="tab-content lg:gap-[30px] lg:flex bg-bg-3 development !hidden">
				<div class="p-5 md:p-[60px] lg:w-1/2">
					<h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
						Design Studios That Everyone Should Know
					</h2>
					<p class="text-excerpt mb-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					<button type="button"> <a class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit" href="#"><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Learn More</span><i> <img class="ml-[7px] w-[12px] filter-black group-hover:filter-white" src="./assets/images/icons/icon-right.svg" alt="arrow right icon" /></i></a></button>
				</div>
				<div class="relative lg:w-1/2">
					<img class="h-full w-full object-cover" src="./assets/images/thumbnail-3.png" alt="Agon" /><img class="absolute top-0 right-0" src="./assets/images/icons/pattern-3.svg" alt="pattern" />
					<button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0"><img src="./assets/images/icons/icon-play.svg" alt="play button" width="30" /></button>
				</div>
			</div>
			<div class="tab-content lg:gap-[30px] lg:flex bg-bg-4 animation !hidden">
				<div class="p-5 md:p-[60px] lg:w-1/2">
					<h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
						We can blend colors multiple ways
					</h2>
					<p class="text-excerpt mb-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					<button type="button"> <a class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit" href="#"><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Learn More</span><i> <img class="ml-[7px] w-[12px] filter-black group-hover:filter-white" src="./assets/images/icons/icon-right.svg" alt="arrow right icon" /></i></a></button>
				</div>
				<div class="relative lg:w-1/2">
					<img class="h-full w-full object-cover" src="./assets/images/thumbnail-4.png" alt="Agon" /><img class="absolute top-0 right-0" src="./assets/images/icons/pattern-3.svg" alt="pattern" />
					<button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0"><img src="./assets/images/icons/icon-play.svg" alt="play button" width="30" /></button>
				</div>
			</div>
			<div class="tab-content lg:gap-[30px] lg:flex bg-bg-5 user-exp !hidden">
				<div class="p-5 md:p-[60px] lg:w-1/2">
					<h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
						Choose The Best Plan That's For You
					</h2>
					<p class="text-excerpt mb-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					<button type="button"> <a class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit" href="#"><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Learn More</span><i> <img class="ml-[7px] w-[12px] filter-black group-hover:filter-white" src="./assets/images/icons/icon-right.svg" alt="arrow right icon" /></i></a></button>
				</div>
				<div class="relative lg:w-1/2">
					<img class="h-full w-full object-cover" src="./assets/images/thumbnail-5.png" alt="Agon" /><img class="absolute top-0 right-0" src="./assets/images/icons/pattern-3.svg" alt="pattern" />
					<button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0"><img src="./assets/images/icons/icon-play.svg" alt="play button" width="30" /></button>
				</div>
			</div>
			<div class="tab-content lg:gap-[30px] lg:flex bg-bg-6 social-network !hidden">
				<div class="p-5 md:p-[60px] lg:w-1/2">
					<h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
						Subscribe our newsletter to get gift
					</h2>
					<p class="text-excerpt mb-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					<button type="button"> <a class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit" href="#"><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Learn More</span><i> <img class="ml-[7px] w-[12px] filter-black group-hover:filter-white" src="./assets/images/icons/icon-right.svg" alt="arrow right icon" /></i></a></button>
				</div>
				<div class="relative lg:w-1/2">
					<img class="h-full w-full object-cover" src="./assets/images/thumbnail-19.png" alt="Agon" /><img class="absolute top-0 right-0" src="./assets/images/icons/pattern-3.svg" alt="pattern" />
					<button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0"><img src="./assets/images/icons/icon-play.svg" alt="play button" width="30" /></button>
				</div>
			</div>
			<div class="tab-content lg:gap-[30px] lg:flex bg-bg-7 marketing !hidden">
				<div class="p-5 md:p-[60px] lg:w-1/2">
					<h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
						Ready to get started? Create and Account
					</h2>
					<p class="text-excerpt mb-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					<button type="button"> <a class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit" href="#"><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Learn More</span><i> <img class="ml-[7px] w-[12px] filter-black group-hover:filter-white" src="./assets/images/icons/icon-right.svg" alt="arrow right icon" /></i></a></button>
				</div>
				<div class="relative lg:w-1/2">
					<img class="h-full w-full object-cover" src="./assets/images/thumbnail-22.png" alt="Agon" /><img class="absolute top-0 right-0" src="./assets/images/icons/pattern-3.svg" alt="pattern" />
					<button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0"><img src="./assets/images/icons/icon-play.svg" alt="play button" width="30" /></button>
				</div>
			</div>
		</div>

		<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[100px]">
			<div class="text-center mb-[70px]">
				<h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">We facilitate the creation of strategy and design</h2>
				<p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">
					Interactively transform magnetic growth strategies whereas prospective &quot;outside the box&quot; thinking.
				</p>
			</div>
			<div class="lg:flex lg:gap-5 xl:gap-[30px]">
				<div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-5 hover:translate-y-[-2px]">
					<div>
						<img class="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]" src="./assets/images/icons/icon-flower.svg" alt="icon" />
						<h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
							Business strategy
						</h2>
						<p class="text-excerpt text-gray-600 mb-[30px]">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
					</div>
					<button type="button"> <a class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-fit hover:translate-y-[-3px]" href="#"><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Learn More</span><i> <img class="ml-[7px] w-[12px] filter-black group-hover:filter-white" src="./assets/images/icons/icon-right.svg" alt="arrow right icon" /></i></a></button><img class="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0" src="./assets/images/icons/icon-flower-white.svg" alt="icon" />
				</div>
				<div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-9 hover:translate-y-[-2px]">
					<div>
						<img class="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]" src="./assets/images/icons/icon-map.svg" alt="icon" />
						<h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
							Local Marketing
						</h2>
						<p class="text-excerpt text-gray-600 mb-[30px]">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
					</div>
					<button type="button"> <a class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-fit hover:translate-y-[-3px]" href="#"><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Learn More</span><i> <img class="ml-[7px] w-[12px] filter-black group-hover:filter-white" src="./assets/images/icons/icon-right.svg" alt="arrow right icon" /></i></a></button><img class="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0" src="./assets/images/icons/icon-map-white.svg" alt="icon" />
				</div>
				<div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-2 hover:translate-y-[-2px]">
					<div>
						<img class="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]" src="./assets/images/icons/icon-pine.svg" alt="icon" />
						<h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
							Social Media
						</h2>
						<p class="text-excerpt text-gray-600 mb-[30px]">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
					</div>
					<button type="button"> <a class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-fit hover:translate-y-[-3px]" href="#"><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Learn More</span><i> <img class="ml-[7px] w-[12px] filter-black group-hover:filter-white" src="./assets/images/icons/icon-right.svg" alt="arrow right icon" /></i></a></button><img class="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0" src="./assets/images/icons/icon-pine-white.svg" alt="icon" />
				</div>
			</div>
		</div>

		<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[100px]">
			<div class="lg:grid lg:grid-cols-2 lg:gap-[30px] xl:gap-[95px]">
				<div class="relative">
					<img class="rounded-2xl mb-[30px] lg:mb-0 lg:flex-1" src="./assets/images/thumbnail-2.png" alt="Agon" />
				</div>
				<div class="flex-1 order-1">
					<span class="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">
						Lo qué hacemos y lo qué obtienes
					</span>
					<h3 class="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">
						Nuestro modelo de negocios
					</h3>
					<p class="text-quote md:text-lead-lg text-gray-600 mb-[10px]">
						Ayudamos a startups, pequeñas empresas y grandes compañias a desarrollaor productos de innovación digital
					</p>
					<p class="text-quote md:text-lead-lg text-gray-600 mb-[10px]">
						La innovación y tecnología son los elementos centrales para incrementar la competitividad de tu empresa e incursionar en nuevos mercados.
					</p>
					<p class="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
						Nuestro proceso de desarrollo evoluciona con los años. Hemos creado acciones que permiten generar más valor en los productos y reducir tiempos.
					</p>
					<div class="border border-green-900 border-dashed mb-[48px]" />
					<div class="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]">
						<div class="mb-[30px] lg:mb-0">
							<div class="flex items-center mb-[17px]">
								<img class="mr-[9px]" src="./assets/images/icons/icon-leaf.svg" alt="leaf icon" />
								<h4 class="text-heading-6 font-chivo font-bold">Boost your sale</h4>
							</div>
							<p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p>
						</div>
						<div class="mb-[30px] lg:mb-0">
							<div class="flex items-center mb-[17px]">
								<img class="mr-[9px]" src="./assets/images/icons/icon-leaf.svg" alt="leaf icon" />
								<h4 class="text-heading-6 font-chivo font-bold">Smart Installation Tools</h4>
							</div>
							<p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p>
						</div>
						<div class="mb-[30px] lg:mb-0">
							<div class="flex items-center mb-[17px]">
								<img class="mr-[9px]" src="./assets/images/icons/icon-leaf.svg" alt="leaf icon" />
								<h4 class="text-heading-6 font-chivo font-bold">Introducing New Features</h4>
							</div>
							<p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p>
						</div>
						<div class="mb-[30px] lg:mb-0">
							<div class="flex items-center mb-[17px]">
								<img class="mr-[9px]" src="./assets/images/icons/icon-leaf.svg" alt="leaf icon" />
								<h4 class="text-heading-6 font-chivo font-bold">Dynamic Boosting</h4>
							</div>
							<p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
			<div class="bg-bg-2 relative px-[12px] py-[70px] rounded-[50px]">
				<img class="absolute top-0 left-0 z-0 -translate-x-1/4" src="./assets/images/icons/pattern-4.svg" alt="pattern icon" />
				<div class="text-center relative mb-[70px] md:mb-[90px]">
					<h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">What We Offer</h2>
					<p class="text-quote md:text-lead-lg text-gray-600 mx-auto md:max-w-[50ch]">
						What makes us different from others? We give holistic solutions with strategy, design &amp; technology.
					</p>
				</div>
				<div class="offer-list dots">
					<div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
						<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]" src="./assets/images/icons/icon-trees.svg" alt="icon" />
						<h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">Market research</h3>
						<p class="text-text text-gray-600">
							One make creepeth, man bearing theira firmament.
						</p>
					</div>
					<div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
						<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]" src="./assets/images/icons/icon-sun.svg" alt="icon" />
						<h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">Strategic Consulting</h3>
						<p class="text-text text-gray-600">
							One make creepeth, man bearing theira firmament.
						</p>
					</div>
					<div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
						<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]" src="./assets/images/icons/icon-hat.svg" alt="icon" />
						<h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">Cognitive Solution </h3>
						<p class="text-text text-gray-600">
							One make creepeth, man bearing theira firmament.
						</p>
					</div>
					<div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
						<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]" src="./assets/images/icons/icon-trees.svg" alt="icon" />
						<h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">Market research</h3>
						<p class="text-text text-gray-600">
							One make creepeth, man bearing theira firmament.
						</p>
					</div>
					<div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
						<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]" src="./assets/images/icons/icon-sun.svg" alt="icon" />
						<h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">Strategic Consulting</h3>
						<p class="text-text text-gray-600">
							One make creepeth, man bearing theira firmament.
						</p>
					</div>
					<div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
						<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]" src="./assets/images/icons/icon-hat.svg" alt="icon" />
						<h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">Cognitive Solution </h3>
						<p class="text-text text-gray-600">
							One make creepeth, man bearing theira firmament.
						</p>
					</div>
					<div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
						<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]" src="./assets/images/icons/icon-trees.svg" alt="icon" />
						<h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">Market research</h3>
						<p class="text-text text-gray-600">
							One make creepeth, man bearing theira firmament.
						</p>
					</div>
					<div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
						<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]" src="./assets/images/icons/icon-sun.svg" alt="icon" />
						<h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">Strategic Consulting</h3>
						<p class="text-text text-gray-600">
							One make creepeth, man bearing theira firmament.
						</p>
					</div>
					<div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
						<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]" src="./assets/images/icons/icon-hat.svg" alt="icon" />
						<h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">Cognitive Solution </h3>
						<p class="text-text text-gray-600">
							One make creepeth, man bearing theira firmament.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
			<div class="items-center justify-between md:flex mb-[30px] md:mb-[80px]">
				<div>
					<h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">Our Happy Customers</h2>
					<p class="text-quote md:text-lead-lg text-gray-600">
						Know about our clients, we are a woldwide corporate brand
					</p>
				</div>
				<div class="flex items-center gap-5 self-end">
					<div class="grid place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-prev"><img class="group-hover:filter-white" src="./assets/images/icons/icon-prev.svg" alt="control icon button" /></div>
					<div class="grid place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-next"><img class="group-hover:filter-white" src="./assets/images/icons/icon-next.svg" alt="control icon button" /></div>
				</div>
			</div>
			<div class="feedback-list ml-[-15px]">
				<div class="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-4">
					<img class="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]" src="./assets/images/avatar-1.png" alt="avatar" />
					<p class="text-heading-6 font-chivo font-bold mb-[6px]">Wade Warren</p>
					<p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
					<p class="text-text text-gray-500">
						Even factoring differences in body weight between children and adults into account.
					</p>
				</div>
				<div class="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-6">
					<img class="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]" src="./assets/images/avatar-2.png" alt="avatar" />
					<p class="text-heading-6 font-chivo font-bold mb-[6px]">Wade Warren</p>
					<p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
					<p class="text-text text-gray-500">
						Even factoring differences in body weight between children and adults into account.
					</p>
				</div>
				<div class="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-10">
					<img class="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]" src="./assets/images/avatar-3.png" alt="avatar" />
					<p class="text-heading-6 font-chivo font-bold mb-[6px]">Wade Warren</p>
					<p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
					<p class="text-text text-gray-500">
						Even factoring differences in body weight between children and adults into account.
					</p>
				</div>
				<div class="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-9">
					<img class="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]" src="./assets/images/avatar-4.png" alt="avatar" />
					<p class="text-heading-6 font-chivo font-bold mb-[6px]">Wade Warren</p>
					<p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
					<p class="text-text text-gray-500">
						Even factoring differences in body weight between children and adults into account.
					</p>
				</div>
				<div class="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-4">
					<img class="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]" src="./assets/images/avatar-5.png" alt="avatar" />
					<p class="text-heading-6 font-chivo font-bold mb-[6px]">Wade Warren</p>
					<p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
					<p class="text-text text-gray-500">
						Even factoring differences in body weight between children and adults into account.
					</p>
				</div>
				<div class="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-6">
					<img class="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]" src="./assets/images/avatar-6.png" alt="avatar" />
					<p class="text-heading-6 font-chivo font-bold mb-[6px]">Wade Warren</p>
					<p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
					<p class="text-text text-gray-500">
						Even factoring differences in body weight between children and adults into account.
					</p>
				</div>
				<div class="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-10">
					<img class="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]" src="./assets/images/avatar-7.png" alt="avatar" />
					<p class="text-heading-6 font-chivo font-bold mb-[6px]">Wade Warren</p>
					<p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
					<p class="text-text text-gray-500">
						Even factoring differences in body weight between children and adults into account.
					</p>
				</div>
				<div class="border p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-9">
					<img class="h-full w-full object-cover w-[55px] h-[55px] mb-[22px]" src="./assets/images/avatar-8.png" alt="avatar" />
					<p class="text-heading-6 font-chivo font-bold mb-[6px]">Wade Warren</p>
					<p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
					<p class="text-text text-gray-500">
						Even factoring differences in body weight between children and adults into account.
					</p>
				</div>
			</div>
		</div>

		<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
			<div class="items-center justify-between mb-[70px] md:mb-[90px] md:flex">
				<div>
					<h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">Latest News</h2>
					<p class="text-quote md:text-lead-lg text-gray-600">
						From Our blog and Event fanpage
					</p>
				</div>
				<button type="button"> <a class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] bg-black text-white w-fit" href="#"><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">View More</span><i> <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black" src="./assets/images/icons/icon-right.svg" alt="arrow right icon" /></i></a></button>
			</div>
			<div class="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">
				<a class="block group" href="/single.html">
					<div class="flex items-center mb-[11px]">
						<div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" /><span class="uppercase text-gray-500">company</span>
					</div>
					<p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]">We can blend colors multiple ways, the most common</p>
					<div class="relative mb-16">
						<div class="relative">
							<div class="pr-[26px] aspect-[430/275]"><img class="h-full w-full object-cover rounded-2xl z-10 relative object-cover" src="./assets/images/thumbnail-3.png" alt="Agon" />
							</div>
							<div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
								<div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-9 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" />
							</div>
						</div>
					</div></a><a class="block group" href="/single.html">
					<div class="flex items-center mb-[11px]">
						<div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" /><span class="uppercase text-gray-500">Marketing Event</span>
					</div>
					<p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]">How To Blow Through Capital At An Incredible Rate</p>
					<div class="relative mb-16">
						<div class="relative">
							<div class="pr-[26px] aspect-[430/275]"><img class="h-full w-full object-cover rounded-2xl z-10 relative object-cover" src="./assets/images/thumbnail-4.png" alt="Agon" />
							</div>
							<div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
								<div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-6 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" />
							</div>
						</div>
					</div></a><a class="block group" href="/single.html">
					<div class="flex items-center mb-[11px]">
						<div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" /><span class="uppercase text-gray-500">Customer Services</span>
					</div>
					<p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]">Design Studios That Everyone Should Know About?</p>
					<div class="relative mb-16">
						<div class="relative">
							<div class="pr-[26px] aspect-[430/275]"><img class="h-full w-full object-cover rounded-2xl z-10 relative object-cover" src="./assets/images/thumbnail-5.png" alt="Agon" />
							</div>
							<div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
								<div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-4 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" />
							</div>
						</div>
					</div></a>
			</div>
		</div>

		<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0 md:mt-[150px]">
			<div class="rounded-2xl p-[30px] md:px-[48px] gap-5 mx-auto bg-orange-100 px-[15px] py-[50px] md:flex md:py-[72px] lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px]">
				<div class="flex-1 mb-[30px]">
					<p class="text-capitalized uppercase text-gray-500 tracking-[2px] mb-[13px]">newsletter</p>
					<h4 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[20px]">Suscríbete a nuestro boletín</h4>
					<p class="text-text text-gray-500">
						Al hacer clic en el botón, estás de acuerdo con nuestro
					</p>
					<a class="text-green-900" href="file:///Users/julioga1011/Desktop/Agon_TailwindCss/HTML_Template/cceo-term-conditions.html">Aviso de privacidad</a>
					<form class="mt-[30px]" action="/">
						<div class="bg-white flex items-center justify-between p-3 rounded-[55px]">
							<input class="ml-[25px]" type="text" placeholder="Ingresa tu correo electrónico ..." />
							<button class="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px]" type="submit"> <img class="filter-white" src="./assets/images/icons/icon-right.svg" alt="" /></button>
						</div>
					</form>
				</div>
				<div class="relative flex-1">
					<img class="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0" src="./assets/images/thumbnail-2.png" alt="Agon" />
					<img class="h-full w-full object-cover absolute animate-float w-[225px] h-[170px] rounded-[14px] bottom-[-20px] left-[-10px]" src="./assets/images/chart.png" alt="Agon" />
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
</script>