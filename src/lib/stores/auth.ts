import { writable } from 'svelte/store'
import { browser } from '$app/env'

const login = browser ? localStorage.getItem('gotrue.user') : null

const loadJS = login
export const isLoggedIn = writable(loadJS)

export function addListener() {
	if (loadJS) {
		netlifyIdentity.on('init', (user) => {
			console.log('on init', user)
			if (user) {
				isLoggedIn.set(user)
			}
		})
		netlifyIdentity.on('login', (user) => {
			console.log('on log in ', user)
			isLoggedIn.set(user)
		})
		netlifyIdentity.on('logout', (user) => {
			console.log('on log out ', user)
			isLoggedIn.set(null)
		})
	}
}
