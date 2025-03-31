<script>
	import Faq from '../components/FAQ.svelte';
	import Link from '../components/Link.svelte';
	import Moon from '../components/Moon.svelte';
	import Stars from '../components/Stars.svelte';
	import Plant from '../components/svg/Plant.svelte';
	import Raccoon from '../components/svg/Raccoon.svelte';
	import Tree from '../components/svg/Tree.svelte';
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
		<div class="grass absolute top-0 start-0 size-full flex flex-row items-end justify-start">
			<div class="element hidden sm:block relative bg-[#1b2340] h-[130%] w-[25%]"></div>
			<div class="element hidden sm:block relative bg-[#1b2340] h-[130%] w-[45%]"></div>
			<div class="element relative bg-[#1b2340] h-[130%] w-[100%] sm:w-[55%]"></div>
		</div>
		<div class="grass absolute top-0 start-0 size-full flex flex-row items-end justify-start">
			<div class="element hidden sm:block relative bg-[var(--background)] h-[100%] w-[40%]"></div>
			<div class="element relative bg-[var(--background)] h-[100%] w-[100%] sm:w-[60%]"></div>
		</div>
		<Tree class="hidden sm:block absolute bottom-[85%] -start-[5%] w-[400px] h-[520px] scale-[70%] sm:scale-100" />
		<Plant class="absolute bottom-[85%] end-[40%] w-[60px] scale-[70%] sm:scale-100 overflow-hidden" />
		<Plant class="absolute bottom-[55%] sm:bottom-[85%] end-[2%] w-[100px] scale-[70%] sm:scale-100 overflow-hidden" />
		<!-- <Raccoon class="absolute bottom-[60%] start-[0] sm:end-[15%] w-[170px] sm:w-[215px]" /> -->
	</div>
</section>

<Faq />

<style>
	.hero {
		height: calc(100vh - 50px);

		.top {
			background: linear-gradient(
				to bottom,
				var(--background) 0%,
				var(--color-blue-night) 70%
			);
		}

		.bottom .grass .element {
			clip-path: ellipse(85% 100% at 50% 100%);
		}
	}
</style>
