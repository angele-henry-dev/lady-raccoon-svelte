<script lang="ts">
	import Ribbon from "$components/design/Ribbon.svelte";

	let { data } = $props()
</script>

<svelte:head>
	<title>{data.meta.title} - forabetter.tech</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<div class="relative w-full max-w-5xl mx-auto px-4 mb-10">
	<article class="w-full px-10 pb-10 bg-[var(--background)] border">
		<div class="grow flex flex-row">
			{#each data.meta.tags as tag}
				<Ribbon text={tag} />
			{/each}
		</div>

		<h1>{data.meta.title}</h1>
		<p class="text-sm"><i>Publié le {data.meta.date}</i></p>
	
		<div>
			<data.content />
		</div>
	</article>
</div>
