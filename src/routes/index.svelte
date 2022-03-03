<script lang="ts" context="module">
	export const prerender = true;
	/** @type {import('./[slug]').Load} */
	import { browser } from '$app/env';
	import { addListener } from '$lib/stores/auth';

	export async function load({}) {
		// const url = `https://cms.example.com/article/${params.slug}.json`;
		// const response = await fetch(url);
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
	import { language } from '$lib/stores/language';
	import { isLoggedIn } from '$lib/stores/auth';

	console.log('index rote');
</script>

<div class="wrapper">
	<div class="text">
		<h1>Vi gifter oss</h1>
		<p>Lisa og Ståle</p>
		<p>02.07.2021</p>
	</div>
	<!--{#if $isLoggedIn}-->
	<!--	<form-->
	<!--		name="test"-->
	<!--		method="POST"-->
	<!--		netlify-->
	<!--		netlify-honeypot="bot-field"-->
	<!--		action="{$language}/success"-->
	<!--	>-->
	<!--		<input type="hidden" name="form-name" value="test" />-->
	<!--		<label for="name">Name</label>-->
	<!--		<input id="name" name="name" type="text" />-->
	<!--		<button type="submit">Send inn</button>-->
	<!--	</form>-->
	<!--{/if}-->
</div>
<!--<style lang="scss">-->
<!--	img {-->
<!--		object-position: center; /* Center the image within the element */-->
<!--		//height: 20rem;-->
<!--		width: 100%;-->
<!--		@media only screen and (min-width: 768px) {-->
<!--			//height: 30rem;-->
<!--		}-->
<!--	}-->
<!--	.date {-->
<!--		font-size: large;-->
<!--	}-->
<!--	.lisa-staale {-->
<!--		font-size: xx-large;-->
<!--	}-->
<!--	.text {-->
<!--		&#45;&#45;text-border: 2px solid var(&#45;&#45;color-dark-green);-->

<!--		background-color: rgba(75, 67, 64, 0.5);-->
<!--		//overflow: hidden;-->
<!--		width: 100%;-->
<!--		height: 100%;-->
<!--		z-index: 2;-->
<!--		display: flex;-->
<!--		flex-direction: column;-->
<!--		align-items: center;-->
<!--		color: var(&#45;&#45;color-ivory);-->
<!--		//color: var(&#45;&#45;color-primary);-->
<!--		padding: 1rem 1rem 2rem 1rem;-->
<!--		justify-content: center;-->
<!--		//border-top: var(&#45;&#45;text-border);-->
<!--		//border-bottom: var(&#45;&#45;text-border);-->

<!--		@media only screen and (min-width: 768px) {-->
<!--			padding: 3rem 12rem;-->
<!--		}-->
<!--	}-->
<!--	.hero {-->
<!--		//&#45;&#45;text-border: 4px solid var(&#45;&#45;color-dark-green);-->
<!--		&#45;&#45;text-border: 4px solid var(&#45;&#45;color-primary);-->
<!--		border-top: var(&#45;&#45;text-border);-->
<!--		border-bottom: var(&#45;&#45;text-border);-->
<!--	}-->
<!--	.container {-->
<!--		margin-top: var(&#45;&#45;spacer-large);-->
<!--	}-->
<!--	.wrapper {-->
<!--		width: 100%;-->
<!--	}-->
<!--</style>-->
