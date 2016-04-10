var mongoose = require('mongoose');
var ballByBallSchema = require("./ballByBallSchema.js").ballByBallSchema;

mongoose.connect('mongodb://127.0.0.1/cricketDB'); 
setTimeout( function(){ 
	mongoose.disconnect(); 
	}, 3000);

var ballByBallModel = mongoose.model('ballByBallModel', ballByBallSchema);

mongoose.connection.once('open', function(){
	ballByBallModel.remove({over: 4}, function(err, removedCount){
		console.log("%d documents deleted", removedCount);
	});
});