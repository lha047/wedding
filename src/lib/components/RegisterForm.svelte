<script lang="ts">
	import { translate } from '$lib/translate'
</script>

<form>
	<div class="form-group">
		<label for="name">{translate('nameText')}</label>
		<input type="text" class="form-field" id="name" name="name" />
	</div>
	<fieldset class="form-group">
		<legend>{translate('willYouAttend')}</legend>
		<div class="radio-group">
			<input type="radio" name="willJoin" id="willJoin" value="ja" />
			<label for="willJoin">{translate('canComeText')}</label>
		</div>
		<div class="radio-group">
			<input type="radio" id="cantCome" name="cantCome" value="nei" />
			<label for="cantCome">{translate('canNotComeText')}</label>
		</div>
	</fieldset>

	<div class="form-group">
		<label for="nrOfPeople">{translate('nrOfPersonsText')}</label>
		<input class="form-field" id="nrOfPeople" name="nrOfPeople" type="text" />
	</div>

	<div class="form-group">
		<label for="phone">{translate('phoneNumberText')}</label>
		<input class="form-field" id="phone" name="phone" type="text" />
	</div>
	<div class="form-group">
		<label for="email">{translate('mailText')}</label>
		<input class="form-field" id="email" name="email" type="text" />
	</div>
	<fieldset class="form-group">
		<legend>{translate('sleepingArrangementsText')}</legend>
		<div class="radio-group">
			<input type="radio" id="sleepingNo" name="sleepingNo" value="no" />
			<label for="sleepingNo">{translate('noText')}</label>
		</div>
		<div class="radio-group">
			<input type="radio" id="sleepingFriToSun" name="sleepingFriToSun" value="friToSun" />
			<label for="sleepingFriToSun">{translate('fridayToSunday')}</label>
		</div>
		<div class="radio-group">
			<input type="radio" id="sleepingSatToSøn" name="sleepingSatToSøn" value="satToSun" />
			<label for="sleepingSatToSøn">{translate('saturdayToSunday')}</label>
		</div>
	</fieldset>

	<div class="form-group">
		<label for="sleepingNeeds">{translate('sleepingArrangementsSpecialNeeds')}</label>
		<textarea class="form-field" name="sleepingNeeds" id="sleepingNeeds" cols="30" rows="10" />
	</div>

	<fieldset class="form-group">
		<legend>{translate('fridayBBQText')}</legend>
		<div class="radio-group radio">
			<input type="radio" id="fridayBBQYes" name="fridayBBQYes" value="ja" />
			<label for="fridayBBQYes">{translate('yesText')}</label>
		</div>
		<div class="radio-group radio">
			<input type="radio" id="fridayBBQNo" name="fridayBBQNo" value="nei" />
			<label for="fridayBBQNo">{translate('noText')}</label>
		</div>
	</fieldset>

	<div class="form-group">
		<label for="allergies">{translate('allergiesText')}</label>
		<textarea class="form-field" name="allergies" id="allergies" cols="30" rows="10" />
	</div>
	<div class="form-group">
		<label for="question">{translate('questionsText')}</label>
		<textarea class="form-field" name="question" id="question" cols="30" rows="10" />
	</div>

	<button type="submit" class="button button-primary">
		{translate('submit')}
	</button>
</form>

<style lang="scss">
	form {
		width: min(30rem, 90%);
		margin-left: auto;
		margin-right: auto;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		fieldset {
			display: flex;
			flex-direction: column;
		}

		.form-group {
			display: flex;
			flex-direction: column;
			align-items: stretch;
		}
		.button {
			align-self: flex-start;
		}
	}
</style>
