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

//update: co 3 cach
//userRouter.put
userRouter.put('/:userId', async (req, res) => {
    const { email, password, avatarUrl, name } = req.body;
    const updateInfo = { email, password, avatarUrl, name }
    // UserModel.findById(
    //     req.params.userId,
    //     (err, userFound) => {
    //         if(err) res.status(500).send({ success: 0, err })
    //         if(!userFound) res.status(404).send({ success: 0, message: "user not exist"});
    //         else {
    //             for(let key in updateInfo){
    //                 if(updateInfo[key]) {
    //                     userFound[key] = updateInfo[key];
    //                 }
    //             }
    //             userFound.save((err, userUpdated) => {
    //                 if(err) res.status(500).send({ success: 0, err})
    //                 else res.send({ success: 1, userUpdated});
    //             });
    //         }
    //     }
    // );
    // dung async await
    try {
        let userFound = await UserModel.findById(req.params.userId);
        if(!userFound) res.status(404).send({ success: 0, message: "user not exist"});
        else {
            for(let key in updateInfo){
                if(updateInfo[key]) {
                    userFound[key] = updateInfo[key];
                }
            }
            const userUpdated = await userFound.save();
            res.send({ success: 1, userUpdated });
        }
    } catch (error) {
        res.status(500).send({ success: 0, error });
    }
});

//delete
//userRouter.delete
userRouter.delete('/:userId', (req, res) => {
    UserModel.remove(req.params.userId, (err, userDeleted) => {
        console.log(userDeleted);
        if(err) res.status(500).send({ success: 0, err })
        else if (!userDeleted) res.status(404).send({ success: 0, message: "user not exist"});
        else res.send({ success: 1, message: 'Success'});
    });
});

//Get one by Id
//userRouter.get
userRouter.get('/userId', (req,res) => {
    UserModel.findById(req.params.userId, (err, userFound) => {
        if(err) res.status(500).send({ success: 0, err })
        else if (!userFound) res.status(404).send({ success: 0, message: "user not exist"});
        else res.send({ success: 1, userFound});
    });
});

module.exports = userRouter;