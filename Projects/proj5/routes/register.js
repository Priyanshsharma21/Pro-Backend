import express from 'express';
import {showRegister, registerUser} from '../controllers/register.js'

const router = express.Router()

router.get('/register', showRegister)
router.post('/register', registerUser);



export default router