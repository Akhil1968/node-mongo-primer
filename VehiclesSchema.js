var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VehSchema = new Schema({ 
 	vehicle: {type: String, required:true}, 
 	model: {type: String}, 
 	speed: {type: Number},
 	qty:{type:Number}
}, {collection: 'Vehicles'});


exports.VehiclesSchema = VehSchema;
