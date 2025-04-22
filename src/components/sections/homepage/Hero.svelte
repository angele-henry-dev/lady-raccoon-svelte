<script lang="ts">
	import Moon from '$components/design/Moon.svelte';
	import Stars from '$components/design/Stars.svelte';
	import Plant from '$components/design/Plant.svelte';
	import Tree from '$components/design/Tree.svelte';
	import Link from '$components/Link.svelte';
</script>

<section class="h-screen w-full text-center md:text-left flex flex-col items-center justify-center">
	<div class="hero px-5 w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center flex-grow">
		<Stars />
		<div class="px-10 m-auto md:my-0 md:mx-auto mb-5">
			<Moon classes="size-[150px] md:size-[200px]" />
		</div>

		<div class="z-10">
			<h1 class="text-4xl lg:text-6xl font-bold uppercase">Le cocon tech</h1>
			<p class="lg:text-2xl pt-5 max-w-2xl">
				Bienvenue dans l’open space virtuel de la tech.
			</p>
			<p class="lg:text-2xl pb-5 max-w-2xl mb-5">
				Coworking, entraide, formations et ressources pour progresser en toute bienveillance.
			</p>
			<Link 
				href="https://discord.gg/BAZdtgcuNX" 
				target="_blank" 
				title="Discord" 
				label="Découvre le Discord"
				button={true}
			/>
		</div>
	</div>
	<div class="bottom bg-[var(--color-blue-dark)] relative h-[23%] w-full flex flex-col items-center justify-center">
		<div aria-hidden="true" class="relative size-full overflow-x-clip">
			<div class="absolute bottom-[2vmin] -start-[5%] sm:-start-[20vmin] w-[110%] sm:w-[70%] h-[130%] bg-[var(--color-black-light)] rounded-t-[50%] rounded-b-none"></div>
			<div class="hidden sm:block absolute bottom-[2vmin] -end-[20vmin] w-[80%] h-[120%] bg-[var(--background)] rounded-t-[50%] rounded-b-none"></div>
			<div class="absolute bottom-[0] start-0 w-full h-[80%] bg-[var(--background)]"></div>
		</div>
		<Tree class="hidden sm:block absolute bottom-[70%] -start-[5%] w-[400px] h-[520px] scale-[70%] sm:scale-100" />
		<Plant class="absolute bottom-[55%] end-[80%] sm:end-[40%] w-[60px] scale-[70%] sm:scale-100" />
		<img aria-hidden="true" src="/images/raccoon_dreaming.webp" alt="Raccoon working on his computer" width="170" height="150" class="absolute bottom-[50%] end-[5%] sm:end-[15%] w-[100px] sm:w-[145px] h-auto" />
		<Plant class="hidden sm:block absolute bottom-[5%] end-[2%] w-[100px] scale-100" />
	</div>
</section>
