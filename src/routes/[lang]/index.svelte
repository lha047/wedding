<script lang="ts">
	import { language } from '$lib/stores/language';
	import { page } from '$app/stores';

	language.set($page.params.lang);
</script>

<div class="wrapper">
	<div class="text">
		<h1>Vi gifter oss</h1>
		<p>Lisa og Ståle</p>
		<p>02.07.2021</p>
	</div>
</div>

<style lang="scss">
	img {
		object-fit: none; /* Do not scale the image*/
		object-position: center; /* Center the image within the element */
		height: 10rem;
		width: 100%;

		@media only screen and (min-width: 768px) {
			height: 30rem;
		}
	}
	.text {
		background-color: rgba(0, 0, 0, 0.34);
		display: flex;
		flex-direction: column;
		align-items: center;
		color: white;
		padding: 1rem 1rem 2rem 1rem;

		@media only screen and (min-width: 768px) {
			padding: 3rem 12rem;
		}
	}
</style>
