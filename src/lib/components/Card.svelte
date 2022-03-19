<script lang="ts">
	export let card = undefined
</script>

<div class="card {card.cardClass}">
	{@html card.title}
	<ul>
		{#each card.list ?? [] as item}
			<li>{@html item}</li>
		{/each}
	</ul>
</div>
