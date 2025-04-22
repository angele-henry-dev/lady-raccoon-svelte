<script>
	import Header from "../../components/design/Header.svelte";
	import Plant from "../../components/design/Plant.svelte";
	import Link from "../../components/Link.svelte";
</script>

<svelte:head>
	<title>Mentions légales | forabetter.tech</title>
	<meta name="description" content="Découvrez les informations légales du site forabetter.tech : éditeur, hébergeur, propriété intellectuelle, données personnelles et cookies." />
	<meta property="og:title" content="Mentions légales | forabetter.tech" />
	<meta property="og:description" content="Toutes les informations légales sur le site forabetter.tech. Transparence, confidentialité et conformité au rendez-vous." />
	<meta property="og:image" content="https://forabetter.tech/og-legal.jpg" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Mentions légales | forabetter.tech" />
	<meta name="twitter:description" content="Transparence, confidentialité et conformité sur le site forabetter.tech." />
	<meta name="twitter:image" content="https://forabetter.tech/og-legal.jpg" />
</svelte:head>

<Header />
<section class="relative w-full max-w-5xl mx-auto px-4 mb-10 sm:py-10">
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
		<li><Link href="https://vercel.com" target="_blank" title="Vercel" label="Ouvrir dans une nouvelle fenêtre Vercel" /></li>
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
		<Link href="/privacy-policy" target="_self" title="Politique de confidentialité" label="Plus d’informations disponibles dans la politique de confidentialité" />
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

</section>
<Plant class="absolute bottom-0 end-0 w-[90px] sm:w-[150px]" />
