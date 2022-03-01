<script lang="ts" context="module">
	export const prerender = true;

	// /** @type {import('@sveltejs/kit').Load} */
	// export async function load({ params, fetch, session, stuff }) {
	// 	if (params?.lang === 'en') {
	// 		language.set('en');
	// 		return {
	// 			status: 301,
	// 			redirect: '/en'
	// 		};
	// 	}
	// 	return {
	// 		status: 301,
	// 		redirect: '/no/'
	// 	};
	// }
</script>

<script>
	import { language } from '$lib/stores/language';
</script>

<form name="test" method="POST" netlify netlify-honeypot="bot-field" action="{$language}/success">
	<input type="hidden" name="form-name" value="test" />
	<label for="name">Name</label>
	<input id="name" name="name" type="text" />
	<button type="submit">Send inn</button>
</form>
