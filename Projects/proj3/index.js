import express from 'express'
import * as dotenv from 'dotenv'
import pkg from 'whatsapp-web.js'
import qrcode from 'qrcode-terminal'
import cors from 'cors';
import {
    Configuration,
    OpenAIApi
} from 'openai'


dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const { Client, LocalAuth } = pkg
const PORT = process.env.PORT || 8000

const app = express();
app.use(cors());
app.use(express.json());


const client = new Client({
    authStrategy: new LocalAuth({ clientId: "client-one" })
});


app.get('/',(req,res)=>{
    res.send("Hello from whatsapp GPT")
})

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', async() => {
    console.log('Client is ready!');

    const chat = await client.getChats();
    const myGroup = chat.find((chat)=>chat.name==='WhatsApp GPT')
    client.sendMessage(myGroup.id._serialized, "Hello it is an automated message")
});


client.initialize();

client.on('message', message => {
    const prompt = message.body

    const sendResponse = async()=>{
        try {
            const response = await openai.createCompletion({
                model : "text-davinci-003",
                prompt : `${prompt}`,
                temperature : 0,
                max_tokens : 3000,
                top_p : 1,
                frequency_penalty : 0.5,
                presence_penalty : 0,
            });
    
            message.reply(response.data.choices[0].text)


        } catch (error) {
            console.log(error)
            message.reply("Can't find the answer")
        }
    }

    sendResponse();
});


const startServer = ()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`Running up the hill at ${PORT}km/hr`)
        })
    } catch (error) {
        console.log(error)
    }
}
startServer()

