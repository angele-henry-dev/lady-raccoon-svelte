import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		sections: [
			{
                slug: 'tools',
                title: 'Tools',
                children: [
                    { slug: 'contrast-checker', title: 'Contrast checker' }
                ]
            }
		]
	};
};
