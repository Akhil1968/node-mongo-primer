var MongoClient = require('mongodb').MongoClient; 
console.log(".......This programs lists documents in a Collection......");
MongoClient.connect("mongodb://127.0.0.1/", function( err, db) { 
  if(err) throw err;
  console.log("Connection successfully established to mongoDB server");
  var mydb = db.db("meanDB");
  //var mydb = db;
  mydb.collection("Vehicle", function(err, veh){
  	if (err){
  		console.log("Vehicle collection not found!");
  	}else{
		console.log("Found the  collection 'Vehicle' successfully!");

	  	//find
	  	veh.find({vehicle:"car"},{fields:{speed:1, vehicle:1, _id:0}, sort:[['speed',-1]], limit:3}, function(er, cursor){
	  		if (!er){
	  			console.log("-:Documents within collection Vehicle:-");
	  			cursor.each(function(errorADoc, aDoc){
		  			if (aDoc){
		  				console.log(JSON.stringify(aDoc));
		  				console.log("Vehicle " + aDoc.vehicle + " has speed of " + aDoc.speed + " kmph");
		  			}else{
		  				console.log("-::::-")
		  			}
	  		
	  			});
	  		}
	  		
	  	});//find()

	  	//count
	  	veh.count({vehicle:"jeep"}, function(err, count){ 
	  		console.log(" no of documents containing Jeep : " + count);
	  	});//count()

	  	//distinct
	  	console.log("Distict speeds");
	  	veh.distinct('speed', function(err, arr){
	  		console.log(arr.toString());
	  	});//distinct()

		setTimeout( function(){ mydb.close(); }, 100);
  	}	
  });// collection Vehicle
 });