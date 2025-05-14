<script>
	import Cloud from "./Cloud.svelte";
	import Moon from "./Moon.svelte";
	import Plant from "./Plant.svelte";
	import Star from "./Star.svelte";
	import Tree from "./Tree.svelte";
</script>

<div aria-hidden="true" class="board absolute top-0 start-0 size-full flex flex-col">
    <div class="flex-grow">
        <Star classes="absolute top-[14%] start-[3%] scale-100 size-[7px]" />
        <Star classes="absolute top-[20%] start-[27%] scale-100 size-[7px]" />
        <Star classes="absolute top-[70%] start-[20%] scale-100 size-[7px]" />
        <Star classes="absolute top-[19%] start-[69%] scale-100 size-[7px]" />

        <Star classes="absolute top-[13%] end-[7%] size-[18px] shiny" />
        <Star classes="absolute top-[49%] start-[40%] size-[12px] shiny" />

        <Cloud classes="hidden md:block absolute bottom-[20%] start-[30%] size-[50px]" />
        <Cloud classes="absolute top-[25%] end-[10%] size-[80px]" />
        <Cloud classes="hidden md:block absolute top-[15%] start-[35%] size-[120px]" />

        <div class="size-full grid grid-cols-1 md:grid-cols-2">
            <Moon classes="size-[150px] md:size-[200px] m-auto" />
            <div class="shadow size-full"></div>
        </div>
    </div>
    
    <div class="bg-[var(--color-blue-dark)] relative h-[10%] w-full flex flex-col items-center justify-center">
		<div aria-hidden="true" class="relative size-full overflow-x-clip">
			<div class="absolute bottom-[2vmin] -start-[5%] md:-start-[20vmin] w-[110%] md:w-[70%] h-[130%] bg-[var(--color-black-light)] rounded-t-[50%] rounded-b-none"></div>
			<div class="hidden md:block absolute bottom-[2vmin] -end-[20vmin] w-[80%] h-[120%] bg-[var(--background)] rounded-t-[50%] rounded-b-none"></div>
			<div class="absolute bottom-[0] start-0 w-full h-[80%] bg-[var(--background)]"></div>
		</div>
		<Tree class="hidden md:block absolute bottom-[70%] -start-[5%] w-[400px] h-[520px] scale-[70%] md:scale-100" />
		<Plant class="absolute bottom-[55%] end-[80%] md:end-[40%] w-[60px] scale-[70%] md:scale-100" />
		<img aria-hidden="true" src="/images/raccoon_dreaming.webp" alt="Raccoon working on his computer" width="170" height="150" class="absolute bottom-[50%] end-[5%] md:end-[15%] w-[100px] md:w-[145px] h-auto" />
		<Plant class="hidden md:block absolute bottom-[5%] end-[2%] w-[100px] scale-100" />
	</div>
</div>

<style>
    .board {
        --star-color: #fff;
        overflow: hidden;
        background: linear-gradient(
            to bottom,
            var(--background) 0%,
            var(--color-blue-dark) 70%
        );
        z-index: -1;
    }
    .shadow {
        background-image: radial-gradient(circle, hsla(219, 35%, 10%, 0.7), transparent 70%);
    }
</style>
