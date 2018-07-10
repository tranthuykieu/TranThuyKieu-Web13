const express = require("express");
const path = require("path");
const fs = require("fs");
const hbs = require("express-handlebars");

let app = express();

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.get('/', function(req, res){
    res.render("ask", {
        asf: 'background-color: aqua'
    });
});

app.get('/ask', function(req, res){
    res.render("ask", {
        
    });
});

app.get('/answer', function(req, res){
    res.render("answer", {

    });
});

fs.readFile("question.json", "utf8", function(err, data){
    if(err) console.log(err)
    else {
        app.get('/', function(req, res){
            res.render("answer")
        })
    }
});

app.use(express.static("public"));

app.listen(2423, function(err) {
    if (err) console.error(err)
    else console.log("Server is listening at port: 2423");
});

app.use(express.static("./CSS Style"));

//middleware
// app.use(function(req, res, next){
//     console.log("Thu phi em ei");
//     next();
// })

// app.get('/picture', function(req, res){
//     console.log(__dirname);
//     res.sendfile(__dirname + '/IMG_4945.JPG');
// });


// app.get('/html', function(req, res){
//     res.sendFile(__dirname + '/Kieu-Homework2/Kieu-menu.html');
// });

// app.get('/style.css', function(req, res){
//     res.sendFile(path.resolve(__dirname, "./Kieu-Homework2/Kieu-menu.css"));
// })
