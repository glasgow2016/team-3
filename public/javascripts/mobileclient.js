/**
 * Created by Joshua on 06/11/2016.
 */

console.log("Fired event");
$('#reader').html5_qrcode(function(data){
        console.log(data);
        // do something when code is read
    },
    function(error){
        //show read errors
    }, function(videoError){
        //the video stream could be opened
    }
);

console.log("Fired 2");