<script lang="ts">
	import RegistrationForm from '$lib/components/register-form.svelte';
	import { translate } from '$lib/translate';
</script>

<h1 class="m-t__large text-center color-primary">{translate('registration')}</h1>

<RegistrationForm />
