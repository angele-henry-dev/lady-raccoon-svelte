<script lang="ts">
    let { title, badge, description } = $props();
</script>

<div class="card bg-[rgba(255, 255, 255, 0.074)] border border-[rgba(255, 255, 255, 0.222)] p-5 rounded-xl transition">
    <div class="flex justify-between items-start">
      <h2 class="text-xl font-semibold">{ title }</h2>
      {#if badge}
        <span class="text-sm px-2 py-1 bg-[var(--primary)] text-[var(--background)] rounded-full">{ badge }</span>
      {/if}
    </div>
    <p class="mt-2">{ description }</p>
</div>

<style scoped>
.card {
  backdrop-filter: blur(20px);
}
.card:hover {
  box-shadow: 0px 0px 20px 1px #ffbb763f;
  border: 1px solid rgba(255, 255, 255, 0.454);
}
</style>