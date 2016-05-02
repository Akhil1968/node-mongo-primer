var MongoClient = require('mongodb').MongoClient; 

MongoClient.connect("mongodb://127.0.0.1/", function( err, db) { 
  if(err) throw err;
  console.log("Connection successfully established to mongoDB server");
  var mydb = db.db("VehiclesDB");
  //var mydb = db;
  mydb.collection("Vehicles", function(err, coll){
  	if (err){
  		console.log("Vehicles collection not found!");
  	}else{
		console.log("Found the  collection 'Vehicles' successfully!");
	  	//console.log(veh);
	  	coll.find(function(er, docsCursor){
	  		if (!er){
	  			console.log("-:Documents within collection Vehicle:-");
	  			docsCursor.each(function(errorADoc, aDoc){
		  			if (aDoc){
		  				console.log(" Document " + JSON.stringify(aDoc));
		  			}else{
		  				console.log("No more documents found within the collection")
		  				mydb.close();
		  			}
	  			});//docsCursor.each
	  		}//if (!er)
	  	});//coll.find()
  	}	
  });// mydb.collection
 });//MongoClient.connect(