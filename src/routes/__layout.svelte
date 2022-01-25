<script>
	import Navbar from '../components/Navbar.svelte';
</script>

<heading>
	<Navbar />
</heading>
<main>
	<slot />
</main>
<footer />

<style lang="scss">
	@import '../../public/css/style.css';
</style>
