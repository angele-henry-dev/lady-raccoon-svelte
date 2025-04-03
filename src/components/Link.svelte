<script lang="ts">
    let { href, label, target, color="primary" } = $props();
</script>

<a
    href="{href}"
    target="{target}"
    class="inline-block mt-6 px-6 py-3 
        rounded-full font-semibold 
        text-[var(--background)] hover:text-[var(--background)] 
        {color === "primary" ? 'bg-[var(--primary)]' : 'bg-[var(--secondary-light)]'} 
        {color === "primary" ? 'hover:bg-[var(--secondary-light)]' : 'hover:bg-[var(--primary)]'} 
        transition z-20"
>
    { label }
</a>
