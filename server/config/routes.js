var mongoose = require('mongoose');

// <*> Model links, adjust path as needed
// const Sample = mongoose.model('SamplePrimary');
// const Dependent = mongoose.model('SampleDependent');
var pets = require('../controllers/pets.js');

module.exports = function(app) {
    app.get('/api/pets', function(req, res){
        pets.getAllPets(req, res);
    });
    app.get('/api/pets/:id', function(req,res){
        pets.getOnePet(req,res);
    })
    app.post('/api/new', function(req,res) {
        pets.addNewPet(req, res);
    });
    app.put('/api/update/:id', function(req,res){
        pets.updatePet(req, res);
    });
    app.delete('/api/delete/:id', function(req,res){
        pets.removePet(req, res);
    });
}