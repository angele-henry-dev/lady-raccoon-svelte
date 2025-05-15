<script lang="ts">
	import Button from "./Button.svelte";

    let { selectedTag = $bindable(), allTags = [] } = $props()
</script>

<div class="flex flex-col flex-wrap gap-2 mb-10">
    <p>Rechercher par catégorie&nbsp;:&nbsp;</p>

    <div class="flex flex-row flex-wrap gap-2">
        <Button
            handleClick={() => selectedTag = 'all'}
            active={selectedTag === 'all'}
            label="Afficher tous les éléments"
        >
            Tous
        </Button>

        {#each allTags as tag}
            <Button
                handleClick={() => selectedTag = tag}
                active={selectedTag === tag}
                label="Afficher les éléments de catégorie {tag}"
            >
                {tag}
            </Button>
        {/each}
    </div>
</div>
