<script lang="ts">
	let openIndex: number | null = null;

	const faqs = [
		{
			question: "Qui peut rejoindre forabetter.tech ?",
			answer: "Développeur·euse, UX/UI, DevOps, architecte, étudiant·e ou autodidacte… Si tu t'intéresses à la tech et que tu aimes partager dans la bienveillance, tu es chez toi !"
		},
		{
			question: "Est-ce que la communauté est gratuite ?",
			answer: "Oui ! Rejoindre la communauté est 100% gratuit. Certains contenus avancés, ateliers ou accompagnements pourront être proposés en option payante, mais le cœur de la commu reste ouvert à toutes et tous."
		},
		{
			question: "Est-ce que je peux poser des questions 'basiques' ?",
			answer: "Oui, mille fois oui. Il n’y a pas de question bête ici. Que tu sois junior ou senior, tout le monde a ses zones d’ombre. L’entraide est notre moteur ❤️"
		},
		{
			question: "À quoi sert forabetter.tech si je suis déjà sur Twitter ou Mastodon ?",
			answer: "Sur forabetter.tech, on prend le temps d’échanger, de se soutenir, de bosser ensemble (coworking), d’apprendre... C’est plus intime, plus focus, moins scroll."
		},
		{
			question: "Est-ce que je dois être dispo tous les jours ?",
			answer: "Pas du tout. Tu viens quand tu veux, à ton rythme. Même pour lurker tranquille dans ton coin, tu es le·la bienvenu·e."
		},
		{
			question: "Comment rejoindre ?",
			answer: "Un petit clic suffit : <a href='https://discord.gg/TU2Xaf9RKb' target='_blank'>[Lien vers le Discord]</a>"
		}
	];

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section class="w-full max-w-3xl mx-auto px-4 py-10">
	<h2 class="text-3xl sm:text-4xl font-bold mb-6">FAQ</h2>

	<ul class="space-y-4">
		{#each faqs as faq, index}
			<li class="border rounded-lg overflow-hidden">
				<button
					on:click={() => toggle(index)}
					class="w-full text-left p-4 font-semibold flex justify-between items-center"
				>
					<span>{faq.question}</span>
					<span class="text-xl">{openIndex === index ? "-" : "+"}</span>
				</button>

				{#if openIndex === index}
					<div class="p-4 border-t">
						{@html faq.answer}
					</div>
				{/if}
			</li>
		{/each}
	</ul>
</section>
