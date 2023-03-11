import mongoose from 'mongoose'

const connectDB = (url)=>{
    try {
        mongoose.set('strictQuery', true)
        mongoose.connect(url,{
            useNewUrlParser : true,
            useUnifiedTopology : true
        }).then(()=>console.log("Connected to Database")).catch((err)=>console.log(err))
    } catch (error) {
        console.log(error)
    }
}

export default connectDB