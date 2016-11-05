/**
 * Created by Edsterr on 05/11/2016.
 */

//Create test beacons array
var beacons = [];
for (var i = 0; i <= 10; i++) {
    beacons.push(i);
}

//Init current beacons
var currentBeacon = 0;

currentBeacon = getBeacon(beacons,currentBeacon);

function getBeacon(listB,currentB){
    if (currentB === 0){
        return listB[Math.floor(Math.random() * listB.length)];
    }
    var ranBea = listB[Math.floor(Math.random() * listB.length)];
    if (ranBea == currentB) {
        ranBea = getBeacon(listB, ranBea);
    }
    return ranBea;
}
