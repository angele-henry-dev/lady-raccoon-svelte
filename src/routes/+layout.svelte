<script lang="ts">
	import '../app.css';
	import Github from './_components/svg/Github.svelte';
	import LinkedIn from './_components/svg/LinkedIn.svelte';
	import Logo from './_components/svg/Logo.svelte';
	let { children } = $props();
</script>

<header class="p-4">
	<nav class="container flex justify-between items-center w-full mx-auto">
		<div class="flex-grow flex items-center gap-10">
			<Logo />
			<a href="/about">Documentation</a>
		</div>
		<div class="flex gap-5 items-center">
			<LinkedIn />
			<Github />
			<button class="alone" type="button">☀☪</button>
		</div>
	</nav>
</header>

<main class="flex-grow">{@render children()}</main>

<footer class="p-4 grid grid-cols-4 gap-4">
	<div>
		Image de raton-laveur
	</div>
	<div>
		<p class="mb-3">
			Développeuse frontend spécialisée dans <b>l’accessibilité web</b>, j’aide les entreprises à rendre leurs sites <b>conformes aux normes WCAG 2.1</b>. 
		</p>
		<p>
			<b>Mon objectif :</b> améliorer leur impact et leur audience tout en contribuant à un web accessible à tous.
		</p>
	</div>
	<div>
		Plop
	</div>
	<div>
		<p class='mb-2'>
			<a href="/legal-notice">Mentions légales</a>
			<span class="mx-2">&#8226;</span>
			<a href="/privacy-policy">Politique de confidentialité</a>
			<span class="mx-2">&#8226;</span>
			<a href="/sitemap">Plan du site</a>
		</p>
		<p class='mb-2'>Police d'écriture &apos;OpenDyslexic&apos; par Abelardo Gonzalez</p>
		<p>
			Développé avec 
			<span class="ml-2 highlight">♥</span>
			<span class="mx-2">&#8226;</span>
			© {new Date().getFullYear()} Lady Raccoon
		</p>
	</div>
</footer>
