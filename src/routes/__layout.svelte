<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte'
	import { language } from '$lib/stores/language'
	import { page } from '$app/stores'
	export const prerender = true


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
</style>
