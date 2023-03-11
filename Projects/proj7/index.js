import express from 'express'
import razorpay from 'razorpay'
import razorPayOrders from './routes/payment.js'


const app = express();

app.use(express.json())
app.use('/pay',razorPayOrders)

app.get('/',(req,res)=>{
    res.send("Hello From RazorPay")
})

app.post('/order',(req,res)=>{

})

app.listen(8000,()=>{
    console.log('Running up the hill at 8000km/hr')
})