<script lang="ts">
	import { onMount } from 'svelte'
	import { translate } from '$lib/translate'
	import { clickOutside } from '$lib/clickOutside'
	import { slide } from 'svelte/transition'
	import { language } from '$lib/stores/language'
	import CheersIcon from '$lib/components/CheersIcon.svelte'
	import netlifyAuth from '$lib/stores/netlify'
	import { isLoggedInNetlify, userStore } from '$lib/stores/netlifyStore'

	$: console.log('nav logged in', $isLoggedInNetlify)
	let showMenu = false

	onMount(() => {
		netlifyAuth.initialize((user) => {
			console.log('nav onmount init', user)

			isLoggedInNetlify.set(!!user)
		})
	})

	function hideMenu() {
		showMenu = false
	}

	const login = () => {
		console.log('navbar login ')

		netlifyAuth.authenticate((user) => {
			console.log('nav log in auth')
			isLoggedInNetlify.set(!!user)
			userStore.set(user)
		})
	}
	const logout = () => {
		netlifyAuth.signout(() => {
			console.log('nav log out')

			isLoggedInNetlify.set(false)
			userStore.set(null)
		})
	}
</script>

<nav class="navbar navbar--divided">
	{#if $isLoggedInNetlify}
		<a class="home backlash" href="/{$language}">
			<CheersIcon />
		</a>

		<button
			type="button"
			class="button button__green"
			use:clickOutside
			on:outclick={hideMenu}
			on:click={() => (showMenu = !showMenu)}>{translate('menu')}</button
		>
		<ul class={showMenu ? 'show' : 'hide'} in:slide={{ duration: 1000 }}>
			<li><a class="nav-item" href="/{$language}/program">{translate('program')}</a></li>
			<li><a class="nav-item" href="/{$language}/sleeping">{translate('accommodation')}</a></li>
			<li><a class="nav-item" href="/{$language}/gjesvold">{translate('gjesvold')}</a></li>
			<li><a class="nav-item" href="/{$language}/registration">{translate('register')}</a></li>
		</ul>
		<button class="button button--ivory button--outlined" on:click|preventDefault={() => logout()}
			>{translate('logout')}</button
		>
	{:else}
		<span />
		<button class="button button--primary button--outlined" on:click|preventDefault={() => login()}
			>{translate('login')}</button
		>
	{/if}
</nav>

<style lang="scss">
	@use '../../sass/theme' as *;
	.navbar {
		position: relative;

		.home {
			flex: none;
			padding: 0 1rem;
			font-size: 3rem;
			text-decoration: none;
			line-height: 2rem;
		}
		@media only screen and (min-width: $breakpoint) {
			position: initial;
			button.button__green {
				display: none;
			}
		}
	}
	ul {
		position: absolute;
		//position: fixed;
		left: -100%;
		top: 3.5rem;
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
		li {
			padding: 0.3rem;
		}
		@media only screen and (min-width: $breakpoint) {
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
			li {
				padding: 0;
			}
		}
	}
	.nav-item {
		@media only screen and (min-width: $breakpoint) {
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
