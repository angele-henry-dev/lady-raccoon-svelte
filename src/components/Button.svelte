<script>
    let { handleClick, label } = $props();
</script>

<button 
    class="cta-button my-5 sm:text-xl font-bold z-20"
    aria-label={label} 
    onclick={handleClick} 
>
    {label}
</button>

<style>
    .cta-button {
        padding: 0.8rem 2rem;
        color: var(--background);
        background-color: var(--primary);
        border-radius: 30px;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    }

    .cta-button:hover {
        transform: scale(1.05);
        box-shadow: 0 0 10px var(--secondary);
        background-color: var(--secondary);
    }
</style>
