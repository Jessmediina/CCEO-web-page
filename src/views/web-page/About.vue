<template>
	<img class="w-full absolute top-0 left-0 z-0 top-[112px] h-[750px] object-fill" src="@/assets/images/about-1-bg.jpg" alt="Agon" />
	<div class="full-width banner-hero ">
		<div class="px-[12px] md:px-[36px] xl:px-0 z-10 relative mx-auto py-[60px] !mt-0 max-w-[1320px] lg:flex lg:items-center">
			<div class="lg:w-[60%] lg:mr-[150px]">
				<span class="font-chivo inline-block bg-indigo-400 text-slate-100 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[29px]">
					Tu aliado en tecnología
				</span>
				<h1 class="font-chivo font-bold lg:text-display-2 md:text-[80px] md:leading-[88px] sm:text-[50px] sm:leading-[58px] text-[40px] mb-[40px]">
					Creando soluciones para tus ideas
				</h1>
				<p class="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[40px] md:text-[24px]">
					Ayudamos a startups, pequeñas empresas y grandes compañías a desarrollar productos de innovación digital
				</p>
				<div class="flex items-center justify-start mb-[50px]">
					<router-link
						:to="{ name: 'contact' }"
						class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-heading-6 tracking-wide mr-[22px]">
						<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Contactanos</span>
						<i class="group">
							<img class="ml-[7px] w-[12px] filter-white group-hover:filter-black group-hover:hidden" src="@/assets/images/icon-right-white.svg" alt="Icono de flecha a la izquierda" />
							<img class="ml-[7px] w-[12px] filter-white group-hover:filter-black hidden group-hover:block" src="@/assets/images/icon-right.svg" alt="Icono de flecha a la izquierda" />
						</i>
					</router-link>
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
			<div class="hidden relative lg:block">
				<img class="animate-hero-thumb-sm-animation max-w-[512px] max-h-[689px]" src="@/assets/images/about.png" alt="Imagen del equipo de CCEO - Software Development" />
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
				<div class="border border-green-900 border-dashed mb-[48px]" />
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
	<div class="full-width bg-green-200">
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
				<h1 class="font-extrabold font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 text-green-900 mb-[26px]">
					Hemos ayudado a muchas empresas a crecer y logar sus metas.
				</h1>
				<p class="text-text mb-9 text-green-700">
					Conoce la solución que hemos desarrollado para nuestros clientes y ve la forma en como los hemos ayudado.
				</p>
				<router-link :to="{ name: 'successStories' }" class="items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-text w-fit">
					<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Ver casos de éxito</span>
				</router-link>
			</div>
		</div>
	</div>
	<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[150px]">
		<div class="bg-opacity-50 rounded-full opacity-50 blur-2xl absolute -translate-x-4 max-w-full bg-[#F5E2C6] w-[562px] h-[562px] translate-y-1/3" />
		<div class="lg:grid lg:grid-cols-2 gap-[100px]">
			<div class="relative">
				<img class="h-full w-full object-cover mx-auto mb-[30px] lg:mb-0 lg:flex-1 max-w-[70%]" src="@/assets/images/thumbnail-15.png" alt="Agon" />
				<img class="absolute shadow-3 rounded-2xl top-14 animate-float w-1/2" src="@/assets/images/artboard1.png" alt="chart image" />
				<img class="absolute shadow-3 rounded-2xl right-0 animate-float -bottom-10 w-1/3" src="@/assets/images/artboard2.png" alt="chart image" />
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
						<h1 class="font-extrabold font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 text-green-900 mb-[14px]">
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
						<h1 class="font-extrabold font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 text-green-900 mb-[14px]">
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
	<div class="full-width bg-yellow-100">
		<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex flex-col gap-6 mx-auto py-[98px] lg:flex-row max-w-[1320px]">
			<div class="flex-[1.36] mr-[90px]">
				<span class="font-chivo inline-block bg-yellow-400 text-gray-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[36px]">
					Los testimonios de nuestros clientes
				</span>
				<h1 class="font-extrabold font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 mb-[25px]">
					Conoce un poco más sobre lo que piensan nuestros clientes.
				</h1>
				<p class="text-quote md:text-lead-lg text-gray-600 mb-[55px]">
					Estamos orgullosos de cada proyecto y servicio en los que hemos participado.
				</p>
				<button type="button">
					<router-link :to="{ name: 'successStories' }" class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] text-gray-900 bg-white w-fit">
						<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Ver casos de éxito</span>
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
						<img class="h-full w-full object-cover rounded-full max-w-[80px]" src="./assets/images/avatar-9.png" alt="avatar" />
						<div>
							<p class="text-lead line-clamp-2 font-bold mb-[3px]">
								Iago Tourón
							</p>
							<p class="text-md text-gray-500">CEO en eManaGym</p>
						</div>
					</div>
				</div>
				<div class="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px]">
					<p class="text-text mb-[15px]">
						&quot;Wow what great service, I love it! It's is the most valuable business resource we have EVER purchased. We can't understand how we've been living without it. I couldn't have asked for more than this.&quot;
					</p>
					<div class="flex items-center gap-6">
						<img class="h-full w-full object-cover rounded-full max-w-[80px]" src="./assets/images/avatar-10.png" alt="avatar" />
						<div>
							<p class="text-lead line-clamp-2 font-bold mb-[3px]">
								Rigoberto Espinoza
							</p>
							<p class="text-md text-gray-500">Biffco Enterprises Ltd.</p>
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
						<img class="h-full w-full object-cover rounded-full max-w-[80px]" src="./assets/images/avatar-11.png" alt="avatar" />
						<div>
							<p class="text-lead line-clamp-2 font-bold mb-[3px]">
								Miguel Medina
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
						<img class="h-full w-full object-cover rounded-full max-w-[80px]" src="./assets/images/avatar-12.png" alt="avatar" />
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
</template>

<script setup>
</script>