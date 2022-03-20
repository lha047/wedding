<script>
	import WeekendInfo from '$lib/components/WeekendInfo.svelte'
	import {isLoggedInNetlify} from '$lib/stores/netlifyStore'

</script>

{#if $isLoggedInNetlify}
	<WeekendInfo />
{/if}
