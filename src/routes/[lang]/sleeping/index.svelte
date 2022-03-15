<script lang="ts">
	import { translate } from '$lib/translate'
	import { isLoggedIn } from '$lib/stores/auth'
	import Card from '$lib/components/Card.svelte'

	export const prerender = true
	const cards = [
		{
			title: `<h3 class="card-title">${translate('fromHfs')}</h3>`,
			list: [
				`${translate('bussToOslo')}`,
				`${translate('exitSundvollen')}`,
				`${translate('walkSundvollen')}`,
				`<a href="https://www.brakar.no/">${translate('timeTable')}</a>`
			],
			cardClass: 'ivory'
		},
		{
			title: `<h3 class="card-title">${translate('fromOslo')}</h3>`,
			list: [
				`${translate('bussToHfs')}`,
				`${translate('exitSundvollen')}`,
				`${translate('walkSundvollen')}`,
				`<a href="https://www.brakar.no/">${translate('timeTable')}</a>`
			],
			cardClass: 'green'
		}
	]
</script>

{#if $isLoggedIn}
	<div class="container">
		<h1 class="m-t__large color-primary">{translate('accommodation')}</h1>
		{@html translate('accommodationText')}
		<div>
			<h2>{translate('sundvoldenContactInfo')}</h2>
			<p class="m-t">
				E-post: <a href="mailto:sundvolden@sundvolden.no">sundvolden@sundvolden.no</a>
			</p>
			<p>Telefon: <a href="tel:+4732162100">(+47) 32 16 21 00</a></p>
		</div>
		<h2>{translate('accommodationGettingThere')}</h2>
		<p>{translate('accommodationGettingThereText')}</p>
		<h2 class="">Offentlig transport</h2>
	</div>
	<div class="card-wrapper">
		{#each cards as card}
			<Card {card} />
		{/each}
	</div>
	<div class="container m-t__large">
		<div class="mapouter">
			<div class="gmap_canvas">
				<iframe
					width="1000"
					height="500"
					id="gmap"
					src="https://maps.google.com/maps?q=sundvolden%20hotell&t=&z=13&ie=UTF8&iwloc=&output=embed"
					frameborder="0"
					scrolling="no"
					marginheight="0"
					marginwidth="0"
				/>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.mapouter {
		position: relative;
		text-align: right;
		height: 500px;
		width: 100%;
	}
	#gmap {
		overflow: hidden;
		background: none !important;
		height: 500px;
		width: 100%;
	}
</style>
