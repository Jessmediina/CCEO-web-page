<template>
	<div class="w-full">

		<section class="py-24 bg-gradient-to-r from-gray-50 to-gray-100">
			<div class="container mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
				<div>
					<h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
						Soluciones de Software a tu medida<br />
					</h1>

					<p class="text-gray-600 text-lg mb-10 max-w-xl">
						Desarrollamos sistemas web, móviles y empresariales que optimizan procesos
						y potencian el crecimiento de tu negocio.
					</p>

					<button
						class="px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold
						shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-200">
						Contáctanos
					</button>
				</div>

				<img
					class="w-full max-w-md mx-auto rounded-2xl shadow-xl"
					src="@/assets/images/thumbnail-13.png"
					alt="Desarrollo de software"/>
			</div>
		</section>

		<!-- SERVICIOS -->
		<section class="py-24">
			<div class="container mx-auto px-4 text-center mb-14">
				<h2 class="text-3xl font-bold text-gray-900">
					Nuestros Servicios
				</h2>
				<p class="text-gray-600 mt-4">
					Soluciones tecnológicas diseñadas para tu empresa
				</p>
			</div>

			<div class="container mx-auto px-4 grid md:grid-cols-3 gap-10">

				<div class="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 text-center">
					<img
						class="mx-auto mb-6 w-16"
						src="@/assets/images/ERP.png"
						alt="ERP"/>
					<h3 class="font-semibold text-xl mb-3">ERP</h3>
					<p class="text-gray-500">
						Sistemas de planificación empresarial totalmente personalizados.
					</p>
				</div>

				<div class="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 text-center">
					<img
						class="mx-auto mb-6 w-16"
						src="@/assets/images/CRM.png"
						alt="CRM"/>
					<h3 class="font-semibold text-xl mb-3">CRM</h3>
					<p class="text-gray-600">
						Gestión inteligente de clientes, ventas y seguimiento.
					</p>
				</div>

				<div class="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 text-center">
					<img
						class="mx-auto mb-6 w-16"
						src="@/assets/images/puntos-de-venta.png"
						alt="Punto de venta"/>
					<h3 class="font-semibold text-xl mb-3">Punto de Venta</h3>
					<p class="text-gray-600">
						Control total de ventas, inventario y reportes en tiempo real.
					</p>
				</div>

			</div>
		</section>

		<!-- seccion de clientes -->
		<section class="py-24 bg-gray-100">
			<div class="container mx-auto px-4 text-center">
				<h2 class="text-3xl font-bold mb-12 text-gray-900">
					Ellos confían en Nosotros.
				</h2>

				<div class="flex justify-center gap-14 flex-wrap items-center opacity-80">
					<img
						class="h-12 grayscale hover:grayscale-0 transition"
						src="@/assets/images/customers/alaman.svg"
						alt="Cliente Alaman"/>
					<img
						class="h-12 grayscale hover:grayscale-0 transition"
						src="@/assets/images/customers/emanagym.svg"
						alt="Cliente Emanagym"/>
				</div>
			</div>
		</section>

		<!-- testimonios de clientes -->
		<section class="py-24">
			<div class="container mx-auto px-4 text-center mb-14">
				<h2 class="text-3xl font-bold text-gray-900">
					Lo que dicen nuestros clientes
				</h2>
			</div>

			<div class="container mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">

				<div class="p-6 bg-white rounded-2xl shadow-md">
					<img
						class="mx-auto mb-4 w-20 rounded-full"
						src="@/assets/images/avatar-1.png"
						alt="Cliente 1"/>
					<p class="text-gray-600">
						Excelente servicio y gran calidad.
					</p>
				</div>

				<div class="p-6 bg-white rounded-2xl shadow-md">
					<img
						class="mx-auto mb-4 w-20 rounded-full"
						src="@/assets/images/avatar-2.png"
						alt="Cliente 2"/>
					<p class="text-gray-600">
						Recomendados al 100%.
					</p>
				</div>

				<div class="p-6 bg-white rounded-2xl shadow-md">
					<img
						class="mx-auto mb-4 w-20 rounded-full"
						src="@/assets/images/avatar-3.png"
						alt="Cliente 3"/>
					<p class="text-gray-600">
						Soluciones rápidas y eficientes.
					</p>
				</div>

				<div class="p-6 bg-white rounded-2xl shadow-md">
					<img
						class="mx-auto mb-4 w-20 rounded-full"
						src="@/assets/images/avatar-4.png"
						alt="Cliente 4"/>
					<p class="text-gray-600">
						Gran equipo de trabajo.
					</p>
				</div>

			</div>
		</section>

	</div>
</template>

