// import { writable } from 'svelte/store';

// let socket: WebSocket | null = null;

// if (typeof window !== 'undefined') {
// 	socket = new WebSocket('ws://localhost:8080/chat');
// }
// const messageStore = writable('');

// if (socket) {
// 	// Connection opened
// 	socket?.addEventListener('open', function (event: Event) {
// 		console.log("It's open");
// 		console.log(event);
// 	});

// 	// Listen for messages
// 	socket?.addEventListener('message', function (event) {
// 		console.log('Message from server ', event.data);
// 		messageStore.set(event.data);
// 	});
// }

// const sendMessage = (message: string) => {
// 	if (socket && socket.readyState <= 1) {
// 		socket.send(message);
// 	}
// };

// const storeMessage = (message: string) => {
// 	messageStore.set(`You: ${message}`);
// };

// export default {
// 	subscribe: messageStore.subscribe,
// 	storeMessage,
// 	sendMessage
// };
