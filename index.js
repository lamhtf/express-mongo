const express = require('express');
const mongoose = require('mongoose');

// set up our express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://node-db/ourdata');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(express.json());
// initialize routes
app.use('/api',require('./routes/api'));
app.use('/cat',require('./routes/catApi'));

// error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){    
    console.log('Ready to Go! port:', process.env.port || 4000);
});