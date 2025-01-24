<script lang="ts">
	import '../app.css';
	import Github from './_components/svg/Github.svelte';
	let { children } = $props();
</script>

<header class="p-4">
	<nav class="container flex justify-between items-center w-full mx-auto">
		<div class="flex-grow flex items-center gap-10">
			<a href="/" class="flex items-center gap-2">
				<img src="/images/logo.webp" alt="Logo of Lady Raccoon" width={50} height={50} />
				<span class="truncate">Lady Raccoon</span>
			</a>
			<a href="/about">Documentation</a>
		</div>
		<a
			href="https://github.com/angele-henry-dev"
			target="_blank"
			title="Opens Github in a new tab or window"
		>
			<Github />
		</a>
	</nav>
</header>

<main class="flex-grow">{@render children()}</main>

<footer class="py-4 text-center">
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
</footer>
