var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;
// list collections 
mongoclient.connect("mongodb://127.0.0.1/", function( err, db) { 
  if(err) throw err;

  var mydb = db.db("VehiclesDB");
  mydb.collections(function(err, collsArray){
  	//console.log(collections);
  	for(var i=0; i<collsArray.length; i++){
  		console.log("Collection " + ( i + 1 ) + " : " + collsArray[i].namespace)
  	}
  	mydb.close();
  });
  
 });