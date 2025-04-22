<script>
	import Logo from "$components/design/Logo.svelte";
	import Link from "$components/Link.svelte";
</script>

<nav class="w-[95%] m-auto py-1 px-3 flex flex-row justify-between items-center bg-[var(--background-tr)] backdrop-blur-3xl border">
    <Logo />
    <div>
        <Link href="/tools" target="_self" title="Outils" label="Outils" colored={false} />
        <Link href="/resources" target="_self" title="Ressources" label="Ressources" colored={false} />
        <Link href="/blog" target="_self" title="Blog" label="Blog" colored={false} />
    </div>
</nav>
