import express from 'express'
import socialRoute  from './routes/social.js'
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
const swaggerDocument = YAML.load('./swagger.yaml');




const app = express();
const PORT = process.env.PORT || 8080


app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get('/', (req,res)=>{
    res.send("hello")
})

app.use('/api/v1/user',socialRoute)


const startServer = ()=>{
    try {
        app.listen(PORT,()=>{console.log(`Running up the hill at ${PORT} km/hr`)})
    } catch (error) {
        console.log(error)
    }
}
startServer()