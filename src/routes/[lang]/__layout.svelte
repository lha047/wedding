<script context="module" lang="ts">
	/** @type {import('./[slug]').Load} */
	import { browser } from '$app/env';
	import { addListener } from '$lib/stores/auth';

	export async function load({}) {
		if (browser) {
			console.log('adds listerner');
			addListener();
		}
		return {
			props: {}
		};
	}
</script>

<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<heading>
	<Navbar />
</heading>
<main class="">
	<slot />
</main>
<footer />

<style lang="scss" global>
	footer {
		margin-bottom: 13rem;
	}
</style>
