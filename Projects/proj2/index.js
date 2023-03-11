import express from 'express'
import textRoute  from './routes/index.js'
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
const swaggerDocument = YAML.load('./swagger.yaml');
// import fileUpload from 'express-fileupload';



const app = express();
const PORT = process.env.PORT || 8080


app.use(bodyParser.json());
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use(fileUpload());

app.get('/', (req,res)=>{
    res.send("hello")
})

app.use('/api/v1/test',textRoute)


const startServer = ()=>{
    try {
        app.listen(PORT,()=>{console.log(`Running up the hill at ${PORT} km/hr`)})
    } catch (error) {
        console.log(error)
    }
}
startServer()