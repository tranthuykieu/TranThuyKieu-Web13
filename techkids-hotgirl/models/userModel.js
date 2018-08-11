const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:      { type: String, required: true, unique: true },
    password :  { type: String, required: true }, // can ma hoa
    username:   { type: String, required: true, unique: true },
    avatarUrl:  { type: String },
    name:       { type: String }
},{
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema);