const express = require('express');
const hbs = require('express-handlebars');
const fs = require('fs');
const mongoose = require('mongoose');
//ket noi MongoDB vao project 
//ho tro Model
//cu phap de hieu + de su dung hon Native
const bodyParser = require('body-parser');
//body-parser: 1 middleware (chặn request lại và xử lí những request đấy rồi mới gửi tiếp đi)
//body-parser: bắt những data gửi lên server và nhét vào req.body 

const questionRouter = require('./router/questionRouter');
const questionList = require('./questions.json');
// get data from JSON file
// JSON file: ko co goi y ==> tu go day du ten file vao


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
    let question = questionList[Math.floor(Math.random()*questionList.length)];
    res.render('home', {
        question
    });
});

app.get('/ask', (req, res) => { 
    res.render('ask');
});

app.get('/answer/:questionId/:vote', (req, res) => {
    questionList[req.params.questionId][req.params.vote] += 1;
    fs.writeFileSync('./questions .json', JSON.stringify(questionList));
    res.redirect('/question/' + req.params.questionId);
});



//cho app listen
app.listen(2423, (err) => {
    if(err) console.error(err)
    else console.log('Server start !');
});