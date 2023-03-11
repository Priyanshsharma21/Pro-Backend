import mongoose from 'mongoose';

const { Schema, model } = mongoose;


const userSchema = Schema({
    fName : {
        type: String,
        default:null,
        required: true,
    },

    lName : {
        type: String,
        default:null,
        required: true,
    },

    email : {
        type : String,
        required: true,
        unique: [true, 'This field is Required'],
    },
    password : {
        type: String,
        required: true,
    },
    token:{
        type: String,
    }

})

const User = new model('User', userSchema);


export default User;