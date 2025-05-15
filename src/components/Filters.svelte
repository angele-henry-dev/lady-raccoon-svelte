<script lang="ts">
	import Button from "./Button.svelte";

    let { selectedTag = $bindable(), allTags = [], newFilter = false } = $props()
</script>

<div class="flex flex-col flex-wrap gap-2 mb-10">
    <p>Rechercher par catégorie&nbsp;:&nbsp;</p>

    <div class="flex flex-row flex-wrap gap-2">
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
</div>
