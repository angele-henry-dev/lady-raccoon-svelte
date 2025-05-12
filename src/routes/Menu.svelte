<script>
	import Logo from "$components/design/Logo.svelte";
	import Link from "$components/Link.svelte";
</script>

<nav class="w-[95%] m-auto py-1 px-3 flex flex-row justify-between items-center bg-[var(--background-tr)] backdrop-blur-3xl border">
    <Logo />
    <div class="flex flex-row gap-5">
        <Link href="/tools" target="_self" linkType="text">Outils</Link>
        <Link href="/resources" target="_self" linkType="text">Ressources</Link>
        <Link href="/blog" target="_self" linkType="text">Blog</Link>
    </div>
</nav>
