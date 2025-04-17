<script lang="ts">
	import Moon from '../design/Moon.svelte';
	import Stars from '../design/Stars.svelte';
	import Plant from '../design/Plant.svelte';
	import Raccoon from '../design/Raccoon.svelte';
	import Tree from '../design/Tree.svelte';
	import Link from '../Link.svelte';
</script>

<section class="hero h-screen w-full text-center md:text-left flex flex-col items-center justify-center">
	<div class="top px-5 w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center flex-grow">
		<Stars />
		<div class="px-10 m-auto md:my-0 md:mx-auto mb-5">
			<Moon classes="size-[150px] md:size-[200px]" />
		</div>
		<div class="z-10">
			<h1 class="text-4xl lg:text-6xl font-bold uppercase">Le cocon tech</h1>
			<p class="lg:text-2xl py-5 max-w-2xl">
				Bienvenue dans l’open space virtuel de la tech.
			</p>
			<p class="lg:text-2xl py-5 max-w-2xl mb-5">
				Coworking, entraide, formations, et ressources pour progresser sans se cramer.
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
	<div class="bottom bg-[var(--color-blue-night)] relative h-[23%] w-full flex flex-col items-center justify-center">
		<div class="relative size-full overflow-x-clip" aria-hidden="true">
			<div class="absolute bottom-[2vmin] -start-[5%] sm:-start-[20vmin] w-[110%] sm:w-[70%] h-[130%] bg-[#181f3a] rounded-t-[50%] rounded-b-none"></div>
			<div class="hidden sm:block absolute bottom-[2vmin] -end-[20vmin] w-[80%] h-[120%] bg-[var(--background)] rounded-t-[50%] rounded-b-none"></div>
			<div class="absolute bottom-[0] start-0 w-full h-[80%] bg-[var(--background)]"></div>
		</div>
		<Tree class="hidden sm:block absolute bottom-[55%] -start-[5%] w-[400px] h-[520px] scale-[70%] sm:scale-100" />
		<Plant class="absolute bottom-[55%] end-[80%] sm:end-[40%] w-[60px] scale-[70%] sm:scale-100" />
		<Raccoon class="absolute bottom-[50%] end-[0] sm:end-[15%] w-[170px] sm:w-[215px]" />
		<Plant class="hidden sm:block absolute bottom-[5%] end-[2%] w-[100px] scale-100" />
	</div>
</section>

<style>
	.hero {
		.top {
			background: linear-gradient(
				to bottom,
				var(--background) 0%,
				var(--color-blue-night) 70%
			);
		}
	}
</style>
