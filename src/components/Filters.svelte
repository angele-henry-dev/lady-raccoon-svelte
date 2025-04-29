<script lang="ts">
    let { selectedTag = $bindable(), allTags = [], newFilter = false } = $props()
</script>

<div class="flex flex-wrap items-center justify-start gap-2 mb-20">
    Filtres&nbsp;:&nbsp;
    <button
        class="tag-button"
        onclick={() => selectedTag = 'all'}
        class:selected={selectedTag === "all"}
    >
        Tous
    </button>

    {#if newFilter}
        <button
            class="tag-button new"
            onclick={() => selectedTag = 'new'}
            class:selected={selectedTag === "new"}
        >
            Nouveautés
        </button>
    {/if}

    {#each allTags as tag}
        <button
            class="tag-button"
            onclick={() => selectedTag = tag}
            class:selected={selectedTag === tag}
        >
            {tag}
        </button>
    {/each}
</div>

<style>
.tag-button {
  padding: 5px 12px;
  border: 2px solid var(--primary);
  border-radius: 9999px;
  background: none;
  color: var(--primary);
  font-weight: bold;
  transition: all 0.3s;
  cursor: pointer;
}
.tag-button:hover,
.tag-button.selected {
  background: var(--primary);
  color: var(--background);
}

.tag-button.new {
  border: 2px solid var(--color-yellow);
  color: var(--color-yellow);
}
.tag-button.new:hover,
.tag-button.new.selected {
  background: var(--color-yellow);
  color: var(--background);
}
</style>
