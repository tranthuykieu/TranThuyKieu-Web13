const express = require('express');
const userRouter = express.Router();

const UserModel = require('../models/userModel');

// CRUD: Create - Read - Update - Delete

//get all: GET -> /api/users
userRouter.get("/", (req,res) => {
    UserModel.find({}, (err, users) => {
        if(err) res.status(500).send({ success: 0, err })
        else res.send({ success: 1, users });
    });
});

//create new: post
userRouter.post("/", (req,res) => {
    const { username, email, password, avatarUrl, name } = req.body;
    UserModel.create(
        { username, email, password, avatarUrl, name },
        (err, userCreated) => {
                if(err) res.status(500).send({ success: 0, err })
                else res.status(201).send({ success: 1, userCreated });
    });
});

//update
//userRouter.put
userRouter.put('/:userId', (req, res) => {
    UserModel.findById({ _id: req.params.userId }, (err, userFound) => {
        if (err) console.error(err)
        else if(!userFound) console.log('Not Found !')
        else {
            if(req.body.email) userFound.email = req.body.name;
            if(req.body.password) userFound.password = req.body.password;
            if(req.body.username) userFound.username = req.body.username;
            if(req.body.avatarUrl) userFound.avatarUrl = req.body.avatarUrl;
            if(req.body.name) userFound.name = req.body.name;
            userFound.save((err) => {
                if (err) res.status(500).send({ success: 0, err })
                else res.send({ success: 1, userID: userFound._id });
            })
        }
    })
});

//delete
//userRouter.delete
userRouter.delete('/:userId', (req, res) => {
    UserModel.findOneAndRemove({ _id: req.params.userId }, (err) => {
        if (err) res.status(500).send({ success: 0, err })
        else {
            res.send({ success: 1 });
            res.redirect("/");
        }
    });
})

//Get one by Id
//userRouter.get
userRouter.get('/userId', (req,res) => {
    UserModel.findById({ _id: req.params.userId}, (err) => {
        if (err) res.status(500).send({ success: 0, err })
        else res.send({ success: 1, userFound });
    });
});

module.exports = userRouter;