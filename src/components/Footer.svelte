<script>
	import Discord from "./svg/Discord.svelte";
	import LinkedIn from "./svg/LinkedIn.svelte";
</script>

<footer class="mb-10 p-5 pt-10 grid grid-cols-1 md:grid-cols-2 gap-4 border-t">
	<div>
		<p class="pb-5">
			<span class="open-dyslexic">forabetter.tech by Lady Raccoon with 💜</span> {new Date().getFullYear()}
		</p>
		<p class="pb-5">
			No Copyright ‧ Partagez, copiez, améliorez. La créativité est contagieuse.
		</p>
	</div>
	<div class="mb-3 md:text-right">
		<p><a href="/legal-notice">Mentions légales</a></p>
		<p><a href="/privacy-policy">Politique de confidentialité</a></p>
		<p class="flex flex-row justify-end gap-5"><Discord /><LinkedIn /></p>
	</div>
</footer>
