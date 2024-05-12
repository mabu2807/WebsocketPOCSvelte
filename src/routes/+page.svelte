<script>
	import {browser} from '$app/environment';
	
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
	
	if (browser) {
		const socket = new SockJS('http://localhost:8080/ws');
		socket.addEventListener("open", ()=> {
			console.log("Opened")
		})
	}
	</script>