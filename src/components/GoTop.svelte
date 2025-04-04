<script lang="ts">
	import Button from "./Button.svelte";

    let scrollHeight = 0;
    const gotoTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
    };
    $: showGotoTop = scrollHeight > 100;
</script>
  
{#if showGotoTop}
<div class="!fixed icon bottom-5 end-5 rounded-full p-3 text-xs font-medium leading-tight shadow-md transition duration-150 ease-in-out z-50">
    <Button handleClick={gotoTop} label="Go to top">
        <span class="[&>svg]:w-4">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
        </span>
    </Button>
</div>
{/if}

<svelte:window bind:scrollY={scrollHeight} />
