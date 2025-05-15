<script lang="ts">
	import Heart from '$components/design/Heart.svelte';
	import Link from '$components/Link.svelte';
</script>

<section class="w-full max-w-5xl mx-auto px-4 my-10 sm:py-10">
	<div class="relative bg-[var(--background)] border w-full px-10 pb-10">
		<div aria-hidden="true" class="absolute bg-[var(--tertiary)] opacity-80 start-[5%] top-[5%] size-[90%] rotate-[-6deg] blur-[50px] z-[-1]"></div>
		<h2 class="uppercase">Tu veux <span class="text-[var(--primary)]">soutenir</span> mon travail&nbsp;?</h2>
		<p>J’ai créé ce projet toute seule, avec mes compétences et mon cœur.</p>
		<p>Si tu veux m’aider à faire grandir forabetter.tech, tu peux&nbsp;:</p>
		<p class="mt-5">
			Me soutenir sur <Link href="https://ko-fi.com/forabettertech" title="Ko-fi" target="_blank" linkType="simple">Ko-fi</Link>
		</p>
		<p>
			Me soutenir sur <Link href="https://www.linkedin.com/in/angele-henry" title="LinkedIn" target="_blank" linkType="simple">LinkedIn</Link>
		</p>
		<div class="absolute top-10 end-20"><Heart /></div>
	</div>
</section>
