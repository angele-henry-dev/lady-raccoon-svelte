<script lang="ts">
	import Header from "$components/design/Header.svelte";
	import Plant from "$components/design/Plant.svelte";

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
<article class="relative w-full max-w-5xl mx-auto px-4 sm:pb-10 mb-10">
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Publié le {data.meta.date}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.tags as tag}
			<span class="surface-4">{tag}</span>
		{/each}
	</div>

	<div class="prose">
		<data.content />
	</div>
	<Plant class="absolute bottom-0 start-0 md:start-[-15%] w-[90px] sm:w-[150px]" />
</article>
