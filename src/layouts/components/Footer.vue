<template>
	<footer class="mt-[92px] lg:mt-[150px] xl:mt-[200px] mb-[30px] px-[12px] md:px-[36px]">
		<div class="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
			<div class="flex flex-col items-center gap-2 mb-14 md:flex-row md:justify-between">
				<img class="h-full w-full object-cover max-w-[162px]" src="src/assets/images/logo.png" alt="Logotipo de CCEO - Software Development" />
				<div class="flex items-center flex-col gap-5 md:flex-row lg:gap-[30px]">
					<p class="text-heading-6 font-chivo font-bold">¿Listo para empezar?</p>
					<button type="button">
						<a class="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-white bg-gray-900 w-fit" href="#">
							<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
								Crear una cuenta
							</span>
						</a>
					</button>
				</div>
			</div>
			<div class="w-full bg-gray-200 h-[1px] mb-[52px]" />
			<div class="text-gray-600 grid gird-cols-1 gap-8 mb-[48px] md:grid-cols-2 lg:grid-cols-5 xl:gap-[98px]">
				<div class="col-span-2">
					<h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">Contacto</h5>
					<p class="text-text mb-5">
						Av. de los Maestros #4623, Fracc. Olinda, CP: 20200, Aguascalientes, México
					</p>
					<a class="text-text underline" href="tel:+52 (449) 624 5555">+52 (449) 624 5555</a> <br />
					<a class="text-text underline" href="mailto:contacto@cceo.com.mx">contacto@cceo.com.mx</a>
				</div>
				<div>
					<h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">Nosotros</h5>
					<ul>
						<li class="mb-2">
							<router-link
								:to="{ name: 'index' }"
								class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]">
								<span>Inicio</span>
							</router-link>
						</li>
						<li class="mb-2">
							<router-link
								:to="{ name: 'about' }"
								class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]">
								<span>Nosotros</span>
							</router-link>
						</li>
						<li class="mb-2">
							<router-link
								:to="{ name: 'services' }"
								class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]">
								<span>Servicios</span>
							</router-link>
						</li>
						<li class="mb-2">
							<router-link
								:to="{ name: 'products' }"
								class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]">
								<span>Productos</span>
							</router-link>
						</li>
						<li class="mb-2">
							<router-link
								:to="{ name: 'industries' }"
								class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]">
								<span>Industrias</span>
							</router-link>
						</li>
						<li class="mb-2">
							<router-link
								:to="{ name: 'contact' }"
								class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]">
								<span>Contacto</span>
							</router-link>
						</li>
					</ul>
				</div>
				<div>
					<h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">Enlaces importantes</h5>
					<ul>
						<li class="mb-2">
							<router-link
								:to="{ name: 'careers' }"
								class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]">
								<span>Carreras</span>
							</router-link>
						</li>
						<li class="mb-2">
							<router-link
								:to="{ name: 'termsAndConditions' }"
								class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]">
								<span>Terminos y Condiciones</span>
							</router-link>
						</li>
						<li class="mb-2">
							<router-link
								:to="{ name: 'noticeOfPrivacy' }"
								class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]">
								<span>Aviso de privacidad</span>
							</router-link>
						</li>
					</ul>
				</div>
				<div>
					<h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">Soporte</h5>
					<ul>
						<li class="mb-2">
							<router-link
								:to="{ name: 'customerSupport' }"
								class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]">
								<span>Soporte a clientes</span>
							</router-link>
						</li>
						<li class="mb-2">
							<router-link
								:to="{ name: 'contact' }"
								class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]">
								<span>Contacto</span>
							</router-link>
						</li>
						<li class="mb-2">
							<router-link
								:to="{ name: 'frequentQuestions' }"
								class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]">
								<span>Preguntas Frecuentes</span>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class="w-full bg-gray-200 h-[1px] mb-[46px]" />
			<div class="text-gray-400 lg:flex lg:items-center lg:justify-between">
				<div class="md:flex md:items-center md:gap-6">
					<p class="text-lead font-bold">CCEO - Software Development 2023</p>
				</div>
				<div class="flex items-center justify-center gap-5 mt-5 lg:mt-0">
					<a class="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" target="_blank" href="https://www.facebook.com/cceosoftware">
						<img class="h-full w-full object-cover" src="src/assets/images/icon-facebook.svg" alt="Icono de Facebook" />
					</a>
					<a class="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" target="_blank" href="https://www.instagram.com/cceosoftware">
						<img class="h-full w-full object-cover" src="src/assets/images/icon-instagram.svg" alt="Icono de Instagram" />
					</a>
					<a class="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" target="_blank" href="https://www.linkedin.com/company/cceo-software-development">
						<img class="h-full w-full object-cover" src="src/assets/images/icon-linkedin.svg" alt="Icono de Linkedin" />
					</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
</script>