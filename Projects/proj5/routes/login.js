import express from 'express'
import {getUserLogin, userLogin} from '../controllers/login.js'
import { isAuthenticated } from '../middleware/auth.js'


const router = express.Router();


router.get('/login',isAuthenticated, getUserLogin)

router.post('/login', userLogin)



export default router

