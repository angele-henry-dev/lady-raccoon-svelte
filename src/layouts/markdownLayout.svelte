<script lang="ts">
    import Link from '$components/Link.svelte';

    export let components = {
      a: Link
    };
</script>
  
<slot {components} />
