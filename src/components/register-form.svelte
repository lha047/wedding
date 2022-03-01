<script>
	import { translate } from '$lib/translate';

	let name = '';
	let willAttend;
	let numberOfPeople;
	let phone;
	let email;
	let stayAtHotel;
	let attendFridayBBQ;
	let allergies;
	let questions;
</script>

<form method="post">
	<div class="form-group">
		<label for="name">{translate('nameText')}</label>
		<input type="text" class="form-field" id="name" name="name" bind:value={name} />
	</div>
	<fieldset class="form-group">
		<legend>{translate('willYouAttend')}</legend>
		<div class="radio-group">
			<input type="radio" name="willJoin" id="willJoin" value="ja" bind:group={willAttend} />
			<label for="willJoin">{translate('canComeText')}</label>
		</div>
		<div class="radio-group">
			<input type="radio" id="cantCome" name="cantCome" value="nei" bind:group={willAttend} />
			<label for="cantCome">{translate('canNotComeText')}</label>
		</div>
	</fieldset>

	<div class="form-group">
		<label for="nrOfPeople">{translate('nrOfPersonsText')}</label>
		<input
			class="form-field"
			id="nrOfPeople"
			name="nrOfPeople"
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
			<input type="radio" id="sleepingNo" name="sleepingNo" value="no" bind:group={stayAtHotel} />
			<label for="sleepingNo">{translate('noText')}</label>
		</div>
		<div class="radio-group">
			<input
				type="radio"
				id="sleepingFriToSun"
				name="sleepingFriToSun"
				value="friToSun"
				bind:group={stayAtHotel}
			/>
			<label for="sleepingFriToSun">{translate('fridayToSunday')}</label>
		</div>
		<div class="radio-group">
			<input
				type="radio"
				id="sleepingSatToSøn"
				name="sleepingSatToSøn"
				value="satToSun"
				bind:group={stayAtHotel}
			/>
			<label for="sleepingSatToSøn">{translate('saturdayToSunday')}</label>
		</div>
	</fieldset>

	<!--	<div class="form-group">-->
	<!--		<label for="sleepingNeeds">{sleepingArrangementsSpecialNeeds}</label>-->
	<!--		<textarea class="form-field" name="sleepingNeeds" id="sleepingNeeds" cols="30" rows="10" />-->
	<!--	</div>-->

	<fieldset class="form-group">
		<legend>{translate('fridayBBQText')}</legend>
		<div class="radio-group">
			<input
				type="radio"
				id="fridayBBQYes"
				name="fridayBBQYes"
				value="ja"
				bind:group={attendFridayBBQ}
			/>
			<label for="fridayBBQYes">{translate('yesText')}</label>
		</div>
		<div class="radio-group">
			<input
				type="radio"
				id="fridayBBQNo"
				name="fridayBBQNo"
				value="nei"
				bind:group={attendFridayBBQ}
			/>
			<label for="fridayBBQNo">{translate('noText')}</label>
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

<style>
	button {
		margin-top: var(--spacer-large);
		width: fit-content;
	}
	form {
		margin-bottom: 5rem;
	}
</style>
