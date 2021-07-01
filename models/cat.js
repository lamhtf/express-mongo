const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create cat schema & model
const CatSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    birthday: {
        type: Date,
    },
    sex: {
        type: String,
        required: [true, 'Sex field is required']
    },
    type: {
        type: String,
    },
    parent: {
        type: Boolean,
        deafult: true
    },    
});

const Cat = mongoose.model('cat',CatSchema);
module.exports = Cat;