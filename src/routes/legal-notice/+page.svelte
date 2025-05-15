<script>
	import Link from "$components/Link.svelte";
</script>

<svelte:head>
	<title>Mentions légales - forabetter.tech</title>
	<meta name="description" content="Découvre les informations légales du site forabetter.tech : éditeur, hébergeur, propriété intellectuelle, données personnelles et cookies." />
</svelte:head>

<section class="relative w-full max-w-5xl mx-auto px-4 mb-10">
	<article class="w-full px-10 pb-10 bg-[var(--background)] border">
		<h1 class="text-2xl lg:text-4xl font-bold uppercase mb-5">Mentions légales</h1>
	
		<h2>Éditeur du site</h2>
		<p><strong>forabetter.tech</strong> est édité par :</p>
		<ul>
			<li><strong>Lady Raccoon</strong></li>
			<li>SARL immatriculée sous le numéro SIRET <strong>937 817 823 00019</strong></li>
			<li>Siège social : Ramonville-Saint-Agne, France</li>
			<li>Email de contact : angele.henry[at]ladyraccoon.com</li>
		</ul>
	
		<h2 class="mt-5">Hébergement</h2>
		<p>Le site est hébergé par :</p>
		<ul>
			<li><strong>Vercel Inc.</strong></li>
			<li>440 N Barranca Ave #4133</li>
			<li>Covina, CA 91723</li>
			<li>
				<Link href="https://vercel.com" target="_blank" title="Ouvrir Vercel">
					Vercel
				</Link>
			</li>
		</ul>
	
		<h2 class="mt-5">Propriété intellectuelle</h2>
		<p>
			Tous les contenus présents sur ce site (textes, images, illustrations, vidéos, logos, etc.)
			sont la propriété exclusive d’Angele Henry, sauf indication contraire.
		</p>
		<p>
			Toute reproduction ou utilisation, totale ou partielle, sans autorisation préalable est interdite.
		</p>
	
		<h2 class="mt-5">Données personnelles</h2>
		<p>
			Les données collectées via les formulaires ou outils présents sur le site ne sont jamais
			revendues ni cédées. Elles sont utilisées uniquement dans le cadre prévu.
		</p>
		<p>
			Plus d’informations disponibles dans la
			<Link href="/privacy-policy" target="_self" title="Accéder à la Politique de confidentialité" linkType="outline">
				politique de confidentialité
			</Link>
		</p>
	
		<h2 class="mt-5">Cookies</h2>
		<p>
			Le site utilise des cookies pour améliorer l’expérience utilisateur. Tu peux refuser ou configurer leur
			usage dans les paramètres de ton navigateur.
		</p>
	
		<h2 class="mt-5">Loi applicable</h2>
		<p>
			Les présentes mentions légales sont régies par la législation française. En cas de litige,
			les tribunaux français seront seuls compétents.
		</p>
	</article>
</section>
