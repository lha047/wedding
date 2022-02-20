<script lang="ts">
	import { translate } from '$lib/translate';
	import { language } from '$lib/stores/language.ts';
</script>

<nav class="navbar navbar--centered">
	<ul>
		<li><a class="nav-item" href="/{$language}">{translate('home')}</a></li>
		<li><a class="nav-item" href="/{$language}/program">{translate('program')}</a></li>
		<li><a class="nav-item" href="/{$language}/sleeping">{translate('accommodation')}</a></li>
		<li><a class="nav-item" href="/{$language}/registration">{translate('register')}</a></li>
		<li><a class="nav-item" href="/{$language}/couple">{translate('couple')}</a></li>
	</ul>
</nav>

<style lang="scss">
	ul {
		display: flex;
		gap: 1rem;
	}
	.nav-item {
		text-decoration: none;
		color: var(--color-on-primary);
		background-color: var(--color-green);
		padding: 0.5rem 1rem;
		border-radius: 4px;
		border: 2px solid var(--color-green);

		&:hover {
			text-decoration: underline;
		}
	}
</style>
