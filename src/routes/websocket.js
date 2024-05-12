
import websocketStore from "svelte-websocket-store";

const initialValue = { };
export const myStore = websocketStore("http://localhost:8080/ws",);


// send JSON to websocket server
$myStore = { content: "to be saved", other_values: "all" };


// receive JSON from server (push)
let response = $myStore;