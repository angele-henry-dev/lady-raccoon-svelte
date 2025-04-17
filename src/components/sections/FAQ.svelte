<script lang="ts">
	import { slide } from 'svelte/transition';
    import faqs from "$data/faq.json";

	let openIndex: number | null = null;

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section class="w-full max-w-5xl mx-auto px-4 py-10">
	<h2 class="text-3xl sm:text-4xl font-bold mb-6">FAQ</h2>

	<ul class="space-y-4">
		{#each faqs as faq, index}
			<li class="border rounded-lg overflow-hidden">
				<button
					on:click={() => toggle(index)}
					class="w-full text-left p-4 flex justify-between items-center"
				>
					<span>{faq.question}</span>
					<span class="text-xl">{openIndex === index ? "-" : "+"}</span>
				</button>

				{#if openIndex === index}
                    <div
                        class="border-t border-dashed px-4 pb-4 pt-2"
                        in:slide={{ duration: 250 }}
                        out:slide={{ duration: 200 }}
                    >
                        {@html faq.answer}
                    </div>
				{/if}
			</li>
		{/each}
	</ul>
</section>
