<script lang="ts">
	import { onMount } from 'svelte';
	import store from '../lib/store.js';
	import Message from './message.svelte';
	let message: string;
	let messages: string[] = [];

	onMount(() => {
		store.subscribe((currentMessage) => {
			messages = [...messages, currentMessage];
		});
	});

	function onSendMessage() {
		if (message && message.length > 0) {
			store.storeMessage(message);
			store.sendMessage(message);
			message = '';
		}
	}
</script>

<h1>Echo test</h1>

<input type="text" bind:value={message} class="message-input" />
<button on:click={onSendMessage}> Send Message </button>
{#each messages as message, i}
	<Message {message} direction={i % 2 == 0 ? 'right' : 'left'} />
{/each}

<style>
	.message-input {
		background-color: #f0f0f0; /* Hintergrundfarbe */
		color: #333; /* Textfarbe */
		border: 1px solid #ccc; /* Rahmenfarbe */
		padding: 10px; /* Innenabstand */
	}
</style>
