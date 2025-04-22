import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`$content/blog/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		error(404, `L'article ${params.slug} n'a pas été trouvé...`)
	}
}
