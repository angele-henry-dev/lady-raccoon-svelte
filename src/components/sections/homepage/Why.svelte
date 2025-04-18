<script lang="ts">
	import Link from '../../Link.svelte';
</script>

<section class="w-full max-w-5xl mx-auto px-4 my-10 sm:py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
	<div>
		<h2><span class="text-[var(--secondary)]">Un cocon</span>... Pour qui&nbsp;? Pour quoi&nbsp;?</h2>
		<p>Que tu sois développeur·se, UX/UI designer, DevOps, architecte, infra, ou juste passionné·e de technologie, tu es le ou la bienvenu·e.</p>
		<p>Ici, pas de jugement, pas de pression, pas de course à la productivité. Juste des gens passionnés, curieux, parfois un peu perdus (et c’est ok), qui aiment apprendre et s’entraider.</p>
		<p>→ <Link label="En savoir plus sur mon histoire" href="/about" target="_self" title="A propos" /></p>
	</div>
	<div aria-hidden="true">
		<img src="/images/raccoon_working.webp" alt="Raccoon working on his computer" width="350" height="350" class="h-auto ml-auto" />
	</div>
</section>
