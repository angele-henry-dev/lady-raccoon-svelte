<script>
	import '../app.css';
	import Github from './svg/Github.svelte';
	import LinkedIn from './svg/LinkedIn.svelte';
	import Discord from './svg/Discord.svelte';
	import Logo from './svg/Logo.svelte';

    let scrollHeight = 0;
    $: showNavBG = scrollHeight > 100;
</script>
  
<svelte:window bind:scrollY={scrollHeight} />

<nav
	class="{showNavBG ? 'bg' : ''} sticky top-0 w-full flex flex-row justify-between items-center p-4 text-xl font-bold z-20"
>
	<div><Logo /></div>
	<div class="flex flex-row justify-end items-center gap-5">
<!-- 		<a href="/commu">La communauté</a>
		<a href="/tools">Outils</a>
		<a href="/blog">Blog</a>
		<Discord />
		<LinkedIn />
		<Github /> -->
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

<style>
	nav {
		backdrop-filter: blur(5px);
        transition: background-color 1s ease;
	}
	nav.bg {
		background-color: rgba(30, 42, 56, 0.65);
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
