var mongoose = require('mongoose');
var VehSch = require("./VehiclesSchema.js").VehiclesSchema;

mongoose.connect('mongodb://127.0.0.1/VehiclesDB'); 

//setTimeout( function(){ mongoose.disconnect(); }, 3000);

var VehiclesModel = mongoose.model('VehiclesModel', VehSch);
console.log(" *** MONGOOSE Find : SQL way ***");

mongoose.connection.once('open', function(){
	var query = VehiclesModel.find({}); 
	query.where('vehicle', 'train'); 
	
	query.select('vehicle speed  model'); 
	query.exec( function( err, results){
		for (var i in results){ 
			console.log( results[i].model + " has the max spped of " 
				+ results[i].speed + " kmph "); 
		}
		mongoose.disconnect();
	});
	

});