import { language } from './stores/language';
import { phrases } from './phrases';

export function translate(key: string): string {
let lang;
language.subscribe((value) => {
    lang = value;
})
 return phrases[key][lang]
}