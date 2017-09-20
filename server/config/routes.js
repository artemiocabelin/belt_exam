let mongoose = require('mongoose');
let path = require('path');
let questions = require('../controllers/questions.js') // alter

module.exports = function(app) {
    // route handlers goes here
    // sample
    app.get('/api/questions', questions.getAllQuestions);
    app.post('/api/questions/user', questions.saveUserToSession);
    app.get('/api/questions/user/get', questions.getCurrentUser);
    app.get('/api/questions/checksession', questions.checkIfUserInSession);
    app.get('/api/questions/logout', questions.logoutUser);
    app.post('/api/questions/add', questions.addNewQuestion);
    app.post('/api/questions/answer', questions.addAnswerToQuestionById);
    app.post('/api/questions/like', questions.incrementLikeByAnswerId);
    app.get('/api/questions/:id', questions.retrieveQuestionById);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
    // ------------------------
}
