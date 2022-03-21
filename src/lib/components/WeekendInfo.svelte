<script lang="ts">
	import { translate } from '$lib/translate'
</script>

<article class="weekend-info">
	<h1 class="color-primary script-medium backlash-alt m-b__0">{translate('program')}</h1>
	<p>{translate('programDescription')}</p>

	<article aria-labelledby="friday">
		<h2 id="friday" class="m-t__medium">{translate('friday')}</h2>
		<dl>
			<dt>{translate('checkInTime')}</dt>
			<dd>{translate('checkIn')}</dd>
			<dt>{translate('fridayBBQTime')}</dt>
			<dd>{translate('fridayBBQ')}</dd>
		</dl>
	</article>

	<article aria-labelledby="saturday">
		<h2 id="saturday" class="m-t__medium color-primary">{translate('saturday')}</h2>
		<p>{translate('weddingDayText')}</p>
		<p>{translate('dressCode')}</p>
		<dl>
			<dt>{translate('breakfastTime')}</dt>
			<dd>{translate('breakfast')}</dd>
			<dt>{translate('ceremonyTime')}</dt>
			<dd>{@html translate('ceremony')}</dd>
			<dt>{translate('apretifTime')}</dt>
			<dd>{translate('apretif')}</dd>
			<dt>{translate('dinnerTime')}</dt>
			<dd>{translate('dinner')}</dd>
			<dt>{translate('cakeTime')}</dt>
			<dd>{translate('cake')}</dd>
			<dt>{translate('danceTime')}</dt>
			<dd>{translate('dance')}</dd>
			<dt>{translate('nightFoodTime')}</dt>
			<dd>{translate('nightFood')}</dd>
			<dt>{translate('goodNightTime')}</dt>
			<dd>{translate('goodNight')}</dd>
		</dl>
	</article>
	<article aria-labelledby="sunday">
		<h2 id="sunday" class="m-t__medium">{translate('sunday')}</h2>
		<dl>
			<dt>{translate('breakfastTime')}</dt>
			<dd>{translate('breakfast')}</dd>
			<dt>{translate('checkOutTime')}</dt>
			<dd>{translate('checkOut')}</dd>
		</dl>
	</article>
</article>

<style lang="scss">
	.weekend-info {
		padding: 0 1rem;
	}
</style>
