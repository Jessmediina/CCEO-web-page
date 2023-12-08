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

		<router-view />

		<Footer />
	</div>
</template>

<script setup>
    import Header from "@/layouts/components/Header.vue";
    import Footer from "@/layouts/components/Footer.vue";
</script>