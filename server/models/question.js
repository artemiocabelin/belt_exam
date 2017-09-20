let mongoose = require('mongoose');
const Schema = mongoose.Schema;
var QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Question is required'],
        minlength: [10, 'Question must be at least 10 characters'],
    },
    description: {
        type: String,
    },
    creator: {
        type: String,
    },
    answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true});

var Question = mongoose.model('Question', QuestionSchema);