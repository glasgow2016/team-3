/**
 * Created by Joshua on 05/11/2016.
 */
var socket;

function onLoad() {
    console.log("On load");
    socket = io.connect(SERVER, {transports: ["websocket"]});
    this.setEventHandlers();
    this.geoLocation();
}

function setEventHandlers() {
    console.log("Event handlers set");
    socket.on("connect", this.onSocketConnected);
    socket.on("newBeacon", this.onNewBeacon);
}

function onSocketConnected() {
    console.log("Socket connected");
    $("#test").text("Connected to SocketIO");
    console.log("Text set");
}

function onNewBeacon(beacon) {
    alert("New beacon: " + beacon);
}

function geoLocation() {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            alert('Latitude: ' + position.coords.latitude + ', Longitude: ' + position.coords.longitude + ', Altitude: ' + position.coords.altitude);
        },
        function () {
            alert('Error locating your device');
        },
        {enableHighAccuracy: true}
    );
}

onLoad();