<script context="module" lang="ts">
	/** @type {import('./[slug]').Load} */
	import { browser } from '$app/env'
	import { addListener } from '$lib/stores/auth'

	export async function load({}) {
		if (browser) {
			console.log('adds listerner')
			addListener()
		}
		return {
			props: {}
		}
	}
</script>

<script lang="ts">
	import { language } from '$lib/stores/language'
	import { page } from '$app/stores'

	language.set($page.params.lang)
</script>

<main class="">
	<slot />
</main>
<footer />

<style lang="scss">
	footer {
		margin-bottom: 20rem;
	}
</style>
