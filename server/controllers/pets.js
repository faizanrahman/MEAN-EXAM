var mongoose = require('mongoose');
var Pet = mongoose.model('Pet');

module.exports = {
    getAllPets: function(req,res){
        console.log('Reached the get pets method');
        Pet.find({}, function(err,pets) {
            if(err){
                res.json(err);
            } else {
                res.json(pets);
            }
        })
    },
    getOnePet: function(req,res){
        console.log('Reached the get by id method');
        Pet.findOne({_id:req.params.id}, function(err, pet){
            if(err){
                console.log(err);
                res.json(err);
            } else {
                console.log("line 22, from server", pet);
                res.json(pet);
            }
        });
    },
    addNewPet: function(req,res){
        console.log('Reached the create pets method');
        console.log(req);
        var newPet = new Pet(req.body);
        newPet.save(function(err, newPet){
            if(err){
                console.log(err);
                res.json(err);
                // res.json(err['errors']['name']['message']);
            } else {
                console.log(newPet);
                res.json(newPet);
            }
        })
        
    },
    // updatePet: function(req,res){
    //     console.log('Reached the update pet method');
    //     console.log(req.body);
    //     Pet.updateOne({_id:req.params.id},req.body,(err,data=>{
    //         if(err){
    //             console.log(err);
    //             res.json(err);
    //         } else{
    //             console.log()
    //             console.log(data);
    //             res.json("Successfully updated pet");
    //         }
    //     }))
    // },
    updatePet: function(req,res){
        console.log('Reached the update pets method');
        console.log(req.body);
        Pet.findOne({_id:req.params.id}, function(err, data){
            if(err){
                console.log(err);
                res.json(err);
            } else {
                data.Name = req.body.Name,
                data.Type = req.body.Type,
                data.Description = req.body.Description,
                data.Skills = req.body.Skills;
                data.save(function(err,result){
                    if(err){
                        console.log(err);
                        res.json(err);
                    } else{
                        console.log(result);
                        res.json(result);
                    }
                })
                

                console.log('Successfully updated pet.');
                // res.json(data);

            }
        })
    },
    removePet: function(req,res){
        console.log('Reached the delete pet method');
        Pet.findByIdAndDelete(req.params.id, function(err) {
            if(err) {
                res.json(err);
            } else {
                res.json("Successfully deleted pet");
            }
        })
    },
}