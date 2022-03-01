import preprocess from 'svelte-preprocess';
import path from 'path';
import netlify from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: netlify({ split: false }),
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components')
				}
			}
		},
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			entries: ['*']
		}
	}
};

export default config;
