<script lang="ts">
	import Button from "./Button.svelte";

    let { selectedTag = $bindable(), allTags = [], newFilter = false } = $props()
</script>

<div class="flex flex-wrap items-center justify-start gap-2 mb-20">
    Filtres&nbsp;:&nbsp;
    <Button
        handleClick={() => selectedTag = 'all'}
        active={selectedTag === 'all'}
        label="Tous les éléments"
    >
        Tous
    </Button>

    {#if newFilter}
        <Button
            handleClick={() => selectedTag = 'new'}
            active={selectedTag === "new"}
            label="Uniquement les nouveaux éléments"
            colored={true}
        >
            Nouveautés
        </Button>
    {/if}

    {#each allTags as tag}
        <Button
            handleClick={() => selectedTag = tag}
            active={selectedTag === tag}
            label="Uniquement les éléments de type {tag}"
        >
            {tag}
        </Button>
    {/each}
</div>
