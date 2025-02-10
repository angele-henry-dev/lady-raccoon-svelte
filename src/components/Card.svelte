<script>
	let { title, description, cta } = $props();
</script>

<div class="card lumos">
    <div class="card-info flex flex-col">
      <div class="title">{title}</div>
      <div class="description flex-grow">
        {#if description}
            {@render description()}
        {/if}
      </div>
      <div class="mt-5 p-5 text-center">
        {#if cta}
            {@render cta()}
        {/if}
      </div>
    </div>
</div>

<style>
.card {
    position: relative;
    width: 100%;
    z-index: 1;

    .card-info {
        padding: 20px;
        background: var(--background);
        border-width: 1px;
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }
    .description {
        margin-top: 30px;
        font-size: 1rem;
    }
    .title {
        text-align: center;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
}
</style>
