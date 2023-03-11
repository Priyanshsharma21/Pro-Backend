import { courses } from '../const/const.js'
import axios from 'axios'
import express from 'express'
import fileUpload from 'express-fileupload'
import { v4 as uuidv4 } from 'uuid';
const app = express()


app.use(fileUpload())

export const responseRoute = (req,res)=>{
    res.send("Yoo Bro")
}

export const courseInfo = (req,res)=>{
    res.status(200).json({data : courses })
    return courses
}


export const courseObj = async(req,res)=>{
    res.send({
        id : 55,
        name : "Backend Course",
        price : 899,
    })
}

export const returnCourse = async(req,res)=>{
    const myCourse = courses.find((course)=> {
        return course.id === (req.params.courseId)
    })
    console.log(myCourse)
    res.status(200).json({course : myCourse})
}


export const addCourse = async(req,res)=>{
    const newCourse = req.body
    console.log(newCourse)
    const allCourses = await axios.get('http://localhost:8080/api/v1/test/courses')
    const checkIfPresent = allCourses.data.data.filter(course=>{
        return course.id === newCourse.id
    })
    if(checkIfPresent.length > 0) return

    courses.push(newCourse)
    res.status(200).json({
        message : "Course Added",
        courses : courses
    })
}

export const searchCourse = async (req, res) => {
    const { q } = req.query
    const {data} = await axios.get('http://localhost:8080/api/v1/test/courses')
    const checkIfPresent = data.data.filter(course=>{
        return course.name.toLowerCase().includes(q.toLowerCase())
    })
    console.log(checkIfPresent)

    res.status(200).json({course : checkIfPresent})
}   


export const uploadImage = async(req, res) => {
    console.log(req.files)
    const file = req.files.file

    let path = __dirname + "/images/" + uuidv4() + ".jpg"


    file.mv(path,(err)=>{
        res.send(true)
    })
}