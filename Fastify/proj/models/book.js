import mongoose from 'mongoose'

const { Schema, model } = mongoose


const bookSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    price: {
        type : Number,
        required : true,
    },
    photo : {
        type : String,
        required : true,
    },

    publishAt : {
        type : Date,
        default : Date.now
    }
})

const Book = model('Book', bookSchema)

export default Book