let mongoose = require('mongoose');
const Schema = mongoose.Schema;
var AnswerSchema = new mongoose.Schema({
    answer: {
        type: String,
        required: [true, 'Answer is required'],
        minlength: [5, 'Answer must be at least 5 characters'],
    },
    details: {
        type: String,
    },
    creator: {
        type: String,
    },
    likes: {
        type: Number,
    },
    _question: {type: Schema.Types.ObjectId, ref: 'Question'}
})

var Answer = mongoose.model('Answer', AnswerSchema);