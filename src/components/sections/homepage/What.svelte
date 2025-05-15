<script lang="ts">
	import Card from '$components/Card.svelte';
</script>

<section class="w-full max-w-5xl mx-auto px-4 my-10 sm:py-10">
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		<Card 
			title="Les Outils" 
			description="Des outils pensés pour t’aider à coder plus vite, mieux, et avec plus de sérénité." 
			href="/tools" 
			label="Ouvre les outils" 
		/>
		<Card 
			title="Les Ressources" 
			description="Ebooks, fiches pratiques… Des contenus pensés pour t’accompagner au quotidien." 
			href="/resources" 
			label="Ouvre les ressources" 
		/>
		<Card 
			title="Discord" 
			description="Des sessions de coworking en live sur Discord pour se motiver et s'encourager." 
			href="https://discord.gg/BAZdtgcuNX" 
			target="_blank"
			label="Ouvre Discord" 
		/>
		<Card 
			title="Le Blog" 
			description="Des articles qui parlent tech, accessibilité, émotions, et trucs pas toujours dits ailleurs." 
			href="/blog" 
			label="Ouvre le blog" 
		/>
	</div>
</section>
