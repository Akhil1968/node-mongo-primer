var mongoose = require('mongoose');
var VehSch = require("./VehiclesSchema.js").VehiclesSchema;

mongoose.connect('mongodb://127.0.0.1/VehiclesDB'); 

//setTimeout( function(){ mongoose.disconnect(); }, 3000);

var VehiclesModel = mongoose.model('VehiclesModel', VehSch);
console.log(" *** MONGOOSE Find : Native driver way ***");

mongoose.connection.once('open', function(){
	VehiclesModel.find({model:'TVG'}, function(er, array){
		if (!er){
			console.log(JSON.stringify(array));
		}//if (!er)
		mongoose.disconnect();
	}); //VehiclesModel.find
});//mongoose.connection.once