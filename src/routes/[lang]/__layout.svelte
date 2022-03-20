<script context="module" lang="ts">
	/** @type {import('./[slug]').Load} */
	import { browser } from '$app/env'

</script>

<script lang="ts">
	import { language } from '$lib/stores/language'
	import { page } from '$app/stores'

	// if (params.lang === undefined) {
	// 	language.set('nb')
	// }else {

	// 	language.set(params?.lang)
	// }
</script>

<main class="">
	<slot />
</main>
<footer />

<style lang="scss">
</style>
