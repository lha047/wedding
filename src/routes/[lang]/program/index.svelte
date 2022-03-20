<script>
	import WeekendInfo from '$lib/components/WeekendInfo.svelte'
	import {isLoggedInNetlify} from '$lib/stores/netlifyStore'
	$: console.log('program', $isLoggedIn)
</script>

{#if $isLoggedInNetlify}
	<WeekendInfo />
{/if}
