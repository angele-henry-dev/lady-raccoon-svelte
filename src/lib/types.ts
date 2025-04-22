export type Tags = 'dev' | 'frontend'

export type Post = {
	title: string;
	slug: string;
	date: string;
	description: string;
	tags: Tags[];
	cover: string;
	published: boolean;
}
