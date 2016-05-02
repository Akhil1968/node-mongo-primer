var mongoose = require('mongoose');
var VehSch = require("./VehiclesSchema.js").VehiclesSchema;

mongoose.connect('mongodb://127.0.0.1/VehiclesDB'); 

var VehiclesModel = mongoose.model('VehiclesModel', VehSch);
console.log(" *** MONGOOSE Update  ***");

mongoose.connection.on('open', function(){
	var query = VehiclesModel.update({}, 
						 			 {$set:{qty:3}}, 
						 			 {multi:true});
	query.where('model', 'TVG'); 
	query.exec( function(err, obj){
		if (err){
			console.log(JSON.stringify(err));
		}else{
			console.log(obj);
		}//if (!er)
		mongoose.disconnect();
	}); //VehiclesModel.exec


});