import express from 'express'
import * as dotenv from 'dotenv'
import pkg from 'whatsapp-web.js'
import qrcode from 'qrcode-terminal'
import cors from 'cors';
import axios from 'axios'

dotenv.config()

const { Client, LocalAuth,MessageMedia } = pkg
const PORT = process.env.PORT || 8000

const app = express();
app.use(cors());


const client = new Client({authStrategy: new LocalAuth({ clientId: "client-one" })});


app.get('/',(req,res)=>{
    res.send("Hello from whatsapp AI Image Generation")
})

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', async() => {
    console.log('Client is ready!');
});

client.initialize();

client.on('message', message => {
    const prompt = message.body

    const sendResponse = async() => {
        try {
            const response = await axios.get(`https://lexica.art/api/v1/search?q=${prompt}`)
            const imageUrl = response?.data?.images.slice(0,15);
            const imageArray = [];
            imageUrl.map((imageObj)=>{
                imageArray.push(imageObj?.src)
                return imageArray
            })

            imageArray.map(async image => {
                const media = await MessageMedia.fromUrl(image, { unsafeMime: true });
                client.sendMessage(message.from, media);
            });
    
        } catch (error) {
            console.log(error)
            client.sendMessage('No Images Found For This Prompt, Try Again With Other Prompt')
        }
    };
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

