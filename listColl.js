var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;
// list collections 
mongoclient.connect("mongodb://127.0.0.1/", function( err, db) { 
  if(err) throw err;

  var mydb = db.db("cricketDB");
  mydb.collections(function(err, collections){
  	//console.log(collections);
  	for(var i=0; i<collections.length; i++){
  		console.log("Collection " + ( i + 1 ) + " : " + collections[i].namespace)
  	}
  	mydb.close();
  });
  
 });