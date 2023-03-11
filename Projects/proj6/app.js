import express from 'express'
import postRoute from './routes/post.js'
import cors from 'cors'
import fileUpload from 'express-fileupload';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors())
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : "/tmp/"
}))
app.use('/api/v1', postRoute)


app.get('/',(req,res)=>{
    res.send('User Post DB - Image Cloudinary Project')
})

export default app