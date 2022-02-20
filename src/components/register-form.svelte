<script>
	const nameText = 'Ditt navn/navn på følge';
	const willYouAttend = 'Har du mulighet til å komme?';
	const canComeText = 'Jeg/vi har mulighet til å delta på festen';
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
	<fieldset class="form-group">
		<legend>{willYouAttend}</legend>
		<div class="radio-group">
			<input type="radio" name="willJoin" id="willJoin" value="ja" />
			<label for="willJoin">{canComeText}</label>
		</div>
		<div class="radio-group">
			<input type="radio" id="cantCome" name="cantCome" value="nei" />
			<label for="cantCome">{canNotComeText}</label>
		</div>
	</fieldset>

	<div class="form-group">
		<label for="nrOfPeople">{nrOfPersonsText}</label>
		<input class="form-field" id="nrOfPeople" name="nrOfPeople" type="text" />
	</div>

	<div class="form-group">
		<label for="phone">{phoneNumberText}</label>
		<input class="form-field" id="phone" name="phone" type="text" />
	</div>

	<div class="form-group">
		<label for="email">{mailText}</label>
		<input class="form-field" id="email" name="email" type="text" />
	</div>

	<fieldset class="form-group">
		<legend>{sleepingArrangementsText}</legend>
		<div class="radio-group">
			<input type="radio" id="sleepingNo" name="sleepingNo" value="no" />
			<label for="sleepingNo">{noText}</label>
		</div>
		<div class="radio-group">
			<input type="radio" id="sleepingFriToSun" name="sleepingFriToSun" value="friToSun" />
			<label for="sleepingFriToSun">{fridayToSunday}</label>
		</div>
		<div class="radio-group">
			<input type="radio" id="sleepingSatToSøn" name="sleepingSatToSøn" value="satToSun" />
			<label for="sleepingSatToSøn">{saturdayToSunday}</label>
		</div>
	</fieldset>

	<div class="form-group">
		<label for="sleepingNeeds">{sleepingArrangementsSpecialNeeds}</label>
		<textarea class="form-field" name="sleepingNeeds" id="sleepingNeeds" cols="30" rows="10" />
	</div>

	<fieldset class="form-group">
		<legend>{fridayBBQText}</legend>
		<div class="radio-group">
			<input type="radio" id="fridayBBQYes" name="fridayBBQYes" value="ja" />
			<label for="fridayBBQYes">{yesText}</label>
		</div>
		<div class="radio-group">
			<input type="radio" id="fridayBBQNo" name="fridayBBQNo" value="nei" />
			<label for="fridayBBQNo">{noText}</label>
		</div>
	</fieldset>

	<div class="form-group">
		<label for="allergies">{allergiesText}</label>
		<textarea class="form-field" name="allergies" id="allergies" cols="30" rows="10" />
	</div>

	<div class="form-group">
		<label for="question">{questionsText}</label>
		<textarea class="form-field" name="question" id="question" cols="30" rows="10" />
	</div>
</form>
