import type { Post } from '$lib/types'

export async function GET({ fetch }) {
	const response = await fetch('/api/posts')
	const posts: Post[] = await response.json()

	const headers = { 'Content-Type': 'application/xml' }

	const xml = `
		<?xml version="1.0" encoding="utf-8"?>
		<rss version="2.0">
			<channel>
				<title>forabetter.tech blog</title>
				<description>Découvre nos articles sur l'accessibilité, la performance web, le développement, la vie de freelance et bien plus. Un blog pensé pour les techs.</description>
				<language>fr</language>
				<link>https://forabetter.tech/</link>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>https://forabetter.tech/blog/${post.slug}</link>
							<pubDate>${new Date(post.date).toUTCString()}</pubDate>
							<guid isPermaLink="true">https://forabetter.tech/blog/${post.slug}</guid>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim()

	return new Response(xml, { headers })
}
