<script>
	import { onMount } from "svelte";
	import { fly, fade } from "svelte/transition";
	let load = false;
	onMount(async () => {
		load = true;
	});
</script>

<main>
	{#if load}
		<div in:fly={{ y: 200, duration: 2000 }} out:fade>
			<h1>Arı Makina</h1>

			<p class="read-the-docs">Yapım Aşamasında</p>
			<p class="reach-us">
				Bize
				<a href="https://www.gentiger.com.tw/en/">Gentiger sitesinden</a>
				veya
				<a href="mailto:email@email.com">e-mailimizden</a>
				ulaşın
			</p>
		</div>
	{/if}
</main>

<style>
	.reach-us {
		color: darkgray;
		font-size: medium;
	}
	.read-the-docs {
		color: #888;
		font-size: large;
	}
</style>
