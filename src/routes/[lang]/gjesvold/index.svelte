<script lang="ts">
	import { ADDRESS_GJESVOLD, LINK_GJESVOLD, LINK_SUNDVOLDEN } from '$lib/constants'
	import { isLoggedIn } from '$lib/stores/auth'
	import Card from '$lib/components/Card.svelte'

	const cards = [
		{
			title: `<h3 class='card-title'>Fra Hønefoss</h3>`,
			list: [
				'Buss nr 200 til Oslo.',
				'Gå av på Vik (E16)',
				'xx min gåtur fra Vik.',
				`<a href="https://www.brakar.no/">Rutetider</a>`
			],
			cardClass: 'ivory'
		},
		{
			title: "<h3 class='card-title'>Fra Oslo</h3>",
			list: [
				'Buss nr 200 til Hønefoss',
				'Gå av på Vik (E16)',
				'xx min gåtur fra Vik',
				`<a href="https://www.brakar.no/">Rutetider</a>`
			],
			cardClass: 'green'
		}
	]
</script>

{#if $isLoggedIn}
	<div class="container">
		<h1 class="color-primary">Gjesvold gård</h1>
		<p>
			Vielsen og festen lørdag 2. Juli vil bli holdt på {@html LINK_GJESVOLD}. Gården ligger ca. 3
			km fra
			{@html LINK_SUNDVOLDEN} og ca 16 km fra Hønefoss sentrum.
		</p>
		<p>Addressen er {@html ADDRESS_GJESVOLD}</p>
		<p>Det er mulighet for parkering på stedet.</p>
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
		<h2 class="">Offentlig transport</h2>
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
