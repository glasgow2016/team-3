/**
 * Created by Joshua on 06/11/2016.
 */
var locationDetails = [{
    title: "Falkirk Community Stadium",
    description: "Opened in 2003, Falkirk Community Stadium is a great place to begin your journey. Best known, of course, as home to Falkirk Football Club, the stadium is also well used by local businesses, community and sporting groups and now stands at one of the main entrances to the Helix.",
    lat: 56.00569136197395,
    long: -3.7531516089843535
}, {
    title: "The Helix",
    description: "Helix Park is the newest and one of the most innovative parks in Scotland. Use the 27km of new pathway to explore all four zones that make up The Helix, or just explore Helix Park and its mixed biodiversity, from the woodlands to the wetlands and the wildflower meadows to the native bulb, hedges and trees. Helix Park opened in September 2013 and features an amazing splash jet area, the timber adventure play zone complete with accessible play area, a 200 metre diameter lagoon, a Great Lawn for events and a lagoon side cafe. Explore the varied places and spaces throught The Helix - The HArTT route will guide you through Helix South, Helix Park, past the Kelpies and into Helix North.",
    lat: 56.01192940799509,
    long: -3.7598464026855254
}, {
    title: "The Kelpies Hub",
    description: "Opened to the public in April 2014, and standing 30 metres high, The Kelpies rear up dramatically from the ground. These steel equine statues are the largest in the world and stand guard over the new extension to the Forth & Clyde canal. Here you will also find The Helix visitor centre that boasts a fascinating exhibition space, gift shop and cafe full of home baked treats.",
    lat: 56.019106727935466,
    long: -3.755308435937536
}, {
    title: "The Wetland and River Carron",
    description: "Stop here and see nature do what nature does best. This quiet wetland has grown discreetly over recent years and is now home to and abundance of birds, beasties and aquatic wildlife.",
    lat: 56.0220704,
    long: -3.7674155
}, {
    title: "Abbotshaugh Woods",
    description: "A series of colourful community woodland artworks pop up in unexpected places: 'The Human Sun Clock', 'Celtic Circle' and 'Love &amp; Kisses'. Created by Langlees and Bainsford residents and artist Jephson Robb as part of The Helix, Love &amp; Kisses celebrates community connections, and symbolises the healing that has taken place in this community.",
    lat: 56.02581396244891,
    long: -3.7726844205321868
}, {
    title: "Dawson Mural",
    description: "This vibrant community mural created by a local youth group and graffiti artist Scott Gilbert, transforms this underpass into outdoor artwork, and acts as a gateway to the woodlands.",
    lat: 56.02125206476183,
    long: -3.7807504867553234
}, {
    title: "Carron Works",
    description: "The largest iron works in Europe in its heyday, Carron was also famed for the 'Carronade', a short smoothbore, cast iron cannon developed for the Royal Navy in the 1770s. A replica of the Carrondade can be viewed in Callendar House.",
    lat: 56.01901944469636,
    long: -3.8006966535645006
}, {
    title: "Forth & Clyde Canal",
    description: "",
    lat: 56.005838,
    long: -3.795557
}, {
    title: "Rosebank Distillery",
    description: "Take a look at the still, mash and tun house and three bonded warehouses of the B listed former Rosebank Distillery (c.1817). Although the distillery is no longer operational, Rosebank Whisky, a triple distilled single malt, now fetches over £200 a bottle and plans are in place to bring the distillery back to life.",
    lat: 56.002298,
    long: -3.805644
}, {
    title: "The Falkik Wheel",
    description: "Standing as high as eight double decker buses stacked together and weighing a mind blowing 1,200 tonnes, this is the world's only rotating boatlift. Take a trip on the Wheel, splash about in the Water Play area or grab something to eat.",
    lat: 56.00024155231926,
    long: -3.841645576318342
}, {
    title: "Roughcastle Tunnel",
    description: "This short tunnel was carefully excavated when the Wheel was built so as not to disturb the remains of the Roman Antonine Wall of 142AD under which it passes.",
    lat: 55.99935211727607,
    long: -3.8422471951538455
}, {
    title: "Union Canal",
    description: "This 32 mile long waterway travels over aqueducts, through tunnels, past trinquil scenery and into the heart of Edinburgh.",
    lat: 55.99582419760186,
    long: -3.84138888826908
}, {
    title: "Falkik High Railway Station",
    description: "Provides a rail link to Glasgow and Edinburgh, and walking and cycling links to Falkirk Town Centre and the canal network.",
    lat: 55.991095800284505,
    long: -3.7961561154419314
}, {
    title: "Falkirk Tunnel",
    description: "Let your imagination run riot in this 695 metre long, seemingly never ending tunnel carved out of rock. Pass under stalactites and stalagmites, tell spooky stories or learn why the 'Laughin Greetin Bridge' at the south eastern end is so named.",
    lat: 55.99066373514341,
    long: -3.7946540783935916
}, {
    title: "Callendar Park",
    description: "Falkirk' picturesque Callendar Wood is at least 500 years old, with a part of the Antonine wall within its boundaries; this is the grandfather of parks. Explore historic pahts and estate carriageways to find panoramic viewpoints, majestic old oaks, and sweet chestnuts, yew groves and tree lined avenues as well as a mausoleum and, when you've worked up an appetite, there's the Teashop in Callendar House.",
    lat: 55.992264005548776,
    long: -3.7735324872802494
}, {
    title: "Callendar House",
    description: "Dating from the 14th century, the magnificent Callendar House is bursting with exhibits interpreting the rich history of the area, from the Antonine wall onwards.",
    lat: 55.99341612083509,
    long: -3.7662368787597416
}, {
    title: "Westquarter Glen",
    description: "This hidden gorge is a real delight wit its waterfalls, stream and wood of yew, sycamore, oak, holly and larch trees. Stop and spot dippers, grey wagtails, kingfishers or even tawny owls and buzzards.",
    lat: 55.992148001417604,
    long: -3.7464013227538544
}, {
    title: "Primrose Road Underpass",
    description: "One of two pedestrian acces points into Grangemouth Town, the new canal at the kelpies, with a new towpath connecting into Grangemouth's Old Twon, provides an aexcellent new link past the Old Town/Glensburgh and onto the NCN 76.",
    lat: 56.00554398769251,
    long: -3.7386443558197016
}];


console.log("Fired event");
$('#reader').html5_qrcode(function(data){
        console.log(data);
        alert(data);
        // do something when code is read
    },
    function(error){
        //show read errors
    }, function(videoError){
        //the video stream could be opened
    }
);

function getDistance(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}



function geoLocation() {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            updateWebpage({"lat": position.coords.latitude, "long": position.coords.longitude});
        },
        function () {
            alert('Error locating your device');
        },
        {enableHighAccuracy: true}
    );
}

function updateWebpage(location) {
    var nLocation;
    var minimum = 10000;




    locationDetails.forEach(function(locat) {
        var dist = getDistance(location["lat"], location["lon"], locat["lat"], locat["lon"]);
        if (dist > minimum) {
            minimum = dist;
            nLocation = locat;
        }
    });

    
}

geoLocation();
setTimeout(function(){
    geoLocation();
}, 30000);

console.log("Fired 2");