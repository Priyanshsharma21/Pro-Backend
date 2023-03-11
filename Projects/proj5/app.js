import express from 'express'
import register from './routes/register.js'
import login from './routes/login.js'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use('/auth',register)
app.use('/auth',login)

app.get('/',(req,res)=>{
    res.send("Hello from Auth")
})


export default app