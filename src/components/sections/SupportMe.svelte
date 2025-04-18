<script lang="ts">
	import Heart from '../design/Heart.svelte';
	import Link from '../Link.svelte';
</script>

<section class="w-full max-w-5xl mx-auto px-4 py-10 my-10 text-center">
	<div>
		<div class="relative bg-[var(--background)] border w-full p-10">
			<div class="absolute bg-[var(--secondary)] start-0 top-0 size-[100%] rotate-[-8deg] blur-[50px] z-[-1]"></div>
			<h2 class="uppercase">Tu veux <span class="text-[var(--color-lavanda-light)]">soutenir</span> mon travail&nbsp;?</h2>
			<p>J’ai créé ce projet toute seule, avec mes compétences et mon cœur.</p>
			<p>Si tu veux m’aider à faire grandir forabetter.tech, tu peux&nbsp;:</p>
			<p class="mt-5"><Link href="https://ko-fi.com/forabettertech" label="Me soutenir sur Ko-fi" title="Ko-fi" target="_blank" /></p>
			<p><Link href="https://www.linkedin.com/in/angele-henry" label="Me soutenir sur LinkedIn" title="LinkedIn" target="_blank" /></p>
		  	<Heart />
		</div>
	</div>
</section>
