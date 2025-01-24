<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/settings">Settings</a>
	</nav>

	{@render children()}

	<footer class="py-4 text-center">
		<p class='flex flex-row justify-center mb-2'>
		  <a
			class="mr-2"
			href="https://github.com/angele-henry-dev"
			target="_blank"
			title="Opens Github in a new tab or window"
		  >
			Github
		  </a>
		  <a
			href="https://www.linkedin.com/in/angele-henry/"
			target="_blank"
			title="Opens LinkedIn in a new tab or window"
		  >
			LinkedIn
		  </a>
		</p>
		<p class='mb-2'>
		  <a href="/legal-notice">Legal notice</a>
		  <span class="mx-2">&#8226;</span>
		  <a href="/privacy-policy">Privacy policy</a>
		  <span class="mx-2">&#8226;</span>
		  <a href="/sitemap">Sitemap</a>
		</p>
		<p class='mb-2'>Font &apos;OpenDyslexic&apos; by Abelardo Gonzalez</p>
		<p>
		  Handcrafted with
		  <span class="ml-2 highlight">♥</span>
		  <span class="mx-2">&#8226;</span>
		  © {new Date().getFullYear()} Lady Raccoon
		</p>
	  </footer>
</div>
