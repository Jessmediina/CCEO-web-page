<template>
	<div>
		<div class="full-width bg-amber-100">
			<div class="text-center px-5 pt-[74px] pb-[90px]">
				<h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[22px]">
					Contacto
				</h2>
				<p class="text-text text-gray-500 mx-auto md:w-[49ch]">
					¿Tienes alguna pregunta o necesitas más información sobre nuestros servicios? No dudes en ponerte
					en contacto con nosotros.
				</p>
			</div>
		</div>

		<div class="bg-gray-100 relative p-[40px] md:pt-[91px] md:pr-[98px] md:pb-[86px] md:pl-[92px] mt-[150px] rounded-[58px]">
			<div class="mx-auto relative max-w-[1320px]">
				<img class="absolute right-0 max-w-[129px] top-[-50px]" src="@/assets/images/mail.png" alt="Imagen de sobre de contacto" />
				<p class="text-capitalized text-gray-500 uppercase tracking-[2px] mb-[15px]">Contactanos</p>
				<h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[22px]">
					¿Tienes un proyecto en mente?
				</h2>
				<p class="text-text text-gray-600 mb-[30px] md:mb-[60px]">
					La acción correcta en el momento adecuado puede ayudarte a crecer.
				</p>
				<div class="flex flex-col gap-8 mb-[15px] md:mb-[25px] lg:flex-row lg:gap-[50px] xl:gap-[98px]">
					<div>
						<div class="flex gap-[13px] mb-[15px] md:mb-[25px]">
							<i>
								<img src="@/assets/images/icon-home-fill.svg" alt="Icono de casa" />
							</i>
							<p class="text-heading-6 font-bold font-chivo">CCEO - Software Development</p>
						</div>
						<p class="text-text text-gray-600">
							Av. de los Maestros #4623
						</p>
						<p class="text-text text-gray-600">
							Fracc. Olinda, CP: 20298
						</p>
						<p class="text-text text-gray-600 mb-[10px] md:mb-[16px]">
							Aguascalientes, México
						</p>
						<a href="tel:+52 (449) 624 5555" class="text-text text-gray-600 underline">
							+52 (449) 624 5555
						</a>
						<br />
						<a class="text-text text-gray-600 underline" href="mailto:contacto@cceo.com.mx">
							contacto@cceo.com.mx
						</a>
					</div>
					<form class="flex-1" action="/">
						<div class="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
							<input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Ingresa tu nombre" />
							<input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Empresa (opcional)" />
						</div>
						<div class="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
							<input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Ingresa tu correo electrónico" />
							<input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Ingresa tu número de teléfono" />
						</div>
						<textarea class="w-full py-5 resize-none outline-0 px-[30px] max-h-[150px] mb-[35px] md:mb-[56px]" name="" cols="100" rows="10" placeholder="Cuentanos sobre tu proyecto" />
						<div class="flex flex-col gap-5">
							<button class="flex items-center transition-colors duration-200 px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] font-chivo font-semibold text-md md:text-lg text-white bg-gray-900 w-fit" type="submit">
								Enviar mensaje<i> <img class="ml-[7px] w-[12px] filter-white" src="@/assets/images/icon-right-white.svg" alt="Icono de flecha a la derecha" /></i>
							</button>
							<p class="text-md text-gray-500">
								Al hacer clic en el botón aceptas nuestro
								<router-link
									:to="{ name: 'noticeOfPrivacy' }"
									class="underline">
									Aviso de Privacidad
								</router-link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>