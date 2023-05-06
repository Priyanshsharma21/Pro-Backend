import app from './app.js'
import * as dotenv from 'dotenv'
import connectDB from './config/database.js'

dotenv.config()
const { PORT } = process.env

const startServer = async()=>{
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(PORT,()=>{
            console.log(`Running Up The Hill ay ${PORT}km/hr`)
        })
    } catch (error) {
        console.log(error)
    }
}
startServer()