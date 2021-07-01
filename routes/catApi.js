const express = require('express');
const router = express.Router();
const Cat = require('../models/cat');

// get a list of cat from the database
router.get('/cat',function(req,res,next){
    Cat.find({}).then(function(cat){
        res.send(cat);
    }).catch(next);
});

// add a new cat to database
router.post('/cat',function(req,res,next){
    Cat.create(req.body).then(function(cat){
        res.send(cat);
    }).catch(next);
});

// update a cat in the database
router.put('/cat/:id',function(req,res,next){
    Cat.findOneAndUpdate({_id: req.params.id},req.body).then(function(cat){
        Cat.findOne({_id: req.params.id}).then(function(cat){
            console.log("hello", cat);
            res.send(cat);
        });
    });
});

// delete a cat in the database
router.delete('/cat/:id',function(req,res,next){
    Cat.findOneAndDelete({_id: req.params.id}).then(function(cat){
        res.send(cat);
    });
});

// get a list of cat from the database
router.get('/cat/:id',function(req,res,next){
    Cat.find({_id: req.params.id}).then(function(cat){
        res.send(cat);
    }).catch(next);
});


module.exports = router;