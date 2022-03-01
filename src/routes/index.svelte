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

<script lang="ts">
	import { translate } from '$lib/translate';
	import { language } from '$lib/stores/language';
</script>

<div class="wrapper">
	<div class="layout-grid layout-grid--stack hero hero--image-stack ">
		<img src="/hart.jpg" alt="Lisa og ståle" />
		<div class="text">
			<h1>Vi gifter oss</h1>
			<p class="lisa-staale">Lisa og Ståle</p>
			<p class="date">02.07.2022</p>
		</div>
	</div>
	<div class="container">
		<p>{@html translate('inviteWeddingWeekend')}</p>
		<p>
			{@html translate('weddingDay')}
		</p>
	</div>
</div>

<form name="test" method="POST" netlify netlify-honeypot="bot-field" action="{$language}/success">
	<input type="hidden" name="form-name" value="test" />
	<label for="name">Name</label>
	<input id="name" name="name" type="text" />
	<button type="submit">Send inn</button>
</form>

<style lang="scss">
	img {
		object-position: center; /* Center the image within the element */
		//height: 20rem;
		width: 100%;
		@media only screen and (min-width: 768px) {
			//height: 30rem;
		}
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
		//overflow: hidden;
		width: 100%;
		height: 100%;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--color-ivory);
		//color: var(--color-primary);
		padding: 1rem 1rem 2rem 1rem;
		justify-content: center;
		//border-top: var(--text-border);
		//border-bottom: var(--text-border);

		@media only screen and (min-width: 768px) {
			padding: 3rem 12rem;
		}
	}
	.hero {
		//--text-border: 4px solid var(--color-dark-green);
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
