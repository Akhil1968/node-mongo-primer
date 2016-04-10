var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connect('mongodb://127.0.0.1/cricketDB'); 

var ballByBallSchema = new Schema({ 
 	striker: {type: String, index: 1, required:true, unique: true}, 
 	runs: {type: Number}, 
 	over: {type: Number}, 
 	wicket: {type: Number},
 	nonStriker: {type: String},
 	valid: Boolean,
 	invalid: {type: String},
 	bowler: {type: String}
}, {collection: 'BALLBYBALL'});

var ballByBallModel = mongoose.model('ballByBallModel', ballByBallSchema);


mongoose.connection.once('open', function(){
	var query = ballByBallModel.find({}); 
	query.where('striker', 'Sachin Tendulkar'); 
	
	query.select('striker runs over bowler'); 
	query.exec( function( err, results){
		for (var i in results){ 
			console.log( "In Over " + results[i].over + " " + results[i].striker 
				+ " scored " + results[i].runs + " runs against " + results[i].bowler); 
		}
	});


});

setTimeout( function(){ 
	mongoose.disconnect(); 
}, 3000);










