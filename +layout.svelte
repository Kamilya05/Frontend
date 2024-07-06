<script>
	import Header from './Header.svelte';
	import '../app.css';
	import Links from "./Links.svelte";
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Links />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>
