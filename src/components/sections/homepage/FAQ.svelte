<script lang="ts">
	import { slide } from 'svelte/transition';
    import faqs from "$content/faq.json";

	let openIndex: number | null = null;

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section class="w-full max-w-5xl mx-auto px-4 my-10 sm:py-10">
	<div class="w-full bg-[var(--background)] grid grid-cols-1 md:grid-cols-2 gap-4 border p-10">
		<div>
			<h2>Trouve les réponses aux questions les plus fréquentes</h2>
			<img aria-hidden="true" src="/images/raccoon_asking.webp" alt="Raccoon asking questions" width="350" height="350" class="m-auto" />
		</div>
		<ul class="space-y-4">
			{#each faqs as faq, index}
				<li class="border-b rounded-none overflow-hidden">
					<button
						on:click={() => toggle(index)}
						class="w-full text-left p-4 flex justify-between items-center hover:text-[var(--background)] hover:bg-[var(--primary)]"
					>
						<span>{faq.question}</span>
						<span class="text-xl ml-5">{openIndex === index ? "-" : "+"}</span>
					</button>
	
					{#if openIndex === index}
						<div
							class="px-4 pb-4 pt-2"
							in:slide={{ duration: 250 }}
							out:slide={{ duration: 200 }}
						>
							{@html faq.answer}
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>
