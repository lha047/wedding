<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import RegistrationForm from '../../../components/RegisterForm.svelte';
</script>

<h1>Overnatting</h1>

<!-- <RegistrationForm /> -->
<form name="test" method="POST" netlify netlify-honeypot="bot-field">
	<label for="name">Name</label>
	<input id="name" name="name" type="text" />
	<button type="submit">Send inn</button>
</form>

<style lang="scss">
	h1 {
		text-align: center;
	}
</style>
