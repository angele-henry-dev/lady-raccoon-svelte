<script lang="ts">
	import Card from '../Card.svelte';
</script>

<section class="w-full max-w-5xl mx-auto px-4 py-10">
	<h2 class="text-center">Ici, on ne vend pas du rêve. On partage du concret.</h2>
	<div class="grid grid-cols-3 gap-4">
		<Card title="Formations" description="Formations et ressources pour devs à télécharger." href="/resources" link="Voir les formations " />
		<Card title="Ressources" description="Formations et ressources pour devs à télécharger." href="/resources" link="Voir les ressources " />
		<Card title="Outils" description="Des outils pour coder mieux ou pour apprendre" href="/tools" link="Voir les outils " />
		<Card title="Coaching et mentorat" description="Accompagnements pour retrouver confiance, avancer dans ta carrière, ou simplement avoir quelqu’un à qui parler." />
		<Card title="Blog" description="Accompagnements pour retrouver confiance, avancer dans ta carrière, ou simplement avoir quelqu’un à qui parler." />
	</div>
</section>
