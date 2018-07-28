const express = require('express');
const router = express.Router();
const QuestionModel = require("../models/questionModel")


// router.all("/", (req, res) => {
//     console.log("question router");
// });


//  http://localhost:2423/question?questionId=0
router.get("/", (req, res) => {
    let question = questionList[req.query.questionId];
    res.render("question", {
        question,
        totalVote: question.yes + question.no
    });
})

module.exports = router;

router.post("/add", (req, res) => {
    let newQuestion = {
        content: req.body.questionContent
    };
    QuestionModel.create(newQuestion, function(err, questionCreated){
        if(err) console.log(err)
        else res.redirect('/question' + questionCreated._id);
    });
});

router.get("/:questionId", (req, res) => {
    let question = questionList[req.params.questionId];
    res.render("question", {
        question,
        totalVote: question.yes + question.no
    });
});


