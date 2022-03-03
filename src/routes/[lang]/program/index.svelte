<script>
	import WeekendInfo from '$lib/components/WeekendInfo.svelte';
	import { isLoggedIn } from '$lib/stores/auth';
	$: console.log('program', $isLoggedIn);
</script>

{#if $isLoggedIn === true}
	<WeekendInfo />
{/if}
