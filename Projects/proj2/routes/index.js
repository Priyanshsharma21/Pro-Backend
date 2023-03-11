import express from 'express'
import { responseRoute,courseInfo,courseObj,returnCourse,addCourse,searchCourse,uploadImage } from '../controllers/index.js'

const router = express.Router();


router.get('/', responseRoute)
router.get('/courses', courseInfo)
router.get('/courseObj', courseObj)
router.get('/course/:courseId', returnCourse)
router.get('/course?:q', searchCourse)

router.post('/course/uploadFile', uploadImage)

router.post('/addCourse', addCourse)


export default router


