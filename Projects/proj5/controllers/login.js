import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'



export const getUserLogin = async(req,res)=>{
    res.send("Login route")
}

export const userLogin = async(req,res)=>{
    try {
        const {email, password} = req.body;

        if (!(email && password)) {
            res.status(400).json({message: 'Please Fill all the fields'})
            console.log("Please fill all the field")
        }

        const user = await User.findOne({email})

        if(user && (await bcrypt.compare(password, user.password))){
            const token = jwt.sign(
                {user_id : user._id, email},
                process.env.SECRET_KEY,
                {expiresIn : "4h"}
            )

            user.token = token
            user.password = undefined
            // res.status(200).json({user : user})

            // if we want to send cookie then
            const options = {
                expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly : true,
            }

            res.status(200).cookie('token',token,options).json({
                user,
                token,
                success : true
            })
        }

        return res.status(400).json({message : "Email or password is incorrect"})

    } catch (error) {
        return res.status(500).json({message : "User Not Found"})
    }
}