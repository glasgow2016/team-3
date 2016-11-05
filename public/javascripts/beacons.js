/**
 * Created by Edsterr on 05/11/2016.
 */

function beaconGenerator(){

    var beacons = ["Falkirk Community Stadium","The Helix","The Kelpies Hub","The Wetland and River Carron","Abbotshaugh Woods","Dawson Mural","Carron Works","Forth & Clyde Canal","Rosebank Distillery","The Falkirk Wheel","Roughcastle Tunnel","Union Canal","Falkirk High Railway Station","Falkirk Tunnel","Callendar Park","Callendar House","Westquarter Glen","Primrose Road Underpass"]
    var beaconNo = range(0,beacons.length);
    var newBeaconTime = 30000;
    var currentBeacon = "";

    setInterval(function(){p(beacons[getBeacon(beaconNo,currentBeacon)])},newBeaconTime);

    function getBeacon(listB,currentB) {
        if (currentB === "") {
            return listB[Math.floor(Math.random() * listB.length)];
        }
        var ranBea = listB[Math.floor(Math.random() * listB.length)];
        if (ranBea == currentB) {
            ranBea = getBeacon(listB, ranBea);
        }
        return ranBea;
    }

    function p(b){
        console.log(b);
    }

    function range(low,high){
        var arr = [];
        for (var i = low;i<high;i++){
            arr.push(i);
        }
        return arr;
    }
}
