<script lang="ts">
    let { title, badges, description } = $props();
</script>

<div class="card p-5 rounded-xl transition">
    <div class="flex justify-between items-start">
      <h2 class="text-xl font-semibold">{ title }</h2>
      <div>
        {#each badges as badge}
          <span class="text-sm px-2 py-1 ml-3 bg-[var(--primary)] text-[var(--background)] rounded-full">{ badge }</span>
        {/each}
      </div>
    </div>
    <p class="mt-2">{ description }</p>
</div>

<style scoped>
.card {
    backdrop-filter: blur(20px);
    background-color: rgba(255, 255, 255, 0.074);
    border: 1px solid rgba(255, 255, 255, 0.222);
}
.card:hover {
    box-shadow: 0px 0px 20px 1px #ffbb763f;
}
</style>
