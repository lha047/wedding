<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte'
	import { language } from '$lib/stores/language'
	import { page } from '$app/stores'
	export const prerender = true

	language.set($page.params.lang)
</script>

<heading>
	<div data-netlify-identity-button />
	<Navbar />
</heading>
<main class="">
	<slot />
</main>
<footer />

<style lang="scss" global>
	@import '../../public/css/style.css';
	footer {
		margin-bottom: 13rem;
	}
</style>
