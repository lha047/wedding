import { writable } from 'svelte/store';

export const isLoggedIn = writable(false);

export function addListener() {
	netlifyIdentity.on('init', (user) => {
		console.log('on init', user);
		if (user) {
			isLoggedIn.set(true);
		}
	});
	netlifyIdentity.on('login', (user) => {
		console.log('on log in ', user);
		isLoggedIn.set(true);
	});
	netlifyIdentity.on('logout', (user) => {
		console.log('on log out ', user);
		isLoggedIn.set(false);
	});
}
