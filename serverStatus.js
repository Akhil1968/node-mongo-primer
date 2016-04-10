var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;

mongoclient.connect("mongodb://127.0.0.1/cricketDB", function(err, db){
	var adminDB = db.admin();
	if (err){
		console.log("could not connect to db");
	}else{
		adminDB.serverStatus(function(err1, status){
			console.log(status);
		});
	}
});

console.log("End");