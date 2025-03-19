<script lang="ts">
	import type { LayoutProps } from './$types';
	import '../app.css';
	import GoTop from '../components/GoTop.svelte';
	import Github from '../components/svg/Github.svelte';
	import LinkedIn from '../components/svg/LinkedIn.svelte';
	import Logo from '../components/svg/Logo.svelte';
	let { data, children }: LayoutProps = $props();
</script>

<nav class="sticky top-0 w-full flex flex-row justify-between items-center p-4 text-xl font-bold">
	<div><Logo /></div>
	<div class="flex flex-row justify-end items-center gap-5">
		{#each data.sections as section}
			<a href="/{section.slug}">{section.title}</a>
		{/each}
		<LinkedIn />
		<Github />
	</div>
	
	<!-- 
	<div>
		<ul class="list-none m-0 p-0 flex flex-row items-center gap-5">
			<li><Logo /></li>
			{#each data.sections as section}
				<li class="cursor-pointer">
					{#if section.children.length > 0}
						<div class="dropdown">
							<span>{section.title}</span>
							<ul class="dropdown-content list-none m-0 p-2 hidden border">
								{#each section.children as child}
									<li><a href="/{section.slug}/{child.slug}">{child.title}</a></li>
								{/each}
							</ul>
						</div>
					{:else}
						<a href="/{section.slug}">{section.title}</a>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
	-->
</nav>

<main class="flex flex-col items-center justify-start">{@render children()}</main>

<GoTop />

<footer class="mb-10 px-4">
	<div class="p-5 pt-10 grid grid-cols-1 md:grid-cols-3 gap-4 border-t">
		<div>
			<h1 class='mb-3 text-lg'>Qui suis-je ?</h1>
			<p>
				J’aide les entreprises à rendre leurs sites 
				conformes aux normes WCAG pour contribuer à un web accessible à tous.
			</p>
			<p class="py-5 flex flex-row gap-5"><LinkedIn /><Github /></p>
		</div>
		<div class="mb-3 md:text-right">
			<h1 class='mb-3 text-lg'>Contactez-moi</h1>
			<p class="mb-2">2 allée Anita Conti, A51
				<br>31520 Ramonville-Saint-Agne</p>
			<p>angele.henry[at]ladyraccoon.com</p>
		</div>
		<div class="mb-3 md:text-right">
			<h1 class='mb-3 text-lg'>Mentions légales</h1>
			<p><a href="/legal-notice">Mentions légales</a></p>
			<p><a href="/privacy-policy">Politique de confidentialité</a></p>
		</div>
	</div>
	<div class="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 border-t">
		<p>
			<span class="open-dyslexic">Lady Raccoon</span> {new Date().getFullYear()} ‧ Partagez, copiez, améliorez. La créativité est contagieuse.
		</p>
		<p class="md:text-right">Police d'écriture &apos;OpenDyslexic&apos; par Abelardo Gonzalez</p>
	</div>
</footer>

<style>
	nav {
		background: rgba(30, 42, 56, 0.65);
		backdrop-filter: blur(5px);
		z-index: 5;
	}

	/* .dropdown {
		position: relative;
	}
	.dropdown span::after {
		display: inline-block;
		content: "\276F";
		width: 1em;
		height: 1em;
		margin-left: 15px;
		text-align: center;
		vertical-align: middle;
		transform: rotate(90deg);
		transform-origin: 50% 50%;
		transition: all 0.35s;
	}

	.dropdown:hover {
		span::after {
			transform: rotate(270deg);
		}
		.dropdown-content {
			display: block;
		}
	}

	.dropdown-content {
		position: absolute;
		top: 26px;
		left: 0;
		padding: 10px;
		background-color: var(--background);
	} */
</style>
