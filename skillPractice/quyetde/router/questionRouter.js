const express = require('express');
const router = express.Router(); // goi router
// router dc import thong qua express
const questionList = require('../questions.json');
const fs = require('fs');

// ~app.get

router.post('/add', (req, res) => {
    console.log(req.body);
    let newQuestion = { 
        content: req.body.questionContent,
        yes: 0,
        no: 0,
        id: questionList.length
    }  ;
    questionList.push(newQuestion);
    fs.writeFileSync('questions.json', JSON.stringify(questionList));
    res.redirect('/question/' + newQuestion.id);
});

router.get('/:questionId', (req, res) => {
    //lay questionId tu: req.params + .tenbien (questionId)
    let question = questionList[req.params.questionId];
    res.render('question', {   
        question,
        totalVote: question.yes + question.no
    });
});

// app.post('/question/add', (req, res) => {
//     console.log(req.body);
//     let newQuestion = { 
//         content: req.body.questionContent,
//         yes: 0,
//         no: 0,
//         id: questionList.length
//     }  ;
//     questionList.push(newQuestion);
//     fs.writeFileSync('questions.json', JSON.stringify(questionList));
//     res.redirect('/question/' + newQuestion.id);
// });

// // doi vs 1 cau hoi
// // app.get('/question/0', (req, res) => {
// //     let question = questionList[0];
// //     res.render('question', {
// //         question,
// //         totalVote: question.yes + question.no
// //     });
// // });

// //co 2 cach de lay du lieu tu duong dan:

// // 1. params: lay du lieu tu 1 phan tren duong dan
//     // them dau : vao truoc phan can lay + dat len bien cho no 
// app.get('/question/:questionId', (req, res) => {
//     //lay questionId tu: req.params + .tenbien (questionId)
//     let question = questionList[req.params.questionId];
//     res.render('question', { 
//         question,
//         totalVote: question.yes + question.no
//     });
// });

// // 2. query: dung cho cac dang tim kiem
// // http://localhost:2423/question?questionId=2&hello=true
// //lay du lieu o sau dau ?
// app.get('/question', (req, res) => {
    // //lay du lieu phia sau dau ? va = questionId 
    // //lay thong qua url
    // //lay bang cach: req.query + .ten bien (questionId)
    // let question = questionList[req.query.questionId];
    // res.render('question', {
    //     question,
    //     totalVote: question.yes + question.no
    // }) 
// });

module.exports = router;
// exports ra router de require lai trong nhung file muon su dung

