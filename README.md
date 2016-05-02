# a node.js application explaining the following :----
	mongodb native driver- accessing mongodb using native driver from nodejs
   mongoose- accessing mongodb from nodejs
   
----------------------
---MongoDB Shell---

use May1DB
show collections
show dbs

db.createCollection('Vehicles');
var coll = db.getCollection('Vehicles');
coll.find();

coll.insert({vehicle:'bycicle', model:'Maruti', speed:100, qty:40});
coll.insert({vehicle:'car', model:'BMW', speed:200});
coll.insert({vehicle:'train', model:'TVG', speed:600});
coll.insert({vehicle:'train', model:'Indian Rail', speed:200});
coll.insert({vehicle:'aircraft', model:'Boeing', speed:1500});
coll.insert({vehicle:'aircraft', model:'Airbus', speed:1200});

coll.find();
coll.find().pretty();
coll.find({vehicle:'car'});
coll.find({speed:600});
coll.find({speed:{$gt:150}});

myColl.update({model:'TVG'}, {$set:{speed:650}}, {multi:false});
coll.update({model:'BMW'}, {$set:{qty:50}}, {multi:false});
myColl.update({model:'Maruti'}, {$set:{qty:55}}, {multi:false});
myColl.update({model:'TVG'}, {$set:{qty:3}}, {multi:false});
myColl.update({model:'Boeing'}, {$set:{qty:3}}, {multi:false});
myColl.update({model:'Indian Rail'}, {$set:{qty:10}}, {multi:false});
myColl.update({model:'Airbus'}, {$set:{qty:1}}, {multi:false});
myColl.update({model:'TVG'}, {$set:{qty:1}}, {multi:false});


coll.remove({model:'Airbus'});

coll.count({vehicle:'car'});




