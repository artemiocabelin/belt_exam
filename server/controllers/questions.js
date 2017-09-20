// alter title of file as needed. Don't forget to change dependent files as well
let mongoose = require('mongoose');
let Question = mongoose.model('Question'); // change as needed
let Answer = mongoose.model('Answer'); // change as needed

module.exports = {
    getAllQuestions : (request, response) => {
        Question.find({})
            .populate('answers')
            .exec((error, questions) => {
                if (error) {
                    console.log(error);
                } else {
                    response.json(questions);
                }
            });
    },
    saveUserToSession : (request, response) => {
        console.log('server creating name in session');
        request.session.name = request.body.name;
        response.json(request.session.name);
    },
    getCurrentUser : (request, response) => {
        console.log('server getting name in session');
        response.json(request.session.name);
    },
    checkIfUserInSession: (req, res) => {
        console.log('check if user in session');
        if(req.session.name) {
            res.json(req.session.name);
        } else {
            res.json(false);
        }
    },
    logoutUser: (req, res) => {
        console.log('deleting session');
        delete req.session.bidder;
        res.json(true);
    },
    addNewQuestion: (req, res) => {
        console.log('server saving question');
        let newQuestion = new Question(req.body);
        newQuestion.creator = req.session.name;
        newQuestion.save((errorList, savedQuestion) => {
            if (errorList) {
                let errors = {};
                errors.message = errorList.errors.question.message;
                res.json(errors);
            }
            else {
                console.log('created a new question')
                res.json(savedQuestion);
            }
        });
    },
    retrieveQuestionById: (req, res) => {
        console.log('server getting question by id');
        Question.findOne({_id: req.params.id}).populate('answers').exec((error, foundQuestion) => {
            if (error) {
                console.log('error getting a quesiton')
                console.log(error);
            } else {
                console.log('success getting a question');
                console.log(foundQuestion);
                res.json(foundQuestion);
            }
        })
    },
    addAnswerToQuestionById: (req, res) => {
        console.log('server creating answer to question');
        console.log(req.body);
        Question.findOne({_id: req.body._question})
            .exec((error, foundQuestion) => {
                if (error) {
                    console.log('error finding question');
                } else {
                    console.log('found question');
                    console.log(foundQuestion);
                    console.log('adding answer to question')
                    var newAnswer = new Answer({answer: req.body.answer, details: req.body.details, likes: 0});
                    newAnswer.creator = req.session.name;
                    newAnswer._question = foundQuestion._id;
                    console.log(newAnswer);
                    newAnswer.save((error, savedAnswer) => {
                        console.log(newAnswer);
                        foundQuestion.answers.push(savedAnswer);
                        foundQuestion.save((err) => {
                            if (err) {
                                console.log('there was an error');
                                console.log(error);
                            } else {
                                console.log('server success saving answer to question');
                                console.log(foundQuestion);
                                res.json(savedAnswer);
                            }
                        });
                    })
                }
            });
    },
    incrementLikeByAnswerId: (req, res) => {
        console.log('server creating answer to question');
        console.log(req.body);
        Answer.findOne({_id: req.body.aid}).exec((error, foundAnswer) => {
            console.log(foundAnswer);
            let newLikeValue = foundAnswer.likes + 1;
            Answer.update({_id: req.body.aid}, {likes: newLikeValue}, (error, savedAnswer) => {
                res.json(savedAnswer);
            })
        })
    },
}