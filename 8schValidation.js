var mongoose = require('mongoose');
var VehSch = require("./VehiclesSchema.js").VehiclesSchema;

mongoose.connect('mongodb://127.0.0.1/VehiclesDB'); 
//setTimeout( function(){ mongoose.disconnect(); }, 1000);
console.log(" *** MONGOOSE Schema Validation  ***");
var VehiclesModel = mongoose.model('VehiclesModel', VehSch);
// following line defines a validation rule on field "runs" 
VehiclesModel.schema.path("speed").validate(function(val){	return   val > 50;}, 
											"Invalid value in field 'speed' ");

mongoose.connection.on('open', function(){
	VehiclesModel.create({vehicle:'Ship', model:'Blueliner', speed:40, qty:17}, 
		function( err, results){
			console.log("Creating a document");
			if (err){
				console.log("No record inserted. Error:" + 
					err.errors.speed.message);
			}else{
				console.log( "a row created"); 
				console.log(results);
				
			}

			mongoose.disconnect();
	});//VehiclesModel.create
});//mongoose.connection.once(