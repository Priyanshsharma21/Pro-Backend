import fastify from "fastify";
import * as dotenv from 'dotenv'
import connectDB from './models/connectDB.js'
import routes from './routes/book.js'

dotenv.config()
const {MONGODB_URL, PORT} = process.env


const app = fastify({logger : true})
// app.register(bookRoutes, { prefix: '/api/v1/books' })

app.get('/', async(request, reply)=>{
    return {hello : "Hello from fastify"}
})

//all the routes

routes.map((route,index)=>{
    app.route(route)
})


const startServer = async()=>{
    try {
        connectDB(MONGODB_URL)
        app.listen(PORT)
        app.log.info(`server listening on ${PORT}`)
    } catch (error) {
        console.log(error)
    }
}
startServer()