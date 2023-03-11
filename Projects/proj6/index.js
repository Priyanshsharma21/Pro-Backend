import app from './app.js'
import * as dotenv from 'dotenv'
import connectDB from './config/db.js'
dotenv.config()
const {PORT,MONGODB_URL} = process.env


const startServer = async()=>{
    try {
        connectDB(MONGODB_URL)
        app.listen(PORT,()=>{
            console.log(`Running up the hill at ${PORT}km/hr`)
        })
    } catch (error) {
        console.log(error)
    }
}
startServer()
