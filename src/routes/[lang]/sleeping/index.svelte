<script lang="ts">
	import { translate } from '$lib/translate'
	import { isLoggedIn } from '$lib/stores/auth'

	export const prerender = true
</script>

{#if $isLoggedIn}
	<div class="container">
		<h1 class="m-t__large color-primary">{translate('accommodation')}</h1>

		{@html translate('accommodationText')}
		<h2 class="color-primary">Offentlig transport</h2>
	</div>
	<div class="card-wrapper">
		<div class="card ivory">
			<h3 class="card-title">Fra Hønefoss</h3>
			<ul>
				<li>Buss nr 200 til Oslo.</li>
				<li>Gå av på Sundvollen</li>
				<li>xx min gåtur fra Sundvollen</li>
				<li><a href="https://www.brakar.no/">Rutetider</a></li>
			</ul>
		</div>
		<div class="card green">
			<h3 class="card-title">Fra Oslo</h3>
			<ul>
				<li>Buss nr 200 til Hønefoss</li>
				<li>Gå av på Sundvollen</li>
				<li>xx min gåtur fra Sundvollen</li>
				<li><a href="https://www.brakar.no/">Rutetider</a></li>
			</ul>
		</div>
	</div>
{/if}
