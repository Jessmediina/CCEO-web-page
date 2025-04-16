<template>
	<div>
		<div class="full-width banner-hero bg-sky-100 banner-1">
			<div class="px-[12px] md:px-[36px] xl:px-0 z-10 relative mx-auto mt-0 py-[60px] max-w-[1320px] lg:flex lg:items-center bg-center">
				<div class="flex-1 rigth-center">
					<h1 class="text-gray-900 font-chivo font-bold lg:text-display-2 md:text-[70px] md:leading-[80px] sm:text-[40px] sm:leading-[58px] text-[40px] mb-[40px] px-8">
						Empresa líder en consultoría y desarrollo de software
					</h1>
					<p class="text-quote md:text-lead-lg text-gray-600 pr-[20px] lg:pr-[30px] mb-[20px] md:text-[24px] px-8 mt-2">
						Te brindamos las herramientas para que puedas hacer crecer tu empresa y mejores los procesos actuales.
					</p>
					<div class="flex items-center justify-start px-8">
						<button type="button">
							<router-link
								:to="{ name: 'successStories' }"
								class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[20px] lg:px-[32px] lg:py-[15px] rounded-[50px] bg-white text-primary-0 hover:bg-primary-0 hover:text-white hover:-translate-y-[2px] text-heading-6 tracking-wide mr-[22px]">
								<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Casos de Éxito</span>
								<i class="group">
									<img class="ml-[7px] w-[19px]" src="C:\Users\ximem\OneDrive\Documentos\Ximena Medina\Pagina_CCEO_Software_Develop\cceo-web-page\src\assets\images\Arrow _right_blue.svg" alt="Icono de flecha a la izquierda" />
								</i>
							</router-link>
						</button>
						<button type="button">
							<router-link
								:to="{ name: 'contact' }"
								class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[20px] lg:px-[32px] lg:py-[15px] rounded-[50px] text-gray-900 hover:text-black border border-gray-900 hover:bg-white focus:outline-none hover:-translate-y-[2px] text-heading-6 tracking-wide mr-[22px] font-medium">
								Contacto
								<i>
									<img class="ml-[7px] w-[12px]" src="@/assets/images/icon-right.svg" alt="Icono de flecha a la izquierda" />
								</i>
							</router-link>
						</button>
					</div>
				</div>
				<div class="hidden relative flex-1 h-auto self-stretch lg:block">
					<div class="absolute w-full left-48 animate-hero-thumb-sm-animation bottom-[-18px] max-w-[400px]">
						<img class="h-50 w-50 object-cover" src="@/assets/images/hero2.png" alt="Imagen publicitaria del equipo de CCEO" />
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

		<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[100px]">
			<div class="lg:grid lg:grid-cols-2 lg:gap-[30px] xl:gap-[95px]">
				<div class="relative">
					<img class="rounded-2xl mb-[30px] lg:mb-0 lg:flex-1" src="C:\Users\ximem\OneDrive\Documentos\Ximena Medina\Pagina_CCEO_Software_Develop\cceo-web-page\src\assets\images\thumbnail-13.png" alt="Agon" />
				</div>
				<div class="flex-1 order-1">
					<h3 class="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">
						Nuestro modelo de negocios.
					</h3>
					<p class="text-quote md:text-lead-lg text-gray-600 mb-[10px]">
						Ayudamos a startups, pequeñas empresas y grandes compañias a desarrollaor productos de innovación digital.
					</p>
					<p class="text-quote md:text-lead-lg text-gray-600 mb-[10px]">
						La innovación y tecnología son los elementos centrales para incrementar la competitividad de tu empresa e incursionar en nuevos mercados.
					</p>
					<p class="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
						Nuestro proceso de desarrollo evoluciona con los años. Hemos creado acciones que permiten generar más valor en los productos y reducir tiempos.
					</p>
					<div class="border border-gray-900 border-dashed mb-[48px]" />
					<div class="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]">
						<div class="mb-[30px] lg:mb-0">
							<div class="flex items-center mb-[17px]">
								<img class="mr-[9px]" src="C:\Users\ximem\OneDrive\Documentos\Ximena Medina\Pagina_CCEO_Software_Develop\cceo-web-page\src\assets\images\icon-leaf.svg" alt="leaf icon" />
								<h4 class="text-heading-6 font-chivo font-bold">Mision</h4>
							</div>
							<p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p>
						</div>
						<div class="mb-[30px] lg:mb-0">
							<div class="flex items-center mb-[17px]">
								<img class="mr-[9px]" src="C:\Users\ximem\OneDrive\Documentos\Ximena Medina\Pagina_CCEO_Software_Develop\cceo-web-page\src\assets\images\icon-leaf.svg" alt="leaf icon" />
								<h4 class="text-heading-6 font-chivo font-bold">Vision</h4>
							</div>
							<p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="full-width bg-pink-100 mt-20">
			<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex flex-col gap-6 mx-auto py-[98px] lg:flex-row max-w-[1320px]">
				<div class="flex-[1.36] mr-[90px]">
					<h4 class="font-chivo font-bold lg:text-display-2 md:text-[50px] md:leading-[70px] sm:text-[40px] sm:leading-[58px] text-[40px] mb-[40px] px-10">
						Conoce un poco de lo que opinan nuestros clientes.
					</h4>
					<p class="text-text text-gray-500 px-10 text-lg mb-[55px]">
						Estamos orgullosos de cada proyecto y servicio en los que hemos participado.
					</p>
					<button type="button">
						<router-link :to="{ name: 'successStories' }" class="m-8 flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] text-gray-900 bg-white w-fit">
							<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
								Ver casos de éxito
							</span>
							<i><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white" src="@/assets/images/icon-right.svg" alt="arrow right icon" /></i>
						</router-link>
					</button>
				</div>
				<div class="flex flex-col gap-8 flex-1">
					<div class="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px]">
						<p class="text-text mb-[15px]">
							&quot;No matter where you go, It's is the coolest, most happening thing around! Not able to tell you how happy I am with it.&quot;
						</p>
						<div class="flex items-center gap-6">
							<img class="h-full w-full object-cover rounded-full max-w-[80px]" src="C:\Users\ximem\OneDrive\Documentos\Ximena Medina\Pagina_CCEO_Software_Develop\cceo-web-page\src\assets\images\avatar-1.png" alt="avatar" />
							<div>
								<p class="text-lead line-clamp-2 font-bold mb-[3px]">
									Alejandro Medina
								</p>
								<p class="text-md text-gray-500">CEO en eManaGym</p>
							</div>
						</div>
					</div>
					<div class="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px]">
						<p class="text-text mb-[15px]">
							&quot;No matter where you go, It's is the coolest, most happening thing around! Not able to tell you how happy I am with it.&quot;
						</p>
						<div class="flex items-center gap-6">
							<img class="h-full w-full object-cover rounded-full max-w-[80px]" src="C:\Users\ximem\OneDrive\Documentos\Ximena Medina\Pagina_CCEO_Software_Develop\cceo-web-page\src\assets\images\avatar-2.png" alt="avatar" />
							<div>
								<p class="text-lead line-clamp-2 font-bold mb-[3px]">
									Miguel Medina
								</p>
								<p class="text-md text-gray-500">CEO en Alaman</p>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-8 flex-1">
					<div class="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px]">
						<p class="text-text mb-[15px]">
							&quot;Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business. Needless to say we are extremely satisfied with the results. &quot;
						</p>
						<div class="flex items-center gap-6">
							<img class="h-full w-full object-cover rounded-full max-w-[80px]" src="C:\Users\ximem\OneDrive\Documentos\Ximena Medina\Pagina_CCEO_Software_Develop\cceo-web-page\src\assets\images\avatar-4.png" alt="avatar" />
							<div>
								<p class="text-lead line-clamp-2 font-bold mb-[3px]">
									Barbara Mendoza
								</p>
								<p class="text-md text-gray-500">CEO en Plerk</p>
							</div>
						</div>
					</div>
					<div class="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px]">
						<p class="text-text mb-[15px]">
							&quot;It's is both attractive and highly adaptable. It's exactly what I've been looking for. Definitely worth the investment.&quot;
						</p>
						<div class="flex items-center gap-6">
							<img class="h-full w-full object-cover rounded-full max-w-[80px]" src="C:\Users\ximem\OneDrive\Documentos\Ximena Medina\Pagina_CCEO_Software_Develop\cceo-web-page\src\assets\images\avatar-3.png" alt="avatar" />
							<div>
								<p class="text-lead line-clamp-2 font-bold mb-[3px]">
									Eduardo Barba
								</p>
								<p class="text-md text-gray-500">CEO en Fumisan</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
			<div class="text-center">
				<h2 class="font-bold font-chivo mx-auto text-[40px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
					Conoce como te podemos dar valor
				</h2>
				<p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px] text-lg">
					Te brindamos soluciones a la medida en diferentes areas que te ayudaran a crecer y simplificar tu trabajo de dia a dia.
				</p>
			</div>
			<div class="flex items-center gap-5 justify-center flex-wrap mx-auto w-full mt-[90px] sm:w-[80%] xl:w-full mb-[58px]">
				<p id="branding" class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[30px] lg:py-[22px] hover:bg-transparent hover:text-primary-0 border-[2px] hover:border-primary-0 hover:translate-y-[-2px]">Branding</p>
				<p id="development" class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[30px] lg:py-[22px] hover:bg-transparent hover:text-primary-0 border-[2px] hover:border-primary-0 hover:translate-y-[-2px]">Development</p>
				<p id="animation" class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[30px] lg:py-[22px] hover:bg-transparent hover:text-primary-0 border-[2px] hover:border-primary-0 hover:translate-y-[-2px]">Animation</p>
				<p id="user-exp" class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[30px] lg:py-[22px] hover:bg-transparent hover:text-primary-0 border-[2px] hover:border-primary-0 hover:translate-y-[-2px]">User Experience</p>
				<p id="social-network" class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[30px] lg:py-[22px] hover:bg-transparent hover:text-primary-0 border-[2px] hover:border-primary-0 hover:translate-y-[-2px]">Social Network</p>
				<p id="marketing" class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[30px] lg:py-[22px] hover:bg-transparent hover:text-primary-0 border-[2px] hover:border-primary-0 hover:translate-y-[-2px]">Marketing</p>
			</div>
			<div class="bg-slate-200 tab-content lg:gap-[20px] lg:flex bg-bg-4 branding m-10">
				<div class="p-5 md:p-[80px] lg:w-1/2">
					<h2 class="font-bold font-chivo text-[35px] leading-[35px] md:text-heading-2 mb-[30px]">
						Desarrollo de Software a la medida
					</h2>
					<p class="text-excerpt mb-[40px]">Somos un equipo apasionado por la tecnologia y la innovación. En CCEO - Software Development, desarrollamos soluciones de software a medida que optimizan procesos, mejoran la productividad y llevan a nuestros clientes al siguiente nivel. Creemos en la creatividad, en la eficiencia y la experiencia tecnica para hacer realidad tus ideas.</p>
					<button type="button">
						<router-link
							:to="{ name: '' }"
							class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[20px] lg:px-[32px] lg:py-[15px] rounded-[50px] bg-white text-black hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-heading-6 tracking-wide mr-[22px]">
							<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Leer mas</span>
							<i class="group">
								<img class="ml-[7px] w-[12px] fill:primary-0" src="@/assets/images/icon-right.svg" alt="Icono de flecha a la izquierda" />
							</i>
						</router-link>
					</button>
				</div>
				<div class="relative lg:w-1/2">
					<img class="h-full w-full object-cover" src="C:\Users\ximem\OneDrive\Documentos\Ximena Medina\Pagina_CCEO_Software_Develop\cceo-web-page\src\assets\images\thumbnail-5.png" alt="Agon" />
					<button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0"><img src="C:\Users\ximem\OneDrive\Documentos\Ximena Medina\Pagina_CCEO_Software_Develop\cceo-web-page\src\assets\images\icon-play.svg" alt="play button" width="30" /></button>
				</div>
			</div>
		</div>

		<div class="full-width banner-hero banner-1 bg-purple-100 mt-20">
			<div class="flex items-center justify-between p-5 md:p-[80px] lg:w-full">
				<div class="flex-[1.36] mr-[50px] m-8"> 
					<h2 class="font-chivo font-bold lg:text-display-2 md:text-[50px] md:leading-[65px] sm:text-[30px] sm:leading-[50px] text-[30px] mb-[20px] mt-0 m-5">
						Contamos con un proceso que te genera valor
					</h2>
					<p class=" text-gray-700 text-left md:text-lead-lg md:text-[18px] mt-4 m-5">
						Sabemos que tu negocio es unico, es por eso que trabajamos en un proceso efectivo de 5 etapas para poder resolver tus necesidades a traves de la tecnologia.
					</p>
					<div class="flex items-center gap-6">
						<img class="mt-0 m-5 me-4 h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]" src="C:\Users\ximem\OneDrive\Documentos\Ximena Medina\Pagina_CCEO_Software_Develop\cceo-web-page\src\assets\images\brainstorming_4841228.png" alt="icon"/>
						<div>
							<p class="text-lead line-clamp-2 font-bold mb-[3px] text-lg">
								Proceso estandarizado.
							</p>
						</div>
					</div>
					<p class="px-8 m-10 mt-0 text-wrap text-md text-left text-gray-700">Aliquam one make creepeth, man bearing theira firmament. Subscribe our newsletter to get gift.</p>
					<div class="flex items-center gap-6">
						<img class="mt-0 m-8 me-4 h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]" src="C:\Users\ximem\OneDrive\Documentos\Ximena Medina\Pagina_CCEO_Software_Develop\cceo-web-page\src\assets\images\delivery_11635407.png" alt="icon"/>
						<div>
							<p class="text-lead line-clamp-2 font-bold mb-[4px] text-lg">
								Personal calificado.
							</p>
						</div>
					</div>
					<p class="px-8 m-10 mt-0 text-md text-left text-gray-700">Aliquam one make creepeth, man bearing theira firmament. Subscribe our newsletter to get gift.</p>
					<button type="button">
						<router-link
							:to="{ name: '' }"
							class="mt-0 m-16 me-4absolute flex items-center z-10 transition-all duration-200 group px-[22px] py-[20px] lg:px-[32px] lg:py-[15px] rounded-[50px] bg-white text-black hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-heading-6 tracking-wide mr-[22px]">
							<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold ">
								Leer mas
							</span>
							<i class="group">
								<img class="ml-[7px] w-[12px]" src="@/assets/images/icon-right.svg" alt="Icono de flecha a la izquierda" />
							</i>
						</router-link>
					</button>
				</div>
				<div class="lg:w-1/2 flex justify-center bg-center">
					<div class="relative animate-hero-thumb-sm-animation max-w-[400px] container">
						<img class="h-50 w-full max-w-96 object-cover" src="C:\Users\ximem\OneDrive\Documentos\Ximena Medina\Pagina_CCEO_Software_Develop\cceo-web-page\src\assets\images\avatar-valor.png" alt="Imagen valor" /> 
					</div>
				</div>
			</div>
		</div>

		<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[100px]">
			<div class="text-center mb-[70px]">
				<h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
					Conoce mas sobre las soluciones que podemos ofrecerte
				</h2>
				<p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[970px] text-balance md:text-[zy]">
					Interactively transform magnetic growth strategies whereas prospective &quot;outside the box&quot; thinking.
				</p>
			</div>
			<div class="lg:flex lg:gap-5 xl:gap-[30px]">
				<div class="rounded-2xl p-[30px] md:py-[64px] md:px-[64px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-5 hover:translate-y-[-2px] bg-gray-200">
					<div>
						<img class="object-cover mb-[30px] max-w-[80px] max-h-[80px]" src="C:\Users\ximem\OneDrive\Documentos\Ximena Medina\Pagina_CCEO_Software_Develop\cceo-web-page\src\assets\images\ERP.png" alt="icon" />
						<h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px] ">
							ERP
						</h2>
						<p class="text-excerpt text-gray-800 mb-[30px]">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
					</div>
					<button type="button">
						<router-link
							:to="{ name: '' }"
							class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[20px] lg:px-[32px] lg:py-[15px] rounded-[50px] bg-white text-black hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-heading-6 tracking-wide mr-[22px]">
							<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Leer mas</span>
							<i class="group">
								<img class="ml-[7px] w-[12px] fill:primary-0" src="@/assets/images/icon-right.svg" alt="Icono de flecha a la izquierda" />
							</i>
						</router-link>
					</button>
				</div>
				<div class="rounded-2xl p-[30px] md:py-[64px] md:px-[64px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-9 hover:translate-y-[-2px] bg-blue-100">
					<div>
						<img class=" object-cover mb-[30px] max-w-[80px] max-h-[80px]" src="C:\Users\ximem\OneDrive\Documentos\Ximena Medina\Pagina_CCEO_Software_Develop\cceo-web-page\src\assets\images\CRM.png" alt="icon" />
						<h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
							CRM
						</h2>
						<p class="text-excerpt text-gray-800 mb-[30px]">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
					</div>
					<button type="button">
						<router-link
							:to="{ name: '' }"
							class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[20px] lg:px-[32px] lg:py-[15px] rounded-[50px] bg-white text-black hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-heading-6 tracking-wide mr-[22px]">
							<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Leer mas</span>
							<i class="group">
								<img class="ml-[7px] w-[12px] fill:primary-0" src="@/assets/images/icon-right.svg" alt="Icono de flecha a la izquierda" />
							</i>
						</router-link>
					</button>
				</div>
				<div class="rounded-2xl p-[30px] md:py-[64px] md:px-[64px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-2 hover:translate-y-[-2px] bg-pink-100">
					<div>
						<img class=" object-cover mb-[30px] max-w-[80px] max-h-[80px]" src="C:\Users\ximem\OneDrive\Documentos\Ximena Medina\Pagina_CCEO_Software_Develop\cceo-web-page\src\assets\images\Puntos de  venta.png" alt="icon" />
						<h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
							Puntos de venta
						</h2>
						<p class="text-excerpt text-gray-800 mb-[30px]">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
					</div>
					<button type="button">
						<router-link
							:to="{ name: '' }"
							class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[20px] lg:px-[32px] lg:py-[15px] rounded-[50px] bg-white text-black hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-heading-6 tracking-wide mr-[22px]">
							<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Leer mas</span>
							<i class="group">
								<img class="ml-[7px] w-[12px] fill:primary-0" src="@/assets/images/icon-right.svg" alt="Icono de flecha a la izquierda" />
							</i>
						</router-link>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
</script>
