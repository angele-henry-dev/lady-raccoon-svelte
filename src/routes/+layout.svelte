<script lang="ts">
	import '../app.css';
	import Github from './_components/svg/Github.svelte';
	let { children } = $props();
</script>

<div>
	<nav>
		<a href="/">Home</a>
		<a href="/about">Documentation</a>
	</nav>

	{@render children()}

	<footer class="py-4 text-center">
		<p class='flex flex-row justify-center mb-2'>
		  <a
			class="mr-2"
			href="https://github.com/angele-henry-dev"
			target="_blank"
			title="Ouvre Github dans un nouvel onglet ou une nouvelle fenêtre"
		  >
			<Github />
		  </a>
		  <a
			href="https://www.linkedin.com/in/angele-henry/"
			target="_blank"
			title="Ouvre LinkedIn dans un nouvel onglet ou une nouvelle fenêtre"
		  >
			LinkedIn
		  </a>
		</p>
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
</div>
