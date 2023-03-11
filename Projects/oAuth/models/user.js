import mongoose from 'mongoose'

const {Schema, model} = mongoose

const userSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    googleId : {
        type : String,
        required : true
    }
})

const User = model('User',userSchema)


export default User