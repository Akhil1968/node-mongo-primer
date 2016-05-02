var MongoClient = require('mongodb').MongoClient; 
var chalk = require('chalk');

MongoClient.connect("mongodb://127.0.0.1/", function( err, db) { 
  if(err) throw err;
  console.log(chalk.green("Connection successfully established to mongoDB server"));
  var mydb = db.db("VehiclesDB");
  //var mydb = db;
  mydb.collection("Vehicles", function(err, coll){
  	if (err){
  		console.log(chalk.red("Vehicles collection not found!"));
  	}else{
		console.log(chalk.green("Found the  collection 'Vehicles' successfully!"));
	  	coll.find({},
	  			{fields:{speed:1, vehicle:1, _id:0}, 
	  			sort:[['speed',-1]], limit:3}, 
	  			function(er, cursor){
	  		if (!er){
	  			console.log(chalk.green("-:Documents within collection Vehicle:-"));
	  			cursor.each(function(errorADoc, aDoc){
		  			if (aDoc){
		  				//console.log(JSON.stringify(aDoc));
		  				console.log(chalk.green("Vehicle " + aDoc.vehicle + " has speed of " + aDoc.speed + " kmph"));
		  			}else{
		  				console.log(chalk.green("-::::-"));
		  			}
	  			});
	  		}//if (!er)	
	  		});//coll.find
	}	
  });// collection Vehicle

  mydb.collection("Vehicles", function(err, mycoll){
  	if (err){
  		console.log(chalk.red("Vehicles collection not found!"));
  	}else{
	  	//count
	  	mycoll.count({vehicle:"car"}, function(err, count){ 
	  		console.log(chalk.yellow(" no of documents containing car : " + count));
	  	});//coll.count

	  	//distinct
	  	console.log(chalk.bgRed.white("Distict speeds"));
	  	mycoll.distinct('speed', function(err, arr){
	  		console.log(chalk.bgRed.white(arr.toString()));
	  		mydb.close();
	  	});//coll.distinct
  	}//else of if (err)
  });//mydb.collection
 });//MongoClient.connect