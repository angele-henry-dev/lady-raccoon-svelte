<script lang="ts">
	import '../../app.css';
	import Logo from '../design/Logo.svelte';

  let scrollHeight = 0;
  $: showNavBG = scrollHeight > 100;
</script>
  
<svelte:window bind:scrollY={scrollHeight} />

<header class="h-[70px] fixed w-full flex flex-row justify-center items-start z-50">
  <Logo />
</header>

<style>
  @media (prefers-reduced-motion: no-preference) {
    header {
      transition: background-color 1s ease;
    }
  }
  header {
		background: var(--background);
    background: linear-gradient(180deg,var(--background) 0%, hsla(235, 31%, 11%, 0.8) 55%, rgba(0, 0, 0, 0) 100%);
  }
</style>
