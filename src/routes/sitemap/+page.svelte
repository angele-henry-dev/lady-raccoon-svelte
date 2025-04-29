<script lang="ts">
	import { onMount } from 'svelte';
  
	// Types
	interface SiteMapNode {
	  title: string;
	  url: string;
	  children: SiteMapNode[];
	}
  
	// State
	let urlsSitemap: SiteMapNode[] = [];
  
	// Fetch Sitemap on mount
	onMount(async () => {
	  try {
		const response = await fetch('/sitemap.xml');
		const xmlText = await response.text();
		const parser = new DOMParser();
		const xml = parser.parseFromString(xmlText, 'application/xml');
		urlsSitemap = convertSitemapToJSON(xml);
	  } catch (error) {
		console.error('Error fetching XML:', error);
	  }
	});
  
	// Methods
	function convertSitemapToJSON(xml: Document): SiteMapNode[] {
	  const urls = Array.from(xml.getElementsByTagName('loc')).map(
		(node: Element) => node.textContent as string
	  );
  
	  const baseUrl = urls[0]; // Assuming the first URL is the root (home page)
	  const rootObject: SiteMapNode = {
		title: 'Home',
		url: baseUrl,
		children: [],
	  };
  
	  urls.slice(1).forEach((url) => {
		const title = generateTitleFromUrl(url);
		rootObject.children.push({
		  title: title,
		  url: url,
		  children: [],
		});
	  });
  
	  return [rootObject];
	}
  
	function generateTitleFromUrl(url: string): string {
	  const pathSegments = url.split('/').filter((segment) => segment);
	  let title = pathSegments[pathSegments.length - 1]
		.replace(/-/g, ' ') // Replace hyphens with spaces
		.replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
  
	  const dotIndex = title.lastIndexOf('.');
	  if (dotIndex !== -1) {
		title = title.slice(0, dotIndex); // Remove the file extension
	  }
	  return title;
	}
</script>
  
<style>
.sitemap ul {
    list-style: none;
}
.sitemap ul li {
    line-height: 1.5rem;
    vertical-align: top;
    position: relative;
}
.sitemap  ul ul {
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
}
.sitemap ul ul li {
    position: relative;
}
.sitemap ul ul li::before {
    content: '';
    display: inline-block;
    width: 3rem;
    height: 100%;
    border-left: 1px #ccc solid;
    position: absolute;
    top: -0.75rem;
}
.sitemap ul ul li::before {
    content: '';
    display: inline-block;
    width: 3rem;
    height: 1.5rem;
    border-bottom: 1px #ccc solid;
    position: absolute;
    top: -0.75rem;
}
.sitemap ul ul li a {
    margin-left: 3.75rem;
}
</style>

<svelte:head>
	<title>Plan du site - forabetter.tech</title>
	<meta name="description" content="Explore facilement toutes les pages de forabetter.tech grâce à notre plan du site. Un accès clair et rapide à l’ensemble du contenu." />
</svelte:head>

  
<div class="sitemap">
	<h1>Sitemap</h1>
	<div>
	  <ul class="list-none">
		{#each urlsSitemap as item, i}
		  <li>
			<a href={item.url} target="_self">{item.title}</a>
			{#if item.children.length > 0}
			  <ul>
				{#each item.children as child, j}
				  <li>
					<a href={child.url} target="_self">{child.title}</a>
					{#if child.children.length > 0}
					  <ul>
						{#each child.children as childBis, k}
						  <li>
							<a href={childBis.url} target="_self">{childBis.title}</a>
						  </li>
						{/each}
					  </ul>
					{/if}
				  </li>
				{/each}
			  </ul>
			{/if}
		  </li>
		{/each}
	  </ul>
	</div>
</div>
  
