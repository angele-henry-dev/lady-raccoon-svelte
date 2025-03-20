<script>
	import Discord from "./svg/Discord.svelte";
	import Github from "./svg/Github.svelte";
	import LinkedIn from "./svg/LinkedIn.svelte";
</script>

<footer class="mb-10 p-5 pt-10 grid grid-cols-1 md:grid-cols-2 gap-4 border-t">
	<div>
		<p class="pb-5">
			<span class="open-dyslexic">Lady Raccoon</span> {new Date().getFullYear()} ‧ No Copyright ‧ Partagez, copiez, améliorez. La créativité est contagieuse.
		</p>
		<p class="pb-5">Police d'écriture &apos;OpenDyslexic&apos; par Abelardo Gonzalez</p>
		<p class="pb-5 flex flex-row gap-5"><Discord /><LinkedIn /><Github /></p>
	</div>
	<div class="mb-3 md:text-right">
		<p><a href="/legal-notice">Mentions légales</a></p>
		<p><a href="/privacy-policy">Politique de confidentialité</a></p>
	</div>
</footer>
