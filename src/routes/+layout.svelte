<script lang="ts">
	import '../app.css';
	import GoTop from '../components/GoTop.svelte';
	import Github from '../components/svg/Github.svelte';
	import LinkedIn from '../components/svg/LinkedIn.svelte';
	import Logo from '../components/svg/Logo.svelte';
	let { children } = $props();
</script>

<header class="p-4 border-b">
	<nav class="container flex justify-between items-center w-full mx-auto">
		<div class="flex-grow flex items-center gap-10">
			<Logo />
		</div>
		<div class="flex gap-5 items-center">
			<LinkedIn />
			<Github />
		</div>
	</nav>
</header>

<main class="flex-grow">{@render children()}</main>

<GoTop />

<footer class="my-10 px-4">
	<div class="p-5 pt-10 grid grid-cols-1 md:grid-cols-3 gap-4 border-t">
		<div>
			<h1 class='mb-3 text-lg'>Qui suis-je ?</h1>
			<p>
				J’aide les entreprises à rendre leurs sites 
				conformes aux normes WCAG 2.1 pour <span class="highlight">contribuer à un web accessible à tous</span>.
			</p>
			<p class="py-5 flex flex-row gap-5"><LinkedIn /><Github /></p>
		</div>
		<div class="mb-3 md:text-right">
			<h1 class='mb-3 text-lg'>Contactez-moi</h1>
			<p class="mb-2">2 allée Anita Conti, A51
				<br>31520 Ramonville-Saint-Agne</p>
			<p>angele.henry[at]ladyraccoon.com</p>
		</div>
		<div class="mb-3 md:text-right">
			<h1 class='mb-3 text-lg'>Mentions légales</h1>
			<p><a href="/legal-notice">Mentions légales</a></p>
			<p><a href="/privacy-policy">Politique de confidentialité</a></p>
		</div>
	</div>
	<div class="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 border-t">
		<p>
			© {new Date().getFullYear()} Lady Raccoon. Tous droits réservés.
		</p>
		<p class="md:text-right">Police d'écriture &apos;OpenDyslexic&apos; par Abelardo Gonzalez</p>
	</div>
</footer>
