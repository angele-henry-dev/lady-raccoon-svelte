<script lang="ts">
	import Link from "../Link.svelte";
</script>

<footer class="w-[95%] m-auto mt-20 p-5 text-sm text-center md:text-left">
	<div class="flex flex-col md:flex-row items-center md:items-start justify-between p-5">
		<div class="mb-3">
			<p><strong>Pages</strong></p>
			<p><Link href="/tools" target="_self" title="Outils" label="Outils" /></p>
			<p><Link href="/resources" target="_self" title="Ressources" label="Ressources" /></p>
			<p><Link href="/blog" target="_self" title="Blog" label="Blog" /></p>
		</div>
		<div class="mb-3">
			<p><strong>Contact</strong></p>
			<p><Link href="https://discord.gg/BAZdtgcuNX" target="_blank" title="Discord" label="Rejoins le Discord" /></p>
			<p><Link href="https://ko-fi.com/forabettertech" target="_blank" title="Ko-fi" label="Soutiens-moi sur Ko-fi" /></p>
			<p><Link href="https://www.linkedin.com/in/angele-henry" target="_blank" title="LinkedIn" label="Contacte-moi sur LinkedIn" /></p>
		</div>
		<div>
			<p><strong>Confidentialité</strong></p>
			<p><Link href="/legal-notice" target="_self" title="Mentions légales" label="Mentions légales" /></p>
			<p><Link href="/privacy-policy" target="_self" title="Politique de confidentialité" label="Politique de confidentialité" /></p>
		</div>
	</div>
	<div class="flex flex-col md:flex-row items-center md:items-start justify-between border-t p-5">
		<p class="md:mr-5">
			<span class="open-dyslexic">forabetter.tech par Lady Raccoon</span> ‧ 2024 - {new Date().getFullYear()}
		</p>
		<p>
			Police d'écriture &apos;OpenDyslexic&apos; par Abelardo Gonzalez
		</p>
	</div>
</footer>
