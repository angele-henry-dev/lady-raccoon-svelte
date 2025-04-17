<script lang="ts">
	import type { LayoutProps } from './$types';
	import '../app.css';
	import Header from '../components/sections/Header.svelte';
	import Footer from '../components/sections/Footer.svelte';
	import Menu from '../components/sections/Menu.svelte';

	const { children }: LayoutProps = $props();
</script>

<Header />
<main class="flex flex-col items-center justify-start">{@render children()}</main>
<Footer />
<Menu />
