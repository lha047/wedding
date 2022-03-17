<script lang="ts">
	import RegistrationForm from '$lib/components/register-form.svelte'
	import { translate } from '$lib/translate'
	import { isLoggedIn } from '$lib/stores/auth'
	export const prerender = true
</script>

{#if $isLoggedIn}
	<h1 class="color-primary script-medium backlash-alt m-b__0">{translate('registration')}</h1>

	<RegistrationForm />
{/if}
<RegistrationForm class="inclusively-hidden" />
