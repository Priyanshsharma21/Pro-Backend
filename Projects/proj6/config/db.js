import mongoose from 'mongoose'

const connectDB = async(url)=>{
    try {
        mongoose.set('strictQuery', true)
        mongoose.connect(url)
        .then(()=>console.log('Connected to Database'))
        .catch((err)=>console.log(err))
    } catch (error) {
        console.log(error)
    }
}


export default connectDB

