<script lang="ts">
	import { ADDRESS_GJESVOLD, LINK_GJESVOLD, LINK_SUNDVOLDEN } from '$lib/constants'
	import { isLoggedIn } from '$lib/stores/auth'
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

		<h2 class="color-primary">Offentlig transport</h2>
	</div>
	<div class="card-wrapper">
		<div class="card ivory">
			<h3 class="card-title">Fra Hønefoss</h3>
			<ul>
				<li>Buss nr 200 til Oslo.</li>
				<li><a href="https://www.brakar.no/">Rutetider</a></li>
				<li>Gå av på Vik (E16).</li>
				<li>xx min gåtur fra Vik.</li>
			</ul>
		</div>
		<div class="card green">
			<h3 class="card-title">Fra Oslo</h3>
			<ul>
				<li>Buss nr 200 til Hønefoss</li>
				<li><a href="https://www.brakar.no/">Rutetider</a></li>
				<li>Gå av på Vik (E16)</li>
				<li>xx min gåtur fra Vik</li>
			</ul>
		</div>
	</div>

	<div class="container">
		<iframe
			width="450"
			height="250"
			frameborder="0"
			style="border:0"
			src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&PARAMETERS"
			allowfullscreen
		/>
	</div>
{/if}

<style lang="scss">
</style>
