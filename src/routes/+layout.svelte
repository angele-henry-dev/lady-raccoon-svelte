<script lang="ts">
	import type { LayoutProps } from './$types';
	import '../app.css';
	import Menu from '../components/sections/Menu.svelte';
	import Footer from '../components/sections/Footer.svelte';

	const { children }: LayoutProps = $props();
</script>

<header class="h-[70px] fixed top-5 left-0 w-full mx-auto z-50">
	<Menu />
</header>
<main class="mt-[80px] flex flex-col items-center justify-start">{@render children()}</main>
<Footer />
