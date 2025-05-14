<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import Menu from './Menu.svelte';
	import Footer from './Footer.svelte';
	import Background from '$components/design/Background.svelte';
</script>

<header class="h-[70px] sm:h-[70px] fixed top-5 left-0 w-full mx-auto z-50">
	<Menu />
</header>

<main class="flex flex-col items-center justify-start">
	<Background full={page.url.pathname === '/'} />
	<slot />
    <!-- <Plant class="absolute -bottom-[50%] start-[10px] w-[30px] sm:w-[50px]" /> -->
</main>

<Footer />
