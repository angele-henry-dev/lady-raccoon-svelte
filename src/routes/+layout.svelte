<script lang="ts">
	import '../app.css';
	import Menu from './Menu.svelte';
	import Footer from './Footer.svelte';
</script>

<header class="h-[70px] sm:h-[70px] fixed top-5 left-0 w-full mx-auto z-50">
	<Menu />
</header>

<main class="flex flex-col items-center justify-start"><slot /></main>

<Footer />
