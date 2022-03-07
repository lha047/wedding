<script context="module" lang="ts">
	/** @type {import('./[slug]').Load} */
	import { browser } from '$app/env'
	import { addListener } from '$lib/stores/auth'
	export const prerender = true

	export async function load() {
		if (browser) {
			addListener()
		}
		return {
			props: {}
		}
	}
</script>

<script lang="ts">
	import { translate } from '$lib/translate'
	import { language } from '$lib/stores/language'
	import { isLoggedIn } from '$lib/stores/auth'
</script>

{#if $isLoggedIn}
	<h1 class="m-t__large color-primary">{translate('registrationSuccess')}</h1>
	<a href="/{$language}/program">{translate('seeProgram')}</a>
{/if}
