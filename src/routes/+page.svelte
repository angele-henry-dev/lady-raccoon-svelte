<script lang="ts">
	import Faq from '../components/FAQ.svelte';
	import Link from '../components/Link.svelte';
	import Moon from '../components/design/Moon.svelte';
	import Stars from '../components/design/Stars.svelte';
	import Plant from '../components/design/Plant.svelte';
	import Raccoon from '../components/design/Raccoon.svelte';
	import Tree from '../components/design/Tree.svelte';
</script>

<svelte:head>
	<title>For a better tech • Le cocon tech pour se motiver, s’entraider, progresser. Ensemble. • Lady Raccoon</title>
	<meta
		name="description"
		content="Un cocon tech pour les développeuses et développeurs, UX/UI, DevOps, architectes & passionné·e·s. Ici, on s'entraide, on échange et on progresse ensemble, sans prise de tête. Rejoins-nous pour apprendre, partager et passer de bons moments dans un espace convivial et inclusif !"
	/>
</svelte:head>

<section class="hero relative w-full text-center sm:text-left flex flex-col items-center justify-center">
	<div class="top w-[300px] px-5 relative w-full flex flex-col sm:flex-row items-center justify-evenly flex-grow">
		<Stars />
		<div class="relative flex items-center justify-center size-[200px] sm:size-[300px]">
			<Moon class="relative size-[200px]" />
		</div>
		<div class="z-10">
			<h1 class="text-4xl sm:text-6xl font-bold uppercase">Le cocon tech</h1>
			<p class="sm:text-2xl py-5 max-w-2xl">
				Pour se motiver, s’entraider, progresser.<br> Ensemble.
			</p>
			<Link label="Rejoins le Discord →" href="https://discord.gg/BAZdtgcuNX" target="_blank" />
		</div>
	</div>
	<div class="bottom bg-[var(--color-blue-night)] relative h-[23%] w-full flex flex-col items-center justify-center">
		<div class="relative size-full overflow-x-clip" aria-hidden="true">
			<div class="absolute bottom-[2vmin] -start-[5%] sm:-start-[20vmin] w-[110%] sm:w-[70%] h-[130%] bg-[#181f3a] rounded-t-[50%] rounded-b-none"></div>
			<div class="hidden sm:block absolute bottom-[2vmin] -end-[20vmin] w-[80%] h-[120%] bg-[var(--background)] rounded-t-[50%] rounded-b-none"></div>
			<div class="absolute bottom-[0] start-0 w-full h-[80%] bg-[var(--background)]"></div>
		</div>
		<Tree class="hidden sm:block absolute bottom-[55%] -start-[5%] w-[400px] h-[520px] scale-[70%] sm:scale-100" />
		<Plant class="absolute bottom-[55%] sm:bottom-[5%] end-[2%] w-[100px] scale-[70%] sm:scale-100" />
		<Plant class="absolute bottom-[55%] end-[40%] w-[60px] scale-[70%] sm:scale-100" />
		<!-- <Raccoon class="absolute bottom-[60%] start-[0] sm:end-[15%] w-[170px] sm:w-[215px]" /> -->
	</div>
</section>

<Faq />

<style scoped>
	.hero {
		height: calc(100vh - 50px);

		.top {
			background: linear-gradient(
				to bottom,
				var(--background) 0%,
				var(--color-blue-night) 70%
			);
		}
	}
</style>
