<script>
	import Cloud from "./Cloud.svelte";
	import Moon from "./Moon.svelte";
	import Star from "./Star.svelte";
</script>

<div aria-hidden="true" class="board absolute top-0 start-0 size-full">
    <Star classes="absolute top-[10%] start-[3%] scale-100 size-[7px]" />
    <Star classes="absolute top-[20%] start-[27%] scale-100 size-[7px]" />
    <Star classes="absolute top-[9%] start-[59%] scale-100 size-[7px]" />
    <Star classes="absolute top-[19%] start-[69%] scale-100 size-[7px]" />

    <Star classes="absolute top-[13%] end-[7%] size-[18px] shiny" />
    <Star classes="absolute top-[49%] start-[40%] size-[12px] shiny" />

    <Cloud classes="absolute bottom-[20%] start-[30%] size-[50px]" />
    <Cloud classes="absolute top-[25%] end-[10%] size-[80px]" />
    <Cloud classes="absolute top-[10%] start-[35%] size-[120px]" />

    <div class="size-full grid grid-cols-2">
        <Moon classes="size-[150px] md:size-[200px] m-auto" />
        <div class="shadow size-full"></div>
    </div>
</div>

<style>
    .board {
        --star-color: #fff;
        overflow: hidden;
        z-index: 0;
    }
    .shadow {
        background-image: radial-gradient(circle, hsla(219, 35%, 10%, 0.7), transparent 70%);
    }
</style>
