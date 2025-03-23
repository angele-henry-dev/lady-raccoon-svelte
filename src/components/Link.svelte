<script>
    let { href, label, target } = $props();
</script>

<a href="{href}" target="{target}" class="inline-block mt-6 px-6 py-3 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-full hover:bg-[var(--secondary)] hover:text-[var(--background)] transition">
    { label }
</a>
