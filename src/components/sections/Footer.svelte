<script lang="ts">
	import Discord from "../design/Discord.svelte";
	import Kofi from "../design/Kofi.svelte";
	import LinkedIn from "../design/LinkedIn.svelte";
</script>

<footer class="mb-5 px-5 pt-10 grid grid-cols-1 md:grid-cols-2 gap-4 border-t">
	<div>
		<p class="pb-5">
			<span class="open-dyslexic">forabetter.tech by Lady Raccoon with 💜</span> {new Date().getFullYear()}
		</p>
		<p>
			No Copyright ‧ Partagez, copiez, améliorez. La créativité est contagieuse.
		</p>
		<p class="pb-5">
			Police d'écriture &apos;OpenDyslexic&apos; par Abelardo Gonzalez
		</p>
	</div>
	<div class="text-left md:text-right">
		<p><a href="/legal-notice">Mentions légales</a></p>
		<p><a href="/privacy-policy">Politique de confidentialité</a></p>
		<p class="my-5 flex flex-row justify-start md:justify-end gap-5 text-3xl"><Kofi /><Discord /><LinkedIn /></p>
	</div>
</footer>
