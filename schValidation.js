var mongoose = require('mongoose');
var ballByBallSchema = require("./ballByBallSchema.js").ballByBallSchema;

mongoose.connect('mongodb://127.0.0.1/cricketDB'); 
setTimeout( function(){ 
	mongoose.disconnect(); 
	}, 3000);

var ballByBallModel = mongoose.model('ballByBallModel', ballByBallSchema);

ballByBallModel.schema.path("runs").validate(function(val){	return   val < 6;	}, 	"Invalid value in field 'run' ");

mongoose.connection.once('open', function(){
	ballByBallModel.create({
			over:4, runs:9, wicket:0, striker:"Sunil Gavaskar", 
			nonStriker:"Sachin Tendulkar", valid:true, Invalid:"", bowler: "Imran Khan"
		}, 
		function( err, results){
			if (err){
				console.log("No record inserted. Error:" + err.errors.runs.message);
			}else{
				console.log( "a row created"); 
				console.log(results);
			}
	});
});