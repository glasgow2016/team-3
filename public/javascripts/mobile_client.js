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
    console.log("Event handlers set");
    socket.on("connect", this.onSocketConnected);
}

function onSocketConnected() {
    console.log("Socket connected");
    $("#test").text("Connected to SocketIO");
    console.log("Text set");
}

onLoad();