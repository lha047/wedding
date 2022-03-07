<script lang="ts">
	import { translate } from '$lib/translate'
	import { isLoggedIn } from '$lib/stores/auth'

	export const prerender = true
</script>

{#if $isLoggedIn}
	<h1 class="m-t__large color-primary">{translate('accommodation')}</h1>

	{@html translate('accommodationText')}
{/if}
