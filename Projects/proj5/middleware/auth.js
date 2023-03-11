import jwt from 'jsonwebtoken'



export const isAuthenticated = async(req,res,next)=>{
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    const { SECRET_KEY } = process.env


    !token && res.status(403).json({message : "Token Missing"})

    try {
        const decode = jwt.verify(token, SECRET_KEY)
        console.log(decode)
    } catch (error) {
        console.log(error)
        return res.status(401).json({error : error})
    }

    return next()
}

