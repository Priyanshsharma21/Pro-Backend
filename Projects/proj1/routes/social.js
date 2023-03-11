import express from 'express'
import { greetRoute,insta,twitter,linkedin,dynamo,storeUsers } from '../controllers/social.js'
const router = express.Router();

router.get('/', greetRoute)
router.get('/insta', insta)
router.get('/twitter', twitter)
router.get('/linkedin', linkedin)
router.get('/:userId', dynamo)

router.post('/sendUserInfo', storeUsers)



export default router