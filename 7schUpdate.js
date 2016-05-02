var mongoose = require('mongoose');
var VehSch = require("./VehiclesSchema.js").VehiclesSchema;

mongoose.connect('mongodb://127.0.0.1/VehiclesDB'); 
//setTimeout( function(){ mongoose.disconnect(); }, 1000);
var VehiclesModel = mongoose.model('VehiclesModel', VehSch);
console.log(" *** MONGOOSE Update  ***");

mongoose.connection.on('open', function(){
	VehiclesModel.update({model:'TVG'}, 
						 {$set:{qty:6}}, 
						 {multi:true}, 
						 function(err, obj){
						 		console.log("Not sure");
								if (err){
									console.log("err");
									console.log(JSON.stringify(err));
								}else{
									console.log("No err");
									console.log(obj);
								}//if (!er)
								mongoose.disconnect();
						}); //VehiclesModel.update
	

});