<script lang="ts">
	import { onMount } from 'svelte';
	// import store from '../lib/store.js';
	import Message from './message.svelte';
	import { Client } from '@stomp/stompjs';
	let message: {
		nickname: string;
		message: string;
	} = { nickname: '', message: '' };
	let messages: Array<{
		nickname: string;
		message: string;
	}> = [];
	let connected = false;
	let stompClient: Client;

	onMount(() => {
		// store.subscribe((currentMessage) => {
		// 	messages = [...messages, currentMessage];
		// });

		const client = new Client({
			brokerURL: 'ws://localhost:8080/ws',
			onConnect: () => {
				client.subscribe('/topic/message', (message) => {
					const body = JSON.parse(message.body);
					messages = [...messages, body];
				});
				// client.publish({ destination: '/topic/message', body: 'First Message' });
			}
		});
		client.activate();
		stompClient = client;
		connected = true;
	});

	const sendMessage = () => {
		if (message.message.trim() && connected && stompClient) {
			const body = { nickname: message.nickname.trim(), message: message.message.trim() };
			stompClient.publish({ destination: '/topic/message', body: JSON.stringify(body) });
			message.message = '';
		} else {
			console.log('Connection not established or message empty.');
		}
	};
</script>

<h1>Chat test</h1>
<input type="text" placeholder="Nickname" class="message-input" bind:value={message.nickname} />
<input type="text" placeholder="Message" bind:value={message.message} class="message-input" />
<button on:click={sendMessage}> Send Message </button>
{#each messages as m, i}
	<Message message={m.message} direction={m.nickname == message.nickname ? 'right' : 'left'} />
{/each}

<style>
	.message-input {
		background-color: #f0f0f0; /* Hintergrundfarbe */
		color: #333; /* Textfarbe */
		border: 1px solid #ccc; /* Rahmenfarbe */
		padding: 10px; /* Innenabstand */
	}
</style>
