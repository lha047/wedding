<script lang="ts">
	import RegistrationForm from '../../../components/RegisterForm.svelte';
</script>

<h1>Overnatting</h1>

<!-- <RegistrationForm /> -->
<form name="test-form" method="POST" data-netlify="true">
	<label for="name">Name</label>
	<input id="name" name="name" type="text" />
	<button type="submit">Send inn</button>
</form>

<style lang="scss">
	h1 {
		text-align: center;
	}
</style>
