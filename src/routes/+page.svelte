<script>
	import Faq from '../components/FAQ.svelte';
	import Link from '../components/Link.svelte';
	import Moon from '../components/Moon.svelte';
	import Stars from '../components/Stars.svelte';
	import Plant from '../components/svg/Plant.svelte';
	import Raccoon from '../components/svg/Raccoon.svelte';
	import Tree from '../components/Tree.svelte';
</script>

<svelte:head>
	<title>For a better tech • Le cocon tech pour se motiver, s’entraider, progresser. Ensemble. • Lady Raccoon</title>
	<meta
		name="description"
		content="Un cocon tech pour les développeuses et développeurs, UX/UI, DevOps, architectes & passionné·e·s. Ici, on s'entraide, on échange et on progresse ensemble, sans prise de tête. Rejoins-nous pour apprendre, partager et passer de bons moments dans un espace convivial et inclusif !"
	/>
</svelte:head>

<section class="hero relative w-full text-center flex flex-col items-center justify-center">
	<div class="top w-[300px] relative w-full flex flex-col items-center justify-evenly flex-grow">
		<Stars />
		<div class="relative flex items-center justify-center size-[200px] sm:size-[300px]">
			<Moon class="size-full absolute top-[0] left-[50%]" />
			<h1 class="text-4xl sm:text-6xl font-bold uppercase z-10">For a<br />better<br />tech</h1>
		</div>
		<p class="sm:text-2xl p-5 max-w-2xl z-20">
			Le cocon tech pour<br>se motiver, s’entraider, progresser.<br>Ensemble.
		</p>
	</div>
	<div class="bottom relative h-[33%] w-full flex flex-col items-center justify-center">
		<Tree class="hidden sm:block absolute bottom-0 -start-[25%] w-[60vw] h-[150vh]" />
		<Plant class="hidden sm:block absolute bottom-[80%] end-[0%] w-[150px] scale-[70%] sm:scale-100 overflow-hidden" />
		<Raccoon class="absolute bottom-[60%] end-[0] sm:end-[15%] w-[170px] sm:w-[215px] z-10" />
		<Link label="Rejoins le Discord →" href="https://discord.gg/BAZdtgcuNX" target="_blank" />
	</div>
</section>

<Faq />

<style>
	.hero {
		height: calc(100vh - 50px);
	}
	.hero .bottom {
		background-color: var(--background);
	}
	.hero .bottom::before {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		filter: blur(10px);
		background: linear-gradient(
			to bottom,
			rgba(0, 213, 255, 0.1) 0%,
			rgba(30, 42, 56, 0.1) 20%,
			rgba(30, 42, 56, 0) 70%
		);
	}

	h1 {
		text-shadow:
			0 0 10px var(--primary),
			0 0 100px var(--primary);
		color: var(--background);
	}
</style>
