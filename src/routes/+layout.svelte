<script lang="ts">
	import type { LayoutProps } from './$types';
	import '../app.css';
	import GoTop from '../components/GoTop.svelte';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	const { children }: LayoutProps = $props();
</script>

<Header />
<main class="flex flex-col items-center justify-start">{@render children()}</main>
<GoTop />
<Footer />
