const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");

let app = express();

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.get('/', function(req, res){
    res.render("home", {
        number: Math.floor(Math.random()*99),
        htmlString: '<p style="color: red;"> Hello</p>'
    });
});


app.get('/picture', function(req, res){
    console.log(__dirname);
    res.sendfile(__dirname + '/IMG_4945.JPG');
});


app.get('/html', function(req, res){
    res.sendFile(__dirname + '/Kieu-Homework2/Kieu-menu.html');
});

app.get('/style.css', function(req, res){
    res.sendFile(path.resolve(__dirname, "./Kieu-Homework2/Kieu-menu.css"));
})

app.use(express.static("public"));

//middleware
// app.use(function(req, res, next){
//     console.log("Thu phi em ei");
//     next();
// })


app.listen(2423, function(err) {
    if (err) console.error(err)
    else console.log("Server is listening at port: 2423");
});