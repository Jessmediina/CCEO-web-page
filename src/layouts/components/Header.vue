<template>
	<header :class="isScrolled ? 'bg-white fixed top-0 left-0 w-full shadow-md z-50' : 'relative'">
		<div class="xl:px-6 flex items-center justify-between mx-auto max-w-full w-full relative !mt-0">
			<router-link
				:to="{ name: 'index' }"
				class="flex">
				<img class="m-4 8logo z-50 w-[90px] md:w-[101px] lg:w-[122px] xl:w-[120px]" src="@/assets/images/logo.png" alt="Logotipo de CCEO - Software Development" />
			</router-link>
			<nav class="z-50 absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:block">
				<ul class="navbar flex flex-col justify-center font-chivo gap-[34px] lg:flex-row">
					<li class="flex items-center group">
						<router-link
							:to="{ name: 'index' }"
							class="hover:text-primary-0 text-base font-inter menu-link lg:text-heading-6 mr-[7px]">
							<span>Inicio</span>
						</router-link>
					</li>
					<li class="flex items-center group">
						<router-link
							:to="{ name: 'about' }"
							class="hover:text-primary-0 text-base font-inter menu-link lg:text-heading-6 mr-[7px]">
							<span>Nosotros</span>
						</router-link>
					</li>
					<li class="flex items-center group">
						<router-link
							:to="{ name: 'services' }"
							class="hover:text-primary-0 text-base font-inter menu-link lg:text-heading-6 mr-[7px]">
							<span> Servicios </span>
						</router-link>
					</li>
					<li class="flex items-center group">
						<router-link
							:to="{ name: 'products' }"
							class="hover:text-primary-0 text-base font-inter menu-link lg:text-heading-6 mr-[7px]">
							<span> Productos </span>
						</router-link>
					</li>
					<li class="flex items-center group">
						<router-link
							:to="{ name: 'industries' }"
							class="hover:text-primary-0 text-base font-inter menu-link lg:text-heading-6 mr-[7px]">
							<span> Industrias </span>
						</router-link>
					</li>
					<li class="flex items-center group">
						<router-link
							:to="{ name: 'contact' }"
							class="hover:text-primary-0 text-base font-inter menu-link lg:text-heading-6 mr-[7px]">
							<span> Contacto </span>
						</router-link>
					</li>
				</ul>
			</nav>
			<!-- boton de iniciar Sesion -->
			<div class="ml-auto">
				<button type="button" class="ml-auto me-4">
					<router-link
						:to="{ name: 'contact' }"
						class="m-4 me-4 flex items-center z-10 relative transition-all duration-200 group px-[10px] py-[12px] lg:px-[30px] lg:py-[15px] rounded-[50px] bg-primary-0 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-heading-6 tracking-wide mr-[22px]">
						<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
							Iniciar Sesion
						</span>
						<i class="group">
							<img class="ml-[7px] w-[12px] fill:primary-0" src="C:\Users\ximem\OneDrive\Documentos\Ximena Medina\Pagina_CCEO_Software_Develop\cceo-web-page\src\assets\images\icon-right-white.svg" alt="Icono de flecha a la izquierda white" />
						</i>
					</router-link>
				</button>
			</div>
		</div>

		<div class="burger-icon burger-icon-white menu__icon block lg:hidden" @click="clickMenu">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
		</div>

		<div v-if="open" class="fixed inset-0 bg-gray-900/80 z-0" />

		<transition
			enter-active-class="transition ease-out duration-100"
			enter-from-class="transform opacity-0 scale-95"
			enter-to-class="transform opacity-100 scale-100"
			leave-active-class="transition ease-in duration-75"
			leave-from-class="transform opacity-100 scale-100"
			leave-to-class="transform opacity-0 scale-95">
			<nav v-if="open" class="fixed top-0 right-0 bg-white flex flex-col h-screen nav-shadow overflow-y-scroll nav-mobile opacity-0 transition-all duration-200 w-[380px] z-50">
				<div class="p-[30px]">
					<ul class="font-chivo font-medium text-[16px] leading-[16px]">
						<li class="group menu-mobile-item py-[13px]">
							<router-link
								:to="{ name: 'index' }"
								class="flex items-center justify-between transition-all duration-200 hover:text-primary-0 hover:translate-x-[2px]">
								<span>Inicio</span>
							</router-link>
						</li>
						<li class="group menu-mobile-item py-[13px]">
							<router-link
								:to="{ name: 'about' }"
								class="flex items-center justify-between transition-all duration-200 hover:text-primary-0 hover:translate-x-[2px]">
								<span> Nosotros </span>
							</router-link>
						</li>
						<li class="group menu-mobile-item py-[13px]">
							<router-link
								:to="{ name: 'services' }"
								class="flex items-center justify-between transition-all duration-200 hover:text-primary-0 hover:translate-x-[2px]">
								<span> Servicios </span>
							</router-link>
						</li>
						<li class="group menu-mobile-item py-[13px]">
							<router-link
								:to="{ name: 'products' }"
								class="flex items-center justify-between transition-all duration-200 hover:text-primary-0 hover:translate-x-[2px]">
								<span> Productos </span>
							</router-link>
						</li>
						<li class="group menu-mobile-item py-[13px]">
							<router-link
								:to="{ name: 'industries' }"
								class="flex items-center justify-between transition-all duration-200 hover:text-primary-0 hover:translate-x-[2px]">
								<span> Industrias </span>
							</router-link>
						</li>
						<li class="group menu-mobile-item py-[13px]">
							<router-link
								:to="{ name: 'contact' }"
								class="flex items-center justify-between transition-all duration-200 hover:text-primary-0 hover:translate-x-[2px]">
								<span> Contacto </span>
							</router-link>
						</li>
						<li class="group menu-mobile-item py-[13px]">
							<router-link
								:to="{ name: 'contact' }"
								class="flex items-center justify-between transition-all duration-200 hover:text-primary-0 hover:translate-x-[2px]">
								<span> Iniciar Sesion </span>
							</router-link>
						</li>
					</ul>
					<div class="text-gray-400 font-chivo text-[13px]">
						Copyright 2023 © CCEO - Software Development 2023.<br />
					</div>
				</div>
			</nav>
		</transition>
	</header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const open = ref(false); //  menú móvil

const clickMenu = () => { 
  open.value = !open.value; 
};

const closeMenu = (event) => {
  if (!event.target.closest('.nav-mobile') && !event.target.closest('.menu__icon')) {
    open.value = false;
  }
};

//Scroll de la parte del header.

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("click", closeMenu);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("click", closeMenu);
});
</script>