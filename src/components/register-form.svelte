<script>
	const nameText = 'Ditt navn/navn på følge';
	const willYouAttend = 'Har du mulighet til å komme?';
	const canComeText = 'jeg/vi har mulighet til å delta på festen';
	const canNotComeText = 'Jeg/vi har desverre ikke mulighet til å komme';
	const nrOfPersonsText = 'Antall personer i følge';
	const phoneNumberText = 'Ditt teltefonnummer';
	const mailText = 'Din mailadressse';
	const sleepingArrangementsText = 'Ønsker du overnatting?';
	const noText = 'Nei';
	const yesText = 'Ja';
	const fridayToSunday = 'Fredag til søndag';
	const saturdayToSunday = 'Lørdag til søndag';
	const sleepingArrangementsSpecialNeeds =
		'Har du noen spesielle behov emed hensyn til overnattingen?';
	const fridayBBQText = 'Ønsker du å delta på grilling på fredag?';
	const allergiesText = 'Har du noen allergier?';
	const questionsText = 'Har du noen spørsmål?';
</script>

<form>
	<div class="form-group">
		<label for="name">{nameText}</label>
		<input type="text" class="form-field" id="name" name="name" />
	</div>
	<fieldset>
		<legend>{willYouAttend}</legend>
		<label for="willJoin">{canComeText}</label>
		<input type="radio" name="willJoin" id="willJoin" value="ja" />
		<label for="cantCome">{canNotComeText}</label>
		<input type="radio" id="cantCome" name="cantCome" value="nei" />
	</fieldset>

	<div class="form-group">
		<label for="nrOfPeople">{nrOfPersonsText}</label>
		<input class="form-field" id="nrOfPeople" name="nrOfPeople" type="text" />
	</div>

	<label for="phone">{phoneNumberText}</label>
	<input class="form-field" id="phone" name="phone" type="text" />

	<label for="email">{mailText}</label>
	<input class="form-field" id="email" name="email" type="text" />

	<fieldset>
		<legend>{sleepingArrangementsText}</legend>
		<div class="radio-group">
			<label for="sleepingNo">{noText}</label>
			<input type="radio" id="sleepingNo" name="sleepingNo" value="no" />
		</div>
		<div class="radio-group">
			<label for="sleepingFriToSun">{fridayToSunday}</label>
			<input type="radio" id="sleepingFriToSun" name="sleepingFriToSun" value="friToSun" />
		</div>
		<div class="radio-group">
			<label for="sleepingSatToSøn">{saturdayToSunday}</label>
			<input type="radio" id="sleepingSatToSøn" name="sleepingSatToSøn" value="satToSun" />
		</div>
	</fieldset>

	<label for="sleepingNeeds">{sleepingArrangementsSpecialNeeds}</label>
	<textarea class="form-field" name="sleepingNeeds" id="sleepingNeeds" cols="30" rows="10" />

	<fieldset>
		<legend>{fridayBBQText}</legend>
		<div class="radio-group">
			<label for="fridayBBQYes">{yesText}</label>
			<input type="radio" id="fridayBBQYes" name="fridayBBQYes" value="ja" />
		</div>
		<div class="radio-group">
			<label for="fridayBBQNo">{noText}</label>
			<input type="radio" id="fridayBBQNo" name="fridayBBQNo" value="nei" />
		</div>
	</fieldset>

	<label for="allergies">{allergiesText}</label>
	<textarea class="form-field" name="allergies" id="allergies" cols="30" rows="10" />

	<label for="question">{questionsText}</label>
	<textarea class="form-field" name="question" id="question" cols="30" rows="10" />
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;

		fieldset {
			display: flex;
			flex-direction: column;
		}
	}
</style>
