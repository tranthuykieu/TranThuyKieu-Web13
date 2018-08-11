const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    imageUrl:       { type: String, required: true },
    owner:          { type: Schema.Types.ObjectId, ref: 'User' },
    view:           { type: Number, default: 0 },
    like:           { type: Number, default: 0 },
    description:    { type: String },
    comments:       [{
            user:       { type: Schema.Types.ObjectId, ref: 'User' },
            content:    { type: String, required: true},
            created_at: { type: Date, default: new Date() }
    }],
},{
    timestamps: true
});

mongoose.Schema.Types.Array

module.exports = mongoose.model("Image", ImageSchema);