<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { language } from '$lib/stores/language';
</script>

<h1>Home</h1>
<form name="test" method="POST" netlify netlify-honeypot="bot-field" action="{$language}/success">
	<input type="hidden" name="form-name" value="test" />
	<label for="name">Name</label>
	<input id="name" name="name" type="text" />
	<button type="submit">Send inn</button>
</form>
