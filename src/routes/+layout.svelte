<script lang="ts">
	import type { LayoutProps } from './$types';
	import '../app.css';
	import GoTop from '../components/GoTop.svelte';
	import Github from '../components/svg/Github.svelte';
	import LinkedIn from '../components/svg/LinkedIn.svelte';
	import Header from '../components/Header.svelte';
	import Discord from '../components/svg/Discord.svelte';
	import Footer from '../components/Footer.svelte';

	let { children }: LayoutProps = $props();
</script>

<Header />
<main class="flex flex-col items-center justify-start">{@render children()}</main>
<GoTop />
<Footer />
