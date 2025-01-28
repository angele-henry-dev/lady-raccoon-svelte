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

<footer class="px-4 text-base">
	<div class="p-4 pt-10 grid grid-cols-1 md:grid-cols-3 gap-4 border-t">
		<div>
			<h1 class='mb-3'>Qui suis-je ?</h1>
			<ul>
				<li>Développeuse frontend spécialisée dans <b>l’accessibilité web</b>, j’aide les entreprises à rendre leurs sites <b>conformes aux normes WCAG 2.1</b>.</li>
				<li><b>Mon objectif :</b> améliorer leur impact et leur audience tout en contribuant à un web accessible à tous.</li>
			</ul>
		</div>
		<div>
			<h1 class='mb-3'>Contactez-moi</h1>
			<ul>
				<li>2 allée Anita Conti, A51
					<br>31520 Ramonville-Saint-Agne</li>
				<li>angele.henry[at]ladyraccoon.com</li>
			</ul>
		</div>
		<div>
			<h1 class='mb-3'>Mentions légales</h1>
			<ul>
				<li><a href="/legal-notice">Mentions légales</a></li>
				<li><a href="/privacy-policy">Politique de confidentialité</a></li>
			</ul>
		</div>
	</div>
	<div class="p-4 flex flex-row justify-between border-t">
		<p>
			© {new Date().getFullYear()} Lady Raccoon. Tous droits réservés.
		</p>
		<p class='mb-2'>Police d'écriture &apos;OpenDyslexic&apos; par Abelardo Gonzalez</p>
	</div>
</footer>
