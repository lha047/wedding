import { writable } from "svelte/store";
import { browser } from '$app/env'
import netlifyAuth from './netlify'

const login = browser ? localStorage.getItem('gotrue.user') : null

export const isLoggedInNetlify = writable(netlifyAuth.isAuthenticated)
export const userStore = writable(login)

