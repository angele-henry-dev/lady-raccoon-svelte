<script lang="ts">
	import Card from '../Card.svelte';
</script>

<section class="w-full max-w-5xl mx-auto px-4 my-10 sm:py-10">
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		<Card 
			title="Outils" 
			description="Des outils pensés pour t’aider à coder plus vite, mieux, et avec plus de sérénité." 
			href="/tools" 
			link="Découvrir les outils" 
		/>
		<Card 
			title="Ressources" 
			description="Ebooks, fiches pratiques… Des contenus pensés pour t’accompagner au quotidien." 
			href="/resources" 
			link="Découvrir les ressources" 
		/>
		<Card 
			title="Formations" 
			description="Des formations accessibles pour apprendre toujours plus, pas à pas, sans se noyer." 
			href="/resources" 
			link="Découvrir les formations" 
		/>
		<Card 
			title="Coworking" 
			description="Des sessions de coworking en live sur Discord pour se motiver et s'encourager." 
			href="https://discord.gg/BAZdtgcuNX" 
			target="_blank"
			link="Découvrir le Discord" 
		/>
		<Card 
			title="Blog" 
			description="Des articles qui parlent tech, accessibilité, émotions, et trucs pas toujours dits ailleurs." 
			href="/blog" 
			link="Découvrir le blog" 
		/>	  
	</div>
</section>
