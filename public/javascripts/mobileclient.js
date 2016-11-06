/**
 * Created by Joshua on 06/11/2016.
 */
$('#reader').html5_qrcode(function(data){
        // do something when code is read
    },
    function(error){
        //show read errors
    }, function(videoError){
        //the video stream could be opened
    }
);
