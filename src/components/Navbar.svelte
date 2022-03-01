<script>
	import { language } from '$lib/stores/language.ts';
</script>

<nav class="navbar navbar--centered">
	<ul>
		<li><a href="/{$language}">Forsiden</a></li>
		<li><a href="/{$language}/program">Program</a></li>
		<li><a href="/{$language}/sleeping">Overnatting</a></li>
		<li><a href="/{$language}/couple">LiSt</a></li>
	</ul>
</nav>

<style lang="scss">
	ul {
		display: flex;
		gap: 1rem;
	}
</style>
