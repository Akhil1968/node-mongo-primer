var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ballByBallSchema = new Schema({ 
 	striker: {type: String, index: 1, required:true, unique: true}, 
 	runs: {type: Number}, 
 	over: {type: Number}, 
 	wicket: {type: Number},
 	nonStriker: {type: String},
 	valid: Boolean,
 	invalid: {type: String},
 	bowler: {type: String},
 	outSescr: {type: String}
}, {collection: 'BALLBYBALL'});


exports.ballByBallSchema = ballByBallSchema;
