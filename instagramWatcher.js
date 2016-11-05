/**
 * Created by Joshua on 05/11/2016.
 */
var httpreq = require('httpreq');
var url;
var onCallback;
function InstagramPosts(tag, callback) {
    onCallback = callback;
    url = 'https://api.instagram.com/publicapi/v1/tags/' + tag + '/media/recent?access_token=4120980977.ba4c844.ece42af7dddc490bbc0fff6acdd625b0';
}


InstagramPosts.prototype.getPosts = function() {

    httpreq.get(url, function (err, res){
         onCallback(res.body);
    });



    // var content = "";
    //
    // var req = http.request(options, function(res) {
    //     console.log('STATUS: ' + res.statusCode);
    //     console.log('HEADERS: ' + JSON.stringify(res.headers));
    //     res.setEncoding('utf8');
    //     res.on('data', function (chunk) {
    //         console.log('BODY: ' + chunk);
    //     });
    // });
    //
    // req.on('error', function(e) {
    //     console.log('problem with request: ' + e.message);
    // });
    //
    //
    // req.write("data\n");
    // req.write("data\n");
    // req.end();

};

module.exports = InstagramPosts;