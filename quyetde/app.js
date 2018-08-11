const express = require('express');
const hbs = require('express-handlebars');
const fs = require('fs');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const questionRouter = require('./router/questionRouter');
const apiRouter = require('./router/apiRouter');
const questionList = require('./questions.json');
const questionModel = require('./models/questionModel');

let app = express();

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/question", questionRouter);
app.use("/api", apiRouter);

app.get("/", (req, res) => {

    questionModel.count({}, function(err, questionListLength) {
        let randomIndex = Math.floor(Math.random()*questionListLength);

        questionModel.findOne({}).skip(randomIndex).exec(function(err, questionRandom){
            if(err) console.error(err)
            else {
                res.render("home", {
                    question: questionRandom
                });
            }
        })
    });

});

app.get("/ask", (req, res) => {
    res.render("ask");
}); 

app.get("/answer/:questionId/:vote", (req, res) => {
    questionModel.findOne({ _id: req.params.questionId}, function(err, questionFound){
        if(err) console.log(err)
        else if(!questionFound){
            console.log("not found")
        }
        else {r
            questionFound[req.params.vote] += 1;

            questionFound.save(function(err){
                if(err) console.error(err)
                else res.redirect("/question/" + questionFound._id);
            });
        }
    });
});

mongoose.connect("mongodb://localhost:27017/quyetdeweb", {useNewUrlParser: true}, function(err) {
    if(err) console.log(err)
    else console.log("Connect success");
});

app.listen(2423, (err) => {
    if(err) console.log(err)
    else console.log("Server start !");
});

