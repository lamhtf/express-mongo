const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const StudentSchema = new Schema({
    name: {
        type: String,
    },
    roll: {
        type: String,
        required: [true, 'Roll field is required']
    },
    present: {
        type: Boolean,
        deafult: true
    },
    sex: {
        type: String,
        required: [true, 'Sex field is required']
    },
    cat: [{
        type: Schema.Types.ObjectId,
        ref: "cat"
    }]
});

const Student = mongoose.model('student',StudentSchema);
module.exports = Student;