import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const showRegister = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({users : users})
    } catch (error) {
        res.status(500).json({message : 'No User Found'})
    }
}


export const registerUser = async (req, res) => {
   try {
    const {fName,lName,email,password} = req.body;

    if (!(email && password && fName && lName)) {
        res.status(400).json({
            message: 'Please Fill all the fields'
        })

        console.log("Please fill all the field")
    }

    const existingUser = await User.findOne({
        email: email,
    })

    existingUser && res.status(401).json({message: 'User Already exist'})

    const myEncryptPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        fName,
        lName,
        email: email.toLowerCase(),
        password: myEncryptPassword
    })


    //token --- 1. payload, 2. secret, expire time
    const token = jwt.sign(
            {user_id: user._id,email}, 
            process.env.SECRET_KEY, 
            {expiresIn: "4h"})

    user.token = token

    user.password = undefined
        
    res.status(200).json(user)
   } catch (error) {
    res.status(500).json(error)
   }
}