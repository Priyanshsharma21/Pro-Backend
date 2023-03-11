import express from 'express'
import * as dotenv from 'dotenv'
import connectDB from './models/connectDB.js'
dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send("Hello OAuth")
})

const startServer = async()=>{
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8000,()=>{
            console.log('Server running at port 8000')
        })
    } catch (error) {
        
    }
}
startServer()