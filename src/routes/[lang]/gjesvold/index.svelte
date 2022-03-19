<script lang="ts">
	import { ADDRESS_GJESVOLD } from '$lib/constants'
	import { isLoggedIn } from '$lib/stores/auth'
	import Card from '$lib/components/Card.svelte'
	import { translate } from '$lib/translate'

	const cards = [
		{
			title: `<h3 class="card-title">${translate('fromHfs')}</h3>`,
			list: [
				`${translate('bussToOslo')}`,
				`${translate('exitVik')}`,
				`${translate('walkVik')}`,
				`<a href="https://www.brakar.no/">${translate('timeTable')}</a>`
			],
			cardClass: 'ivory'
		},
		{
			title: `<h3 class="card-title">${translate('fromOslo')}</h3>`,
			list: [
				`${translate('bussToHfs')}`,
				`${translate('exitVik')}`,
				`${translate('walkVik')}`,
				`<a href="https://www.brakar.no/">${translate('timeTable')}</a>`
			],
			cardClass: 'green'
		}
	]
</script>

{#if $isLoggedIn}
	<div class="container">
		<h1 class="color-primary script-medium backlash-alt m-b__0">{translate('gjesvold')}</h1>
		<p>
			{@html translate('locationText')}
		</p>
		<p>{translate('locationAddress')} {@html ADDRESS_GJESVOLD}</p>
		<p>{translate('parkingOptions')}</p>
	</div>

	<div class="container m-t__large">
		<div class="mapouter">
			<div class="gmap_canvas">
				<iframe
					width="1000"
					height="500"
					id="gmap"
					src="https://maps.google.com/maps?q=gjesvold&t=&z=13&ie=UTF8&iwloc=&output=embed"
					frameborder="0"
					scrolling="no"
					marginheight="0"
					marginwidth="0"
				/>
			</div>
		</div>
		<h2 class="">{translate('publicTransport')}</h2>
	</div>

	<div class="card-wrapper">
		{#each cards as card}
			<Card {card} />
		{/each}
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
