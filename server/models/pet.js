var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PetSchema = new mongoose.Schema({
    Name: { type: String, required: [true, "PetName is required"], minlength: [3, "More than 3 characters pleaseee."] },
    Type: { type: String, required: [true, "Pet Type is required. Ex) Dog, Cat, Rabbit"], minlength:[3, "Atleast 3 characters are required"] },
    Description: { type: String, required: [true, "Pet Description is required"], minlength:[3, "3 characters or more"] },
    Skills: [ String ],
}, { timestamps: true })



mongoose.model('Pet', PetSchema); // Make changes as appropriate.