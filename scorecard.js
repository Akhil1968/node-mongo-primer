var MongoClient = require('mongodb').MongoClient; 
MongoClient.connect("mongodb://127.0.0.1/", function( err, db) { 
  if(err) throw err;
  console.log("Connection successfully established to mongoDB server");
  var mydb = db.db("cricketDB");

  mydb.collection("BALLBYBALL", function(err, coll){
  	if (err){
  		console.log("BALLBYBALL collection not found!");
  	}else{
		coll.group(['striker'], //keys
			{valid:true}, //query
			{"runsByPlayer": 0, "ballsFacedByPlayer": 0}, //initial
			function (obj, prev) { 
				prev.runsByPlayer += obj.runs; 
				prev.ballsFacedByPlayer++;
			}, //reduceFunction
			{}, //finalize
			true, // command uses internal group command for performance
			function( err, results){ 
				console.log("---:::Score Card:::--- "); 
				//console.log( results); 
				results.forEach (function(result){
					console.log(result.striker + " scored " + result.runsByPlayer + " in " + result.ballsFacedByPlayer + " balls");
				} );
		});
		setTimeout( function(){ mydb.close(); }, 100);
  	}	
  });// collection 
 });




