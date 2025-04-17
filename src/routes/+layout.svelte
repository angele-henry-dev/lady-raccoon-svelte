<script lang="ts">
	import '../app.css';
	import Menu from '../components/sections/Menu.svelte';
	import Footer from '../components/sections/Footer.svelte';
</script>

<header class="h-[70px] sm:h-[70px] fixed top-5 left-0 w-full mx-auto z-50">
	<Menu />
</header>
<main class="mt-[50px] flex flex-col items-center justify-start"><slot /></main>
<Footer />
