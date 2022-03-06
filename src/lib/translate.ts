import { language } from './stores/language'
import { i18n } from '$lib/i18n'

export function translate(key: string): string {
	let lang: string
	language.subscribe((value) => {
		lang = value
	})
	console.log('lang', lang)
	return i18n[key][lang]
}
