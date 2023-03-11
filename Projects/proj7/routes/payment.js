import express from 'express'
import { getOrder, paymentOrder } from '../controllers/payment.js'

const router = express.Router();

router.get('/',getOrder)
router.post('/order',paymentOrder)


export default router