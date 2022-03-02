<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<heading>
	<Navbar />
</heading>
<main class="">
	<slot />
</main>
<footer />

<style lang="scss" global>
	footer {
		margin-bottom: 13rem;
	}
</style>
