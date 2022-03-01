<script>
	import Navbar from '../components/Navbar.svelte';
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
