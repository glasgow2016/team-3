var express = require('express');
var router = express.Router();

var locationData = [{
    title: "Falkirk Community Stadium",
    description: "Opened in 2003, Falkirk Community Stadium is a great place to begin your journey. Best known, of course, as home to Falkirk Football Club, the stadium is also well used by local businesses, community and sporting groups and now stands at one of the main entrances to the Helix."
}, {
    title: "The Helix",
    description: "Helix Park is the newest and one of the most innovative parks in Scotland. Use the 27km of new pathway to explore all four zones that make up The Helix, or just explore Helix Park and its mixed biodiversity, from the woodlands to the wetlands and the wildflower meadows to the native bulb, hedges and trees. Helix Park opened in September 2013 and features an amazing splash jet area, the timber adventure play zone complete with accessible play area, a 200 metre diameter lagoon, a Great Lawn for events and a lagoon side cafe. Explore the varied places and spaces throught The Helix - The HArTT route will guide you through Helix South, Helix Park, past the Kelpies and into Helix North."
}, {
    title: "The Kelpies Hub",
    description: "Opened to the public in April 2014, and standing 30 metres high, The Kelpies rear up dramatically from the ground. These steel equine statues are the largest in the world and stand guard over the new extension to the Forth & Clyde canal. Here you will also find The Helix visitor centre that boasts a fascinating exhibition space, gift shop and cafe full of home baked treats."
}, {
    title: "The Wetland and River Carron",
    description: "Stop here and see nature do what nature does best. This quiet wetland has grown discreetly over recent years and is now home to and abundance of birds, beasties and aquatic wildlife."
}, {
    title: "Abbotshaugh Woods",
    description: "A series of colourful community woodland artworks pop up in unexpected places: 'The Human Sun Clock', 'Celtic Circle' and 'Love &amp; Kisses'. Created by Langlees and Bainsford residents and artist Jephson Robb as part of The Helix, Love &amp; Kisses celebrates community connections, and symbolises the healing that has taken place in this community."
}, {
    title: "Dawson Mural",
    description: "This vibrant community mural created by a local youth group and graffiti artist Scott Gilbert, transforms this underpass into outdoor artwork, and acts as a gateway to the woodlands."
}, {
    title: "Carron Works",
    description: "The largest iron works in Europe in its heyday, Carron was also famed for the 'Carronade', a short smoothbore, cast iron cannon developed for the Royal Navy in the 1770s. A replica of the Carrondade can be viewed in Callendar House."
}, {
    title: "Forth & Clyde Canal",
    description: ""
}, {
    title: "Rosebank Distillery",
    description: "Take a look at the still, mash and tun house and three bonded warehouses of the B listed former Rosebank Distillery (c.1817). Although the distillery is no longer operational, Rosebank Whisky, a triple distilled single malt, now fetches over £200 a bottle and plans are in place to bring the distillery back to life."
}, {
    title: "The Falkik Wheel",
    description: "Standing as high as eight double decker buses stacked together and weighing a mind blowing 1,200 tonnes, this is the world's only rotating boatlift. Take a trip on the Wheel, splash about in the Water Play area or grab something to eat."
}, {
    title: "Roughcastle Tunnel",
    description: "This short tunnel was carefully excavated when the Wheel was built so as not to disturb the remains of the Roman Antonine Wall of 142AD under which it passes."
}, {
    title: "Union Canal",
    description: "This 32 mile long waterway travels over aqueducts, through tunnels, past trinquil scenery and into the heart of Edinburgh."
}, {
    title: "Falkik High Railway Station",
    description: "Provides a rail link to Glasgow and Edinburgh, and walking and cycling links to Falkirk Town Centre and the canal network."
}, {
    title: "Falkirk Tunnel",
    description: "Let your imagination run riot in this 695 metre long, seemingly never ending tunnel carved out of rock. Pass under stalactites and stalagmites, tell spooky stories or learn why the 'Laughin Greetin Bridge' at the south eastern end is so named."
}, {
    title: "Callendar Park",
    description: "Falkirk' picturesque Callendar Wood is at least 500 years old, with a part of the Antonine wall within its boundaries; this is the grandfather of parks. Explore historic pahts and estate carriageways to find panoramic viewpoints, majestic old oaks, and sweet chestnuts, yew groves and tree lined avenues as well as a mausoleum and, when you've worked up an appetite, there's the Teashop in Callendar House."
}, {
    title: "Callendar House",
    description: "Dating from the 14th century, the magnificent Callendar House is bursting with exhibits interpreting the rich history of the area, from the Antonine wall onwards."
}, {
    title: "Westquarter Glen",
    description: "This hidden gorge is a real delight wit its waterfalls, stream and wood of yew, sycamore, oak, holly and larch trees. Stop and spot dippers, grey wagtails, kingfishers or even tawny owls and buzzards."
}, {
    title: "Primrose Road Underpass",
    description: "One of two pedestrian acces points into Grangemouth Town, the new canal at the kelpies, with a new towpath connecting into Grangemouth's Old Twon, provides an aexcellent new link past the Old Town/Glensburgh and onto the NCN 76."
}];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/rpitest", function(req, res, next) {
    // console.log(req.query.tagId);
    res.render('rpi_touchscreen', { title: 'RPI Internal View Test', tag: req.query.tagId, "locationTitle": locationData[req.query.tagId]["title"], "locationDesc": locationData[req.query.tagId]["description"]})
});

router.get("/youwin", function(req, res, next){
    res.render('youwin')
});

router.get("/mobile", function(req, res, next) {
    res.render('mobile', { title: 'Mobile'})
});


router.get("/instagramFeed", function(req,res,next) {
    res.send(GLOBAL.instagramDetails)
});

router.get("/questionGame", function(req, res, next){
  res.render('questionGame', { title: 'fuck'});
});

router.get("/bluemen", function(req, res, next){
    res.render('blueMen', { title: 'Blue Men of the Minch'});
});



module.exports = router;