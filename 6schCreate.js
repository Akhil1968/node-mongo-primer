var mongoose = require('mongoose');
var VehSch = require("./VehiclesSchema.js").VehiclesSchema;

mongoose.connect('mongodb://127.0.0.1/VehiclesDB'); 

var VehiclesModel = mongoose.model('VehiclesModel', VehSch);
console.log(" *** MONGOOSE Adding a new document  ***");

mongoose.connection.on('open', function(){
  var newVModel = new VehiclesModel();
  newVModel.vehicle = 'train';
  newVModel.model = 'TVG';
  newVModel.speed = 651;
  newVModel.qty = 100;
   //save to db through model :: Add a record
  newVModel.save(function(err, savedObj){
     if(err){
       console.log(JSON.stringify(err));
     }else{
       console.log(savedObj);
     }
     mongoose.disconnect();
   }); //newVModel.save

});