<template>
	<div class="full-with address hidden">
		<div class="flex items-center px-3 justify-between gap-5 mx-auto max-w-[1320px] py-[10px] md:mx-8">
			<p class="text-base hidden font-bold md:block">Av de los Maestros 4623, Fracc. Olinda, Aguascalientes México</p>
			<div class="flex items-center contact ml-auto gap-[10px] md:gap-5 md:flex-row">
				<span>(+52) 449 624 5555</span>
				<div class="border border-dashed border-white self-stretch" />
				<span>contacto@cceo.com.mx</span>
			</div>
		</div>
	</div>
	<div class="wrapper mx-auto text-gray-900 font-normal max-w-[1320px] z-10">
		<Header />

		<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex flex-col justify-center items-center text-center lg:mt-[161px]">
			<div class="max-w-[565px] mb-[50px]">
				<img class="h-full w-full object-cover" src="src/assets/images/404.png" alt="Imagen de error 404" />
			</div>
			<h1 class="font-extrabold font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 mb-7">
				¡Ups! La página que estas buscando no se encuentra.
			</h1>
			<h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-gray-500 mb-[70px]">
				No se pudo encontrar la página que solicitaste, puede que haya sido movida o ya no se encuentre activa.
			</h4>
			<button type="button">
				<router-link
					:to="{ name: 'index' }"
					class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] flex-row-reverse" href="/">
					<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
						Regresar al inicio
					</span>
					<i class="group">
						<img class="mr-4 rotate-180 filter-white w-[12px] group-hover:hidden" src="src/assets/images/icon-right-white.svg" alt="Icono de flecha a la izquierda" />
						<img class="mr-4 rotate-180 filter-white w-[12px] hidden group-hover:block" src="src/assets/images/icon-right.svg" alt="Icono de flecha a la izquierda" />
					</i>
				</router-link>
			</button>
		</div>
		<Footer />
	</div>
</template>

<script setup>
    import Header from "@/layouts/components/Header.vue";
    import Footer from "@/layouts/components/Footer.vue";
</script>