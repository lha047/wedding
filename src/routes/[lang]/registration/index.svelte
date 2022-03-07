<script lang="ts">
	import RegistrationForm from '$lib/components/register-form.svelte'
	import { translate } from '$lib/translate'
	import { isLoggedIn } from '$lib/stores/auth'
	export const prerender = true
</script>

{#if $isLoggedIn}
	<h1 class="m-t__large color-primary">{translate('registration')}</h1>

	<RegistrationForm />
{:else}
	Log in
{/if}
<RegistrationForm class="inclusively-hidden" />
