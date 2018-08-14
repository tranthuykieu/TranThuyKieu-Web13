const express = require('express');
const imageRouter = express.Router();

const ImageModel = require('../models/imageModel');

// CRUD: Create - Read - Update - Delete

//get all: GET -> /api/images
imageRouter.get("/", (req, res) => {
    ImageModel.find({})
    .populate('owner') //muon lay thong tin cua owner => cho populate vao
    .exec((err, image) => {
        if(err) res.status(500).send({ success: 0, err })
        else res.status(201).send({ success: 1, image });
    });
});

//create new: post
imageRouter.post("/", (req,res) => {
    const { imageUrl, description, owner } = req.body;
    ImageModel.create(
        { imageUrl, description, owner },
        (err, imageCreated) => {
                if(err) res.status(500).send({ success: 0, err })
                else res.status(201).send({ success: 1, imageCreated });
    });
});

//update: co 3 cach
//imageRouter.put
imageRouter.put('/:imageId', async (req, res) => {
    const { description, owner, view, like, comments} = req.body;
    const updateInfo = { description, owner, view, like, comments }
    try {
        let imageFound = await UserModel.findById(req.params.imageId);
        if(err) res.status(500).send({ success: 0, err })
        else if(!imageFound) res.status(404).send({ success: 0, message: "image not exist"});
        else {
            for(let key in updateInfo){
                if(updateInfo[key]) {
                    imageFound[key] = updateInfo[key];
                }
            }
            const imageUpdated = await imageFound.save(); 
            res.send({ success: 1, imageUpdated });
        }
    } catch (error) {
        res.status(500).send({ success: 0, error });
    }
});

//delete
//image Router.delete
imageRouter.delete('/:imageId', (req, res) => {
    ImageModel.remove(req.params.imageId, (err, imageDeleted) => {
        console.log(imageDeleted);
        if(err) res.status(500).send({ success: 0, err })
        else if (!imageDeleted) res.status(404).send({ success: 0, message: "image not exist"});
        else res.send({ success: 1, message: 'Success'});
    });
});

//Get one by Id
//userRouter.get
imageRouter.get('/:imageId', (req,res) => {
    ImageModel.findById(req.params.imageId)
    .populate('owner')
    .populate('comments.user', 'username avatarUrl name') //chon truong muon hien ra hoac muon bo di, 
    //1 la toan -, nhung cai muon an di, 
    //2 la ko co -, nhung cai muon hien len
    .exec((err, imageFound) => {
            if(err) res.status(500).send({ success: 0, err })
            else if (!imageFound) res.status(404).send({ success: 0, message: "image not exist"});
            else res.send({ success: 1, imageFound});
    });
});

module.exports = imageRouter;