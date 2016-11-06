/**
 * Created by Joshua on 05/11/2016.
 */
var socket;

function onLoad() {
    console.log("On load");
    socket = io.connect("http://localhost:8080", {transports: ["websocket"]});
    // socket = io.connect("https://code4good.pw:443", {transports: ["websocket"]});
    this.setEventHandlers();
}

function setEventHandlers() {
    console.log("Event handlers set");
    socket.on("connect", this.onSocketConnected);
    socket.on("newBeacon", this.onNewBeacon);
}

function onSocketConnected() {
    console.log("Socket connected");
}

function onNewBeacon(beacon) {
    markers.forEach(function(marker) {
        if (marker.title == beacon) {
            marker.setIcon("https://mapbuildr.com/assets/img/markers/solid-pin-red.png");
        } else {
            marker.setIcon("https://mapbuildr.com/assets/img/markers/solid-pin-black.png");
        }
    });
    var num = window.location.href;
    num = num.substr(num.indexOf("tagId") + 6, num.length - num.indexOf("tagId") - 6);
    console.log(num);
    markers[num].setIcon("https://mapbuildr.com/assets/img/markers/solid-pin-green.png");
}


onLoad();