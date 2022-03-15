<script context="module" lang="ts">
	/** @type {import('./[slug]').Load} */
	import { browser } from '$app/env'
	import { addListener } from '$lib/stores/auth'
	export const prerender = true

	export async function load() {
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
	import { isLoggedIn } from '$lib/stores/auth'
	import { translate } from '$lib/translate'
	import RegistrationForm from '$lib/components/register-form.svelte'
	import EmailIcon from '$lib/components/EmailIcon.svelte'
	import PhoneIcon from '$lib/components/PhoneIcon.svelte'
</script>

{#if $isLoggedIn}
	<div class="wrapper">
		<div class="layout-grid layout-grid--stack hero hero--image-stack ">
			<img src="/hart.jpg" alt="Lisa og ståle" />
			<div class="text">
				<h1 class="getting type-writer">{translate('gettingMarried')}</h1>
				<p class="lisa-staale backlash-alt">{translate('lisaAndStaale')}</p>
				<p class="date type-writer">{translate('theDate')}</p>
			</div>
		</div>
		<div class="container">
			<!--			<h2 class="lf-script">{translate('welcomeWedding')}</h2>-->
			<!--			<h2 class="backlash-small">{translate('welcomeWedding')}</h2>-->
			<h2 class="backlash-alt">{translate('welcomeWedding')}</h2>
			<!--			<h2 class="paprika">{translate('welcomeWedding')}</h2>-->
			<!--			<h2 class="type-writer">{translate('welcomeWedding')}</h2>-->
			{@html translate('inviteWeddingWeekend')}
			{@html translate('ceremonyDay')}

			<p class="dresscode">
				{translate('dressCodeText')}
			</p>
			<p class="rsvp">
				<a href="/nb/registration">Svar på invitasjon</a>
			</p>
		</div>
		<div class="card-wrapper m-t__large">
			<div class="card card__person ivory layout-grid layout-grid--column">
				<div class="layout-grid">
					<h3 class="card-person__title backlash-alt">Brud</h3>
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
					<img src="/hart.jpg" alt="Lisa Halvorsen" />
				</div>
			</div>
			<div class="card card__person ivory layout-grid layout-grid--column">
				<div class="layout-grid" style="row-gap: 0">
					<h3 class="card-person__title backlash-alt">Brudgom</h3>
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
						<a href="tel:+4741842894">+47 41 84 28 94</a>
					</div>
				</div>
				<div class="image-wrapper">
					<img src="/hart.jpg" alt="Lisa Halvorsen" />
				</div>
			</div>
		</div>
		<div class="container">
			<h3>Overnatting</h3>
			<p>
				Vi kommer til å bo på Sundvolden Hotell hele helgen. For de av dere som har lyst til å ta
				overnattingen der sammen med oss, se <a href="/nb/sleeping">informasjon om overnatting</a>.
			</p>
			<h3>Gaveliste</h3>
			<p class="gifts">
				Den største gaven dere kan gi er å bli med å feire sammen med oss. Som de fleste
				veletablerte par har vi det vi trenger, og har ingen store ønsker. Men hvis du føler at
				tradisjon tilsier at du må gi oss noe så kommer en liste etterhvert.
			</p>
			<h3>Taler</h3>
			<p class="toastmaster">
				Har du lyst til å holde tale, ber vi om at du sier fra til toastmaster: Torbjørn Tessem <a
					href="mailto:torbjorn.tessem@gmail.com?subject=Lisa og Ståles bryllup"
					>torbjorn.tessem@gmail.com</a
				>
			</p>
		</div>

		<img id="korea-portrait" class="m-t__large" src="/korea_portrait.jpg" alt="Lisa og ståle" />
	</div>
{:else}
	<div class="wrapper">
		<div class="text">
			<h1>{translate('gettingMarried')}</h1>
			<p>{translate('lisaAndStaale')}</p>
			<p>{translate('theDate')}</p>
		</div>
	</div>
{/if}
<RegistrationForm class="inclusively-hidden" />

<style lang="scss">
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
			//width: 100%;
			//height: 100%;
			//background-color: #000;
			border-radius: 50%;
			margin: 0;
			padding: 0;
		}
		img {
			//width: 100%;
			//height: 100%;
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
		font-size: x-large;
	}
	.date {
		font-size: large;
	}
	.lisa-staale {
		font-size: 10rem;
		line-height: 7rem;
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

		img {
			object-position: center; /* Center the image within the element */
			//height: 20rem;
			width: 100%;
			@media only screen and (min-width: 768px) {
				//height: 30rem;
			}
		}
	}
	.container {
		margin-top: var(--spacer-large);
	}
	.wrapper {
		width: 100%;
	}
</style>
