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
	  	//console.log(veh);
	  	veh.find(function(er, docsCursor){
	  		if (!er){
	  			console.log("-:Documents within collection Vehicle:-");
	  			docsCursor.each(function(errorADoc, aDoc){
		  			if (aDoc){
		  				console.log(" Document " + JSON.stringify(aDoc));
		  			}else{
		  				console.log("No more documents found within the collection")
		  			}
	  		
	  			});
	  		}
	  		setTimeout( function(){ mydb.close(); }, 100);
	  	});//find()
  	}	
  });// find a collection Vehicle
 });