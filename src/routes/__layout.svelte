<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte'
	import { language } from '$lib/stores/language'
	import { page } from '$app/stores'

	language.set($page.params.lang)
</script>

<heading>
	<Navbar />
</heading>
<main class="">
	<slot />
</main>
<footer />

<style lang="scss" global>
	@import '../../public/css/style.css';
	footer {
		margin-bottom: 13rem;
	}
</style>
