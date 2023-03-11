import mongoose from 'mongoose'

const { Schema, model } = mongoose

const postSchema = new Schema({
    description : {
        type : String,
        required : true
    },

    createdAt: { type: Date, default: Date.now },

    postImg : {
        type : String,
        required : true
    }
})

const Post = new model('Post', postSchema)

export default Post