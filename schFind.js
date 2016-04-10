var mongoose = require('mongoose');
var ballByBallSchema = require("./ballByBallSchema.js").ballByBallSchema;

mongoose.connect('mongodb://127.0.0.1/cricketDB'); 
setTimeout( function(){ 
	mongoose.disconnect(); 
	}, 3000);

var ballByBallModel = mongoose.model('ballByBallModel', ballByBallSchema);


mongoose.connection.once('open', function(){
	var query = ballByBallModel.find({}); 
	query.where('striker', 'Sunil Gavaskar'); 
	
	query.select('striker runs over bowler'); 
	query.exec( function( err, results){
		for (var i in results){ 
			console.log( "In Over " + results[i].over + " " + results[i].striker 
				+ " scored " + results[i].runs + " runs against " + results[i].bowler); 
		}
	});


});