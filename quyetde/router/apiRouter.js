const express = require('express');
const router = express.Router();

const QuestionModel = require('../models/questionModel');

router.use(function(req, res, next){
    console.log("API router");
    next();
});

router.post('/addquestion', function(req, res) {
    let newQuestion = {
        content: req.body.questionContent
    };
    QuestionModel.create(newQuestion, function(err, questionCreated) {
        if(err) res.status(500).send({success: 0, errMsg: err })
        else res.status(201).send({ success: 1, questionId: questionCreated._id});
    });
});

module.exports = router;


