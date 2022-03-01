<script lang="ts" context="module">
	import { language } from '$lib/stores/language';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		if (params?.lang === 'en') {
			language.set('en');
			return {
				status: 301,
				redirect: '/en'
			};
		}
		return {
			status: 301,
			redirect: '/no/'
		};
	}
</script>
