<script context="module" lang="ts">
	export const prerender = true
</script>

<script lang="ts">
	import { translate } from '$lib/translate'
	import EmailIcon from '$lib/components/EmailIcon.svelte'
	import PhoneIcon from '$lib/components/PhoneIcon.svelte'
	import { isLoggedInNetlify } from '$lib/stores/netlifyStore'
	import { page } from '$app/stores'
	import { language } from '$lib/stores/language'

	if ($page.params.lang === 'en') {
		language.set('en')
	}
</script>

{#if $isLoggedInNetlify}
	<div class="wrapper">
		<div class="layout-grid layout-grid--stack hero hero--image-stack ">
			<img src="/hart.jpg" alt="Lisa og ståle" />
			<div class="text">
				<h1 class="getting h3 type-writer">{translate('gettingMarried')}</h1>
				<p class="lisa-staale script-large backlash-alt">{translate('lisaAndStaale')}</p>
				<p class="date h4 type-writer">{translate('theDate')}</p>
			</div>
		</div>
		<div class="container">
			<h2 class="backlash-alt">{translate('welcomeWedding')}</h2>
			{@html translate('inviteWeddingWeekend')}
			{@html translate('ceremonyDay')}

			<p class="dresscode">
				{translate('dressCodeText')}
			</p>
			<p class="rsvp">
				{@html translate('rsvpLink')}
			</p>
		</div>
		<div class="card-wrapper m-t__large">
			<div class="card card__person ivory layout-grid layout-grid--column">
				<div class="layout-grid">
					<h3 class="card-person__title backlash-alt">{translate('bride')}</h3>
					<span>Lisa Halvorsen</span>
					<div class="with-icon">
						<EmailIcon />
						<a class="email" href="mailto:halvorsen.lisa@gmail.com">halvorsen.lisa@gmail.com</a>
					</div>
					<div class="with-icon">
						<PhoneIcon />
						<a href="tel:+4795184494">+47 95 18 44 96</a>
					</div>
				</div>
				<div class="image-wrapper">
					<img src="/lisa.jpg" alt="Lisa Halvorsen" />
				</div>
			</div>
			<div class="card card__person ivory layout-grid layout-grid--column">
				<div class="layout-grid" style="row-gap: 0">
					<h3 class="card-person__title backlash-alt">{translate('groom')}</h3>
					<span>Ståle Berg</span>
					<div class="with-icon">
						<EmailIcon />
						<a href="mailto:staabe2@live.no">staabe2@live.no</a>
					</div>
					<div class="with-icon">
						<PhoneIcon />
						<a href="tel:+4741842894">+47 41 84 28 94</a>
					</div>
				</div>
				<div class="image-wrapper">
					<img src="/staale.jpg" alt="Ståle Berg" />
				</div>
			</div>
			<div class="card card__person ivory layout-grid layout-grid--column">
				<div class="layout-grid" style="row-gap: 0">
					<h3 class="card-person__title backlash-alt">Toastmaster</h3>
					<span>Torbjørn Tessem</span>
					<div class="with-icon">
						<EmailIcon />
						<a class="email" href="mailto:torbjorn.tessem@gmail.com?subject=Lisa og Ståles bryllup">
							torbjorn.tessem@gmail.com
						</a>
					</div>
					<div class="with-icon">
						<PhoneIcon />
						<a href="tel:+4791534581">+47 91 53 45 81</a>
					</div>
				</div>
				<div class="image-wrapper">
					<img src="/torbjorn.jpg" alt="Lisa Halvorsen" />
				</div>
			</div>
		</div>
		<div class="container">
			<h3>{translate('accommodation')}</h3>
			<p>
				{@html translate('accommodationIndexText')}
			</p>
			<h3>{translate('giftlist')}</h3>
			<p class="gifts">
				{translate('giftlistText')}
			</p>
			<h3>{translate('speech')}</h3>
			<p class="toastmaster">
				{translate('toastMasterText')}
				<a href="mailto:torbjorn.tessem@gmail.com?subject=Lisa og Ståles bryllup"
					>torbjorn.tessem@gmail.com</a
				>
				{translate('speechText')}
			</p>
		</div>

		<img id="korea-portrait" class="m-t__large" src="/korea_portrait.jpg" alt="Lisa og ståle" />
	</div>
{:else}
	<div class="wrapper">
		<div class="text">
			<h1 class="getting h3 type-writer">{translate('gettingMarried')}</h1>
			<p class="lisa-staale script-large backlash-alt">{translate('lisaAndStaale')}</p>
			<p class="date h4 type-writer">{translate('theDate')}</p>
		</div>
	</div>
{/if}

<style lang="scss">
	@use '../../sass/theme' as *;
	.container {
		h3 {
			margin-top: 2rem;
			margin-bottom: 0.5rem;
		}
	}
	.card-wrapper {
		.card-person__title {
			font-size: 3rem;
		}
		.image-wrapper {
			border-radius: 50%;
			margin: 0;
			padding: 0;
		}
		img {
			margin: 0;
			padding: 0;
			display: block;
			border-radius: 50%;
		}
	}

	p + p {
		margin-top: 1rem;
	}
	.getting {
		//font-size: x-large;
	}
	.date {
		//font-size: large;
	}
	.lisa-staale {
		//line-height: clamp(5rem, 11vw + 1rem, 10rem);
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

		img {
			object-position: center; /* Center the image within the element */
			width: 100%;
		}
	}
	.container {
		margin-top: var(--spacer-large);
	}
	.wrapper {
		width: 100%;
	}
</style>
