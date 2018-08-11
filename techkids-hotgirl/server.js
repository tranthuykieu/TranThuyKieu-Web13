const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const apiRouter = require('./routers/apiRouter.js');


let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Techkids hotgirl server");
});

app.use("/api", apiRouter);

mongoose.connect("mongodb://localhost/techkids-hotgirl", (err) => {
    if(err) console.error(err)
    else console.log("DB connect success !!")
})

const port = 2423;
app.listen(port, (err) => {
    if(err) console.error(err)
    else console.log(`server is listening at ${port}`);
});