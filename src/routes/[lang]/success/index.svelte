<script context="module" lang="ts">
	export const prerender = true

</script>

<script lang="ts">
	import { translate } from '$lib/translate'
	import { language } from '$lib/stores/language'
	import {isLoggedInNetlify} from '$lib/stores/netlifyStore'
</script>

{#if $isLoggedInNetlify}
	<h1 class="color-primary script-medium backlash-alt m-b__0">
		{translate('registrationSuccess')}
	</h1>
	<a href="/{$language}/program">{translate('seeProgram')}</a>
{/if}
