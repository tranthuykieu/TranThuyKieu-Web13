const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    content:    { type: String, required: true},
}, {
    timestamps: true,
    _id: false //tat tu tao id
})

const ImageSchema = new Schema({
    imageUrl:       { type: String, required: true },
    owner:          { type: Schema.Types.ObjectId, ref: 'User' },
    description:    { type: String },
    view:           { type: Number, default: 0 },
    like:           { type: Number, default: 0 },
    comments:       [CommentSchema],
},{
    timestamps: true
});

mongoose.Schema.Types.Array

module.exports = mongoose.model("Image", ImageSchema);