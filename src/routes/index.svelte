<script context="module" lang="ts">
	import { browser } from '$app/env'
	import { language } from '$lib/stores/language'
	export const prerender = true

	export async function load({ params, fetch, session, stuff }) {
		if (browser) {
			if (params.lang === undefined) {
				return {
					status: 300,
					redirect: '/nb'
				}
			} else if (params.lang === 'en') {
				language.set('en')
			}
		}
		return {
			status: 200,
			props: {}
		}
	}
</script>

<script lang="ts">
	import { translate } from '$lib/translate'
</script>

<svelte:head>
	<title>{translate('lisaAndStaalesWedding')}</title>
</svelte:head>

	<div class="wrapper">
		<div class="layout-grid layout-grid--stack hero hero--image-stack ">
			<img src="/hart.jpg" alt="Lisa og ståle" />
			<div class="text">
				<h1 class="getting">{translate('gettingMarried')}</h1>
				<p class="lisa-staale">{translate('lisaAndStaale')}</p>
				<p class="date">{translate('theDate')}</p>
			</div>
		</div>
	</div>

<style lang="scss">
	@use '../sass/theme' as *;
	img {
		object-position: center; /* Center the image within the element */
		width: 100%;
	}
	.date {
		font-size: large;
	}
	.lisa-staale {
		font-size: xx-large;
	}
	.text {
		--text-border: 2px solid var(--color-dark-green);

		background-color: rgba(75, 67, 64, 0.5);
		width: 100%;
		height: 100%;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--color-ivory);
		padding: 1rem 1rem 2rem 1rem;
		justify-content: center;

		@media only screen and (min-width: $breakpoint) {
			padding: 3rem 12rem;
		}
	}
	.hero {
		--text-border: 4px solid var(--color-primary);
		border-top: var(--text-border);
		border-bottom: var(--text-border);
	}
	.container {
		margin-top: var(--spacer-large);
	}
	.wrapper {
		width: 100%;
	}
</style>
