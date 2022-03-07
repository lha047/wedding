<script lang="ts">
	import { translate } from '$lib/translate'
	import { language } from '$lib/stores/language'
	import { goto } from '$app/navigation'
	let className = ''
	export { className as class }

	let name: string
	let willAttend: boolean
	let numberOfPeople: number
	let phone: string
	let email: string
	let stayAtHotel: string
	let attendFridayBBQ: string
	let allergies: string
	let questions: string

	function encode(data) {
		return Object.keys(data)
			.map((key) => {
				return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			})
			.join('&')
	}

	function handleSubmit(event) {
		console.log('event', event)
		const body = encode({
			'form-name': event.target.getAttribute('name'),
			name: name,
			'will-join': willAttend,
			'nr-of-people': numberOfPeople,
			phone: phone,
			email: email,
			sleeping: stayAtHotel,
			'friday-bbq': attendFridayBBQ,
			allergies: allergies,
			question: questions,
			test: 'this is the test'
		})
		console.log('body', body)
		let href = `/${$language}/success`
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body
		})
			.then(() => goto(href))
			.catch((error) => alert(error))
	}
</script>

<form
	data-netlify="true"
	name="register"
	class={className}
	method="post"
	action="/{$language}/success"
	netlify-honeypot="bot-field"
	on:submit|preventDefault={handleSubmit}
>
	<input type="hidden" name="form-name" value="register" />
	<p class="inclusively-hidden">
		<label>
			Don’t fill this out if you’re human: <input name="bot-field" />
		</label>
	</p>
	<div class="form-group">
		<label for="name">{translate('nameText')}</label>
		<input type="text" class="form-field" id="name" name="name" bind:value={name} />
	</div>
	<fieldset class="form-group">
		<legend>{translate('willYouAttend')}</legend>
		<div class="radio-group">
			<input type="radio" id="join-yes" name="will-join" value="ja" bind:group={willAttend} />
			<label for="join-yes"> {translate('canComeText')}</label>
		</div>
		<div class="radio-group">
			<input type="radio" id="join-no" name="will-join" value="nei" bind:group={willAttend} />
			<label for="join-no">{translate('canNotComeText')}</label>
		</div>
	</fieldset>

	<div class="form-group">
		<label for="nr-of-people">{translate('nrOfPersonsText')}</label>
		<input
			class="form-field"
			id="nr-of-people"
			name="nr-of-people"
			type="text"
			bind:value={numberOfPeople}
		/>
	</div>

	<div class="form-group">
		<label for="phone">{translate('phoneNumberText')}</label>
		<input class="form-field" id="phone" name="phone" type="text" bind:value={phone} />
	</div>

	<div class="form-group">
		<label for="email">{translate('mailText')}</label>
		<input class="form-field" id="email" name="email" type="text" bind:value={email} />
	</div>

	<fieldset class="form-group">
		<legend>{translate('sleepingArrangementsText')}</legend>
		<div class="radio-group">
			<input type="radio" id="sleeping-no" name="sleeping" value="no" bind:group={stayAtHotel} />
			<label for="sleeping-no">{translate('noText')}</label>
		</div>
		<div class="radio-group">
			<input
				type="radio"
				id="sleeping-fri-to-sun"
				name="sleeping"
				value="friToSun"
				bind:group={stayAtHotel}
			/>
			<label for="sleeping-fri-to-sun">{translate('fridayToSunday')}</label>
		</div>
		<div class="radio-group">
			<input
				type="radio"
				id="sleeping-sat-to-sun"
				name="sleeping"
				value="satToSun"
				bind:group={stayAtHotel}
			/>
			<label for="sleeping-sat-to-sun">{translate('saturdayToSunday')}</label>
		</div>
	</fieldset>

	<fieldset class="form-group">
		<legend>{translate('fridayBBQText')}</legend>
		<div class="radio-group">
			<input
				type="radio"
				id="friday-bbq-yes"
				name="friday-bbq"
				value="ja"
				bind:group={attendFridayBBQ}
			/>
			<label for="friday-bbq-yes">{translate('yesText')}</label>
		</div>
		<div class="radio-group">
			<input
				type="radio"
				id="friday-bbq-no"
				name="friday-bbq"
				value="nei"
				bind:group={attendFridayBBQ}
			/>
			<label for="friday-bbq-no">{translate('noText')}</label>
		</div>
	</fieldset>

	<div class="form-group">
		<label for="allergies">{translate('allergiesText')}</label>
		<textarea
			class="form-field"
			name="allergies"
			id="allergies"
			cols="30"
			rows="10"
			bind:value={allergies}
		/>
	</div>

	<div class="form-group">
		<label for="question">{translate('questionsText')}</label>
		<textarea
			class="form-field"
			name="question"
			id="question"
			cols="30"
			rows="10"
			bind:value={questions}
		/>
	</div>

	<button type="submit" class="button">{translate('submit')}</button>
</form>

<style lang="scss">
	button {
		margin-top: var(--spacer-large);
		width: fit-content;
	}
	form {
		margin-bottom: 5rem;
	}
</style>
