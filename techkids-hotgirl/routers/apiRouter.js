const express = require('express');
const apiRouter = express.Router();

const userRouter = require('./userRouter.js');

apiRouter.use("/", (req, res, next) => {
    console.log("MiddleWare");
    next();
});

apiRouter.get("/", (req, res) => {
    res.send("Techkids hotgirl api");
});

apiRouter.use("/users", userRouter);

module.exports = apiRouter;