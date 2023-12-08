<template>
	<header class="h-auto full-width relative py-[15px] first-letter:lg:py-[26px]">
		<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex items-center justify-between mx-auto relative !mt-0 max-w-[1320px]">
			<router-link
				:to="{ name: 'index' }"
				class="flex">
				<img class="logo z-50 w-[90px] md:w-[101px] lg:w-[122px] xl:w-[138px]" src="src/assets/images/logo.png" alt="Logotipo de CCEO - Software Development" />
			</router-link>
			<nav class="z-50 absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:block">
				<ul class="navbar flex flex-col justify-center font-chivo gap-[34px] lg:flex-row">
					<li class="flex items-center group">
						<router-link
							:to="{ name: 'index' }"
							class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]">
							<span>Inicio</span>
						</router-link>
					</li>
					<li class="flex items-center group">
						<router-link
							:to="{ name: 'about' }"
							class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]">
							<span>Nosotros</span>
						</router-link>
					</li>
					<li class="flex items-center group">
						<router-link
							:to="{ name: 'services' }"
							class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]">
							<span>Servicios</span>
						</router-link>
					</li>
					<li class="flex items-center group">
						<router-link
							:to="{ name: 'products' }"
							class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]">
							<span>Productos</span>
						</router-link>
					</li>
					<li class="group menu-mobile-item py-[13px]">
						<router-link
							:to="{ name: 'industries' }"
							class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
							<span>Industrias</span>
						</router-link>
					</li>
					<li class="flex items-center group">
						<router-link
							:to="{ name: 'contact' }"
							class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]">
							<span>Contacto</span>
						</router-link>
					</li>
				</ul>
			</nav>
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
								class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
								<span>Inicio</span>
							</router-link>
						</li>
						<li class="group menu-mobile-item py-[13px]">
							<router-link
								:to="{ name: 'about' }"
								class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
								<span>Nosotros</span>
							</router-link>
						</li>
						<li class="group menu-mobile-item py-[13px]">
							<router-link
								:to="{ name: 'services' }"
								class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
								<span>Servicios</span>
							</router-link>
						</li>
						<li class="group menu-mobile-item py-[13px]">
							<router-link
								:to="{ name: 'products' }"
								class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
								<span>Productos</span>
							</router-link>
						</li>
						<li class="group menu-mobile-item py-[13px]">
							<router-link
								:to="{ name: 'industries' }"
								class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
								<span>Industrias</span>
							</router-link>
						</li>
						<li class="group menu-mobile-item py-[13px]">
							<router-link
								:to="{ name: 'contact' }"
								class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
								<span>Contacto</span>
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
    import { ref } from 'vue';
    const open = ref(false);

    const clickMenu = () =>{
        open.value = !open.value;
    }
</script>