/**
 * Created by Joshua on 05/11/2016.
 */
var socket;

function onLoad() {
    console.log("On load");
    socket = io.connect("http://localhost:8080", {port: 8080, transports: ["websocket"]});
    this.setEventHandlers();
}

function setEventHandlers() {
    socket.on("connect", this.onSocketConnected)

}

function onSocketConnected() {
    $("#nodeTest").val("Connected to SocketIO Server")
}

onLoad();