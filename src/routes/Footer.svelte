<script lang="ts">
	import Link from "$components/Link.svelte";
</script>

<footer class="w-[95%] m-auto p-5 text-center md:text-left">
	<div class="flex flex-col md:flex-row items-center md:items-start justify-between p-5">
		<div class="flex flex-col mb-3">
			<b>Pages</b>
			<Link href="/tools" target="_self" title="Outils">Outils</Link>
			<Link href="/resources" target="_self" title="Ressources">Ressources</Link>
			<Link href="/blog" target="_self" title="Blog">Blog</Link>
		</div>
		<div class="flex flex-col mb-3">
			<b>Contact</b>
			<Link href="https://discord.gg/BAZdtgcuNX" target="_blank" title="Discord">Rejoins le Discord</Link>
			<Link href="https://ko-fi.com/forabettertech" target="_blank" title="Ko-fi">Soutiens-moi sur Ko-fi</Link>
			<Link href="https://www.linkedin.com/in/angele-henry" target="_blank" title="LinkedIn">Contacte-moi sur LinkedIn</Link>
		</div>
		<div class="flex flex-col mb-3">
			<b>Confidentialité</b>
			<Link href="/legal-notice" target="_self" title="Mentions légales">Mentions légales</Link>
			<Link href="/privacy-policy" target="_self" title="Politique de confidentialité">Politique de confidentialité</Link>
		</div>
	</div>
	<div class="flex flex-col md:flex-row items-center md:items-start justify-between border-t rounded-none p-5">
		<p class="md:mr-5">
			<span class="open-dyslexic">forabetter.tech par Lady Raccoon</span> ‧ 2024 - {new Date().getFullYear()}
		</p>
		<p>
			Police d'écriture &apos;OpenDyslexic&apos; par Abelardo Gonzalez
		</p>
	</div>
</footer>
