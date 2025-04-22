<script lang="ts">
	import Header from "$components/design/Header.svelte";
	import Plant from "$components/design/Plant.svelte";
	import Ribbon from "$components/design/Ribbon.svelte";

	let { data } = $props()
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
</svelte:head>

<Header />
<Plant class="absolute top-[150px] end-[0] w-[90px] sm:w-[150px]" />
<div class="relative w-full max-w-5xl mx-auto p-10 mb-10">
	<article class="w-full px-10 pb-10 bg-[var(--background)] border">
		{#each data.meta.tags as tag}
			<Ribbon text={tag} />
		{/each}

		<hgroup>
			<h1>{data.meta.title}</h1>
			<p>Publié le {data.meta.date}</p>
		</hgroup>
	
		<div class="prose">
			<data.content />
		</div>
		<Plant class="absolute bottom-0 start-0 md:start-[-15%] w-[90px] sm:w-[150px] z-[-1]" />
	</article>
</div>
