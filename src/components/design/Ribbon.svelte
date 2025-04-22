<script lang="ts">
    export let text: string;
    export let color: string = "var(--secondary)";
    export let type: "up" | "down" | "slant-up" | "slant-down" = "up";
</script>

<div class="ribbon {type} w-fit rounded-none text-[var(--background)] text-center text-sm font-bold bg-[{color}] px-2 pt-1 pb-3 ml-4">
    {text}
</div>
  
  <style>
    .ribbon.slant-up {
        clip-path: polygon(0 0, 100% 0, 100% calc(100% - 12px), 50% calc(100% - 6px), 0 100%);
    }
    .ribbon.slant-down {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - 6px), 0 calc(100% - 12px));
    }
    .ribbon.down {
        clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8px), 50% 100%, 0 calc(100% - 8px));
    }
    .ribbon.up {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - 8px), 0 100%);
    }
</style>
