<script lang="ts">
	import RegistrationForm from '$lib/components/register-form.svelte'
	import { translate } from '$lib/translate'
	import {isLoggedInNetlify} from '$lib/stores/netlifyStore'
	export const prerender = true
</script>

{#if $isLoggedInNetlify}
	<h1 class="color-primary script-medium backlash-alt m-b__0">{translate('registration')}</h1>

	<RegistrationForm />
{/if}
<RegistrationForm class="inclusively-hidden" />
