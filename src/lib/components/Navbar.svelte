<script lang="ts">
	import { translate } from '$lib/translate';
	import { clickOutside } from '$lib/clickOutside';
	import { slide } from 'svelte/transition';
	import { language } from '$lib/stores/language.ts';
	import { isLoggedIn } from '$lib/stores/auth.ts';

	let showMenu = false;

	function hideMenu() {
		showMenu = false;
	}
</script>

{#if $isLoggedIn}
	<nav class="navbar navbar--divided">
		<a class="home" href="/{$language}">{translate('home')}</a>

		<button
			type="button"
			class="button button__green"
			use:clickOutside
			on:outclick={hideMenu}
			on:click={() => (showMenu = !showMenu)}>{translate('menu')}</button
		>
		<ul in:slide={{ duration: 300 }} class={showMenu ? 'show' : 'hide'}>
			<li><a class="nav-item" href="/{$language}/program">{translate('program')}</a></li>
			<li><a class="nav-item" href="/{$language}/sleeping">{translate('accommodation')}</a></li>
			<li><a class="nav-item" href="/{$language}/gjesvold">{translate('gjesvold')}</a></li>
			<li><a class="nav-item" href="/{$language}/registration">{translate('register')}</a></li>
		</ul>
	</nav>
{/if}

<style lang="scss">
	.navbar {
		position: relative;

		.home {
			flex: none;
		}

		button {
		}
		@media only screen and (min-width: 768px) {
			position: initial;
			button {
				display: none;
			}
		}
	}
	ul {
		//position: absolute;
		position: fixed;
		left: -100%;
		top: 4rem;
		display: flex;
		flex-direction: column;
		gap: var(--spacer-small);
		width: 100%;
		background-color: var(--color-ivory);
		z-index: 3;
		border-radius: 0.25em;
		padding-top: 1rem;
		padding-bottom: 1rem;
		transition: 0.3s;
		box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
		&.show {
			//display: flex;
			//gap: 1rem;
			left: 0;
		}
		&.hide {
			display: none;
		}
		@media only screen and (min-width: 768px) {
			width: 100%;
			position: inherit;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			gap: 1rem;
			box-shadow: none;
			&.hide {
				display: flex;
			}
		}
	}
	.nav-item {
		@media only screen and (min-width: 768px) {
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
	}
</style>
