<script lang="ts">
	import { ADDRESS_GJESVOLD, LINK_GJESVOLD, LINK_SUNDVOLDEN } from '$lib/constants';
	import { isLoggedIn } from '$lib/stores/auth';
</script>

{#if isLoggedIn}
	<h1 class="color-primary">Gjesvold gård</h1>
	<p>
		Vielsen og festen lørdag 2. Juli vil bli holdt på {@html LINK_GJESVOLD}. Gården ligger ca. 3 km
		fra
		{@html LINK_SUNDVOLDEN} og ca 16 km fra Hønefoss sentrum. Addressen er {@html ADDRESS_GJESVOLD}.
		Det er mulighet for parkering på stedet.
	</p>
	<!--<p>Litt om stedet</p>-->
	<!--<h2>Parkering</h2>-->
	<!--<h2>Ankomst</h2>-->
	<!--<h2>Avstand fra hotellet</h2>-->
	<!---->
	<!--Gjesvold gård ligger ca 3 km fra Sundvolden Hotell-->
{/if}
