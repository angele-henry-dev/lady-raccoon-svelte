<script>
	import Moon from "./Moon.svelte";
	import Plant from "./Plant.svelte";
	import Stars from "./Stars.svelte";
</script>

<div aria-hidden="true" class="hero relative h-[100px] sm:h-[250px] w-full overflow-x-clip">
    <Stars />
    <Moon classes="hidden sm:block absolute top-[10%] end-[10%] size-[100px]" full={false} />
    <div class="hidden sm:block absolute -bottom-[0] -start-[5%] sm:-start-[20vmin] w-[70%] h-[50%] bg-[var(--color-black-light)] rounded-t-[50%] rounded-b-none"></div>
    <div class="absolute bottom-[0] -end-[20vmin] w-[120%] h-[30%] bg-[var(--background)] rounded-t-[50%] rounded-b-none"></div>
    <Plant class="absolute bottom-[10px] start-[10px] w-[30px] sm:w-[50px]" />
</div>