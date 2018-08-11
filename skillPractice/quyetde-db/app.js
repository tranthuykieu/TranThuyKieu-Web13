const express = require('express');
const hbs = require('express-handlebars');
const fs = require('fs');
const questionModel = require('./models/questionModel');
const mongoose = require('mongoose');
//ket noi MongoDB vao project 
//ho tro Model
//cu phap de hieu + de su dung hon Native
const bodyParser = require('body-parser');
//body-parser: 1 middleware (chặn request lại và xử lí những request đấy rồi mới gửi tiếp đi)
//body-parser: bắt những data gửi lên server và nhét vào req.body 

const questionRouter = require('./router/questionRouter');


let app = express(); // tao app tuong trung cho server cua minh


//setup handlebars + dat layout (layout la file main.handlebars)
app.engine('handlebars', hbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
    // .urlcoded : dành cho dữ liệu post lên có dạng form data (như form bth, form html post lên: dạng data)
    // extended: dữ liệu post lên dạng kiểu nào

app.use('/question', questionRouter);

// là 1 router: chạy khi người dùng truy cập vào đường link ở bên trong 
// chứ ko phải chạy lần lượt từng cái
app.get('/', (req, res) => {
    questionModel.count({}, (err, questionListLength) => {
        let randomIndex = Math.floor(Math.random()*questions.length);

        questionModel.findOne({}).skip(randomIndex).exec((err, questionRandom) => {
            if(err) console.log(err)
            else {
                res.render('home', {
                    question
                });
            }
        });
    });
    //questionModel.find(): bat dong bo => ko the gán
    // questionModel.find({}, (err, questions) => {
    //     if(err) console.log(err)
    //     else{
    //         let question = questions[];
            // res.render('home', {
            //     question
            // });
    //     }
    // });
});

app.get('/ask', (req, res) => { 
    res.render('ask');
});

app.get('/answer/:questionId/:vote', (req, res) => {
    // questionModel.findByIdAndUpdate(req.params.questionId, { $inc: { [req.params.vote]: 1} }, (err) => {
    //     if(err) console.log(err)
    //     else res.redirect('/question/' + req.params.questionId);
    // });

    questionModel.findOne({_id: req.params.questionId}, (err, questionFound) => {
        if(err) console.log(err)
        else if (!questionFound) console.log('Not Found');
        else {
            questionFound[req.params.vote] += 1;
            questionFound.save((err) => {
                if(err) console.log(err)
                else res.redirect('/question/' + questionFound._id);
            })
        }
    });
    
    // questionList[req.params.questionId][req.params.vote] += 1;
    // fs.writeFileSync('./questions .json', JSON.stringify(questionList));
    // res.redirect('/question/' + req.params.questionId);
});

// mongodb://localhost:27017 defaul + ket noi vao database
// quyetde: ten cua database dung cho app.js
// quyetde se dc tao ra khi user co thao tac tao du lieu o tren database vua tao
mongoose.connect('mongodb://localhost:27017/quyetde', { useNewUrlParser: true }, (err) => {
    if(err) console.log(err)
    else console.log('DB connect success !');
});

//cho app listen
app.listen(2423, (err) => {
    if(err) console.error(err)
    else console.log('Server start !');
});

