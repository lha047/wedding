<script lang="ts">
	import { translate } from '$lib/translate'

	export const prerender = true
</script>

<h1 class="m-t__large color-primary">{translate('accommodation')}</h1>

{@html translate('accommodationText')}
