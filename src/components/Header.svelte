<script>
	import '../app.css';
	import Github from './svg/Github.svelte';
	import LinkedIn from './svg/LinkedIn.svelte';
	import Discord from './svg/Discord.svelte';
	import Logo from './svg/Logo.svelte';

    let scrollHeight = 0;
    $: showNavBG = scrollHeight > 100;
</script>
  
<svelte:window bind:scrollY={scrollHeight} />

<nav
	class="{showNavBG ? 'bg' : ''} sticky top-0 w-full flex flex-row justify-between items-center p-4 text-xl font-bold z-50"
>
	<div><Logo /></div>
	<div class="flex flex-row justify-end items-center gap-5">
		<a href="/tools">Outils</a>
		<a href="/resources">Ressources</a>
		<a href="/blog">Blog</a>
		<a href="/about">A propos</a>
		<Discord />
		<LinkedIn />
		<Github />
	</div>

<!-- PLAN -->
<!-- 
1. Homepage (Communauté)
- Parfait pour expliquer l’ADN de forabetter.tech : bienveillance, entraide, montée en compétences, etc. 
- Ajouter quelques témoignages ou autres preuves sociales quand on en aura
- Un calendrier ou agenda des prochains lives / coworkings ou autres événements (confs, etc.)

2. Outils
- Le contrast checker avec simulateur de daltonisme
- Un iframe pour simuler daltonisme sur une adresse URL
- Un audit auto via URL
-->
</nav>

<style>
	nav {
        transition: backdrop-filter 1s ease, background-color 1s ease;
	}
	nav.bg {
		background-color: rgba(30, 42, 56, 0.65);
		backdrop-filter: blur(5px);
	}
</style>
