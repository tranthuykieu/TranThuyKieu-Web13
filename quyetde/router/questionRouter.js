const express = require("express");
const router = express.Router();

const QuestionModel = require("../models/questionModel");

router.all("/", (req, res) => {
    console.log("question router");
});

router.get("/:questionId", (req, res) => {
    QuestionModel.findById(req.params.questionId, function(err, questionFound){
        if (err) console.error(err)
        else if (!questionFound) console.log("not found")
        else {
            res.render("question", {
                questionFound,
                totalVote: questionFound.yes + questionFound.no
            });
        }
    })
});

// router.post("/add", (req, res) => {
//     let newQuestion = {
//         content: req.body.questionContent
//     };
//     QuestionModel.create(newQuestion, function(err, questionCreated) {
//         if(err) res.status(500).send({success: 0, errMsg: err })
//         else res.status(201).send({ success: 1, questionId: questionCreated._id});
//     });
// });

module.exports = router;






