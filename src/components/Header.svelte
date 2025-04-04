<script lang="ts">
	import '../app.css';
	import Logo from './design/Logo.svelte';

    let scrollHeight = 0;
    $: showNavBG = scrollHeight > 100;
</script>
  
<svelte:window bind:scrollY={scrollHeight} />


<header
	class="{showNavBG ? 'bg' : ''} sticky top-0 w-full flex flex-row justify-between items-start p-4 text-xl text-right font-bold z-50"
>
  <div><Logo /></div>

  <input class="side-menu" type="checkbox" id="side-menu"/>
  <label class="hamb cursor-pointer pt-6" for="side-menu"><span class="hamb-line"></span></label>
  <nav class="nav overflow-hidden w-full absolute top-[82px] left-0">
      <ul class="menu">
          <li><a href="/tools">Outils</a></li>
          <li><a href="/resources">Ressources</a></li>
          <!-- <li><a href="/blog">Blog</a></li> -->
          <li><a href="/about">A propos</a></li>
      </ul>
  </nav>

<!-- PLAN -->
<!-- 
1. Homepage (Communauté)
- Parfait pour expliquer l’ADN de forabetter.tech : bienveillance, entraide, montée en compétences, etc. 
- Un calendrier ou agenda des prochains lives / coworkings ou autres événements (confs, etc.)
-->
</header>

<style>
  @media (prefers-reduced-motion: no-preference) {
    header {
      transition: background-color 1s ease;
    }
  }
  header.bg {
		background-color: rgba(32, 45, 76, 0.95);
  }

  /* Nav menu */
  .menu {
		background-color: var(--background);
  }
  .menu a {
      display: block;
      padding: 10px;
  }
  .nav {
      max-height: 0;
      transition: max-height .3s ease-out;
  }

  /* Menu Icon */
  .hamb-line {
      position: relative;
      background: var(--foreground);
      display: block;
      height: 2px;
      width: 24px;
  }
  .hamb-line::before,
  .hamb-line::after {
      background: var(--foreground);
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      transition: all .2s ease-out;
      width: 100%;
  }
  .hamb-line::before {
      top: 5px;
  }
  .hamb-line::after {
      top: -5px;
  }
  .side-menu {
      display: none;
  }

  /* Toggle menu icon */
  .side-menu:checked ~ nav{
    max-height: fit-content;
  }
  .side-menu:checked ~ .hamb .hamb-line {
    background: transparent;
  }
  .side-menu:checked ~ .hamb .hamb-line::before {
    transform: rotate(-45deg);
    top:0;
  }
  .side-menu:checked ~ .hamb .hamb-line::after {
    transform: rotate(45deg);
    top:0;
  }

  /* Responsiveness */
  @media (min-width: 768px) {
    .nav{
      max-height: none;
      top: 0;
      position: relative;
      float: right;
      width: fit-content;
      background-color: transparent;
    }
    .menu li{
      float: left;
    }

    .hamb{
      display: none;
    }
  }
</style>
