<template>
	<i class="group">
		<img class="w-full absolute left-0 z-0 top-[90px] h-[750px] object-fill" src="@/assets/images/about-1-bg.jpg" alt="Agon" />
	</i>
	<div class="full-width banner-hero">
		<div class="px-[10px] md:px-[20px] xl:px-0 z-10 relative mx-auto py-[60px] !mt-0 max-w-[1320px] lg:flex lg:items-center">
			<div class="lg:w-[60%] lg:mr-[150px]">
				<span class="m-8 mt-0 font-chivo inline-block bg-indigo-400 text-slate-100 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[30px]">
					Tu aliado en tecnología.
				</span>
				<h1 class="text-gray-900 mt-0 m-8 font-chivo font-bold lg:text-display-2 md:text-[70px] md:leading-[88px] sm:text-[50px] sm:leading-[58px] text-[40px] mb-[40px]">
					Soluciones tecnológicas a la medida de tu negocio.
				</h1>
				<p class="m-8 text-quote md:text-lead-lg text-gray-600 pr-[40px] lg:pr-[60px] mb-[40px] md:text-[24px]">
					Ayudamos a startups, pequeñas empresas y grandes compañías a desarrollar productos de innovación digital.
				</p>
				<div class="mt-0 m-8 flex items-center justify-start mb-[50px]">
					<router-link
						:to="{ name: 'contact' }"
						class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[10px] lg:px-[32px] lg:py-[15px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-heading-6 tracking-wide mr-[22px]">
						<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Contactanos</span>
						<i class="group">
							<img class="ml-[7px] w-[12px] filter-white group-hover:filter-black group-hover:hidden" src="@/assets/images/icon-right.svg" alt="Icono de flecha a la izquierda" />
							<img class="ml-[7px] w-[12px] filter-white group-hover:filter-black hidden group-hover:block" src="@/assets/images/icon-right.svg" alt="Icono de flecha a la izquierda" />
						</i>
					</router-link>
				</div>
			</div>
			<div class="hidden relative lg:block">
				<img class="mb-10 animate-hero-thumb-sm-animation max-w-[512px] max-h-[670px]" src="@/assets/images/about.png" alt="Imagen del equipo de CCEO - Software Development" />
			</div>
		</div>
	</div>

	<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
		<!-- <div>
			<h1 class="text-[45px] mt-4 m-8 first-center justify-center font-monserrat">Ellos confian en nosotros</h1>
		</div> -->
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
				<img class="rounded-2xl mb-[30px] lg:mb-0 lg:flex-1" src="@/assets/images/about-2.png" alt="Imagen del equipo de CCEO-Software Development" />
			</div>
			<div class="flex-1 order-1">
				<h3 class="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">
					Conoce un poco de nosotros y nuestro modelo de negocios
				</h3>
				<p class="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
					CCEO es una empresa de desarrollo de software con sede en México. Fundada en 2015, la empresa cuenta
					con amplia experiencia en desarrollo de bases de datos y software a la medida utilizando una amplia
					gama de tecnologías.
				</p>
				<p class="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
					El motor de nuestra oferta de servicios es el enfoque en la automatización y la eficiencia
					empresarial. Si bien poseemos la capacidad de desarrollar prácticamente cualquier producto digital,
					nuestra especialización radica en optimizar el desempeño de los equipo y procesos.
					Este enfoque mejora las capacidades de los equipos y garantiza un flujo de trabajo más ágil y eficiente.
				</p>
				<div class="border border-indigo-900 border-dashed mb-[48px]" />
				<div class="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]">
					<div class="mb-[30px] lg:mb-0">
						<div class="flex items-center mb-[17px]">
							<img class="mr-[9px]" src="@/assets/images/icon-leaf.svg" alt="leaf icon" />
							<h4 class="text-heading-6 font-chivo font-bold">Enfoque ágil</h4>
						</div>
						<p class="text-excerpt text-gray-600">
							Nos basamos en la colaboración, comunicación, flexibilidad y adaptación.
						</p>
					</div>
					<div class="mb-[30px] lg:mb-0">
						<div class="flex items-center mb-[17px]">
							<img class="mr-[9px]" src="@/assets/images/icon-leaf.svg" alt="leaf icon" />
							<h4 class="text-heading-6 font-chivo font-bold">Personas apasionadas</h4>
						</div>
						<p class="text-excerpt text-gray-600">
							Todo el equipo esta comprometido y motivado con tu proyecto y los resultados.
						</p>
					</div>
					<div class="mb-[30px] lg:mb-0">
						<div class="flex items-center mb-[17px]">
							<img class="mr-[9px]" src="@/assets/images/icon-leaf.svg" alt="leaf icon" />
							<h4 class="text-heading-6 font-chivo font-bold">Innovación</h4>
						</div>
						<p class="text-excerpt text-gray-600">
							Siempre buscamos nuevas formas de mejorar y hacer crecer tu proyecto.
						</p>
					</div>
					<div class="mb-[30px] lg:mb-0">
						<div class="flex items-center mb-[17px]">
							<img class="mr-[9px]" src="@/assets/images/icon-leaf.svg" alt="leaf icon" />
							<h4 class="text-heading-6 font-chivo font-bold">Calidad primero</h4>
						</div>
						<p class="text-excerpt text-gray-600">
							Nos comprometemos con la mejora continua y a una estricta política de excelencia.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="full-width bg-indigo-200">
		<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex items-center mx-auto lg:mt-[150px] py-[96px] gap-[50px] max-w-[1320px]">
			<div class="hidden grid-cols-2 grid-rows-2 flex-1 gap-5 lg:grid">
				<div>
					<img class="h-full w-full object-cover rounded-2xl" src="@/assets/images/thumbnail-5.png" alt="Agon" />
				</div>
				<div class="col-start-1 row-start-2">
					<img class="h-full w-full object-cover rounded-2xl" src="@/assets/images/thumbnail-12.png" alt="Agon" />
				</div>
				<div class="col-start-2 row-span-2">
					<img class="h-full w-full object-cover rounded-2xl" src="@/assets/images/thumbnail-13.png" alt="Agon" />
				</div>
			</div>
			<div class="flex-1">
				<h1 class="font-extrabold font-chivo text-[30px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 text-indigo-800 mb-[26px]">
					Hemos ayudado a muchas empresas a crecer y logar sus metas.
				</h1>
				<p class="text-text mb-9 text-indigo-700">
					Conoce la solución que hemos desarrollado para nuestros clientes y ve la forma en como los hemos ayudado.
				</p>
				<router-link :to="{ name: 'successStories' }" class="items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-text w-fit">
					<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Ver casos de éxito</span> 
				</router-link>
			</div>
		</div>
	</div>
	<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[150px]">
		<div class="bg-opacity-50 rounded-full opacity-50 blur-2xl absolute -translate-x-4 max-w-full bg-[#F5E2C6] w-[562px] h-[562px] translate-y-1/3" />
		<div class="lg:grid lg:grid-cols-2 gap-[100px]">
			<div class="relative">
				<img class="h-full w-full object-cover mx-auto mb-[30px] lg:mb-0 lg:flex-1 max-w-[70%] rounded-lg" src="@/assets/images/thumbnail-12.png" alt="Agon" />
			</div>
			<div class="flex-1 lg:gap-[30px] xl:gap-[64px]">
				<h3 class="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">
					Nuestra razón de ser
				</h3>
				<p class="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
					Nos enfocamos en crear soluciones que ayuden a tu negocio pero siempre viendo hacia el futuro.
				</p>
				<div class="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]">
					<div class="mb-[30px] lg:mb-0">
						<h1 class="font-extrabold font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 text-indigo-700 mb-[14px]">
							Misión
						</h1>
						<p class="text-excerpt text-gray-600">
							Creemos que nuestro trabajo es más que entregar solo un proyecto. En cada paso del camino nos
							esforzamos por crear soluciones significativas para nuestros clientes y nuestras comunidades
							que les ayuden a desarrollar, mejorar y hacer exitosa su empresa mediante la creación de
							soluciones innovadores que reduzcan tiempo, dinero y esfuerzo.
						</p>
					</div>
					<div class="mb-[30px] lg:mb-0">
						<h1 class="font-extrabold font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 text-indigo-700 mb-[14px]">
							Visión
						</h1>
						<p class="text-excerpt text-gray-600">
							Para el año 2027 queremos convertirnos en el mejor aliado estratégico de las pymes a través
							de nuestras soluciones tecnológicas innovadoras, proveyendo desarrollos integrales para la
							mejora continua dentro de las organizaciones.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
</script>