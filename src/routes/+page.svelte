<script>
	import BackgroundRetro from "./_components/design/BackgroundRetro.svelte";
	import BackgroundStars from "./_components/design/BackgroundStars.svelte";
</script>

<svelte:head>
	<title>Lady Raccoon • Concevoir des sites webs accessibles, rapides et visibles</title>
	<meta name="Description" content="Concevoir des sites webs accessibles, rapides et visibles" />
</svelte:head>

<BackgroundStars />

<div class='text-center my-20 container mx-auto'>
    <div class="text-center main-title">
      Transformez votre site
      <div class="main-title-container flex flex-row justify-center gap-3 highlight">
        <div class="main-title-container__">
          <ul class="main-title-container__list">
            <li class="main-title-container__list__item">accessible</li>
            <li class="main-title-container__list__item">rapide</li>
            <li class="main-title-container__list__item">visible</li>
          </ul>
        </div>
      </div>
    </div>
</div>

<BackgroundRetro />

<style>
.main-title {
    font-size: 3em;
}
  
.main-title-container {
    height: 1em;
}
.main-title-container .main-title-container__ {
    overflow: hidden;
}
.main-title-container__list {
    list-style: none;
    margin: 0;
    padding: 0;
    animation-name: swipe;
    animation-duration: 10s;
    animation-iteration-count: infinite;
}
@media (prefers-reduced-motion: reduce) {
    .main-title-container__list {
      animation: none;
    }
}
@keyframes swipe {
    0%,
    12%,
    100% {
      transform: translate3d(0, -5%, 0);
    }
    33%,
    46% {
      transform: translate3d(0, -40%, 0);
    }
    66%,
    79% {
      transform: translate3d(0, -70%, 0);
    }
}
</style>
