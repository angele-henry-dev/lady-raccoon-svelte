<script lang="ts">
	import '../app.css';
	import Github from './_components/svg/Github.svelte';
	import LinkedIn from './_components/svg/LinkedIn.svelte';
	import Logo from './_components/svg/Logo.svelte';
	let { children } = $props();
</script>

<header class="sticky top-0 z-50 p-4 border-b">
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

<footer class="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm border-t">
	<div>
		<p class="mb-3">
			Développeuse frontend spécialisée dans <b>l’accessibilité web</b>, j’aide les entreprises à rendre leurs sites <b>conformes aux normes WCAG 2.1</b>. 
		</p>
		<p>
			<b>Mon objectif :</b> améliorer leur impact et leur audience tout en contribuant à un web accessible à tous.
		</p>
	</div>
	<div>
		Image de raton-laveur
	</div>
	<div>
		<p>
			<a href="/legal-notice">&#8226; Mentions légales</a>
		</p>
		<p>
			<a href="/privacy-policy">&#8226; Politique de confidentialité</a>
		</p>
		<p>
			<a href="/sitemap">&#8226; Plan du site</a>
		</p>
		<p class='my-2'>Police d'écriture &apos;OpenDyslexic&apos; par Abelardo Gonzalez</p>
		<p>
			© {new Date().getFullYear()} Lady Raccoon
		</p>
	</div>
</footer>
