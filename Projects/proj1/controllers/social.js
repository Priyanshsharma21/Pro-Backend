import moment from 'moment'








export const greetRoute = (req,res)=>{
    res.send("Welcome to Social Link")
}


export const linkedin = async(req,res)=>{
    const lin = {
        userName : 'Priyansh Sharma',
        followers : 2300,
        follow : 4,
        date : moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    };

    res.status(200).json({data : lin})
}

export const twitter = async(req,res)=>{
    const tweet = {
        userName : 'Priyansh@21',
        followers : 4,
        follow : 4,
        date : moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    };

    res.status(200).json({data : tweet})
    
}

export const insta = async(req,res)=>{
    const insta = {
        userName : 'Zen Priyansh',
        followers : 145,
        follow : 4,
        date :  moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    };

    res.status(200).json({data : insta})
}


export const dynamo = async(req,res)=>{
    // console.log(req)
    const {userId} = req.params

    res.status(200).json({data : userId})
}


export const storeUsers = async(req,res)=>{
    try {
        res.status(200).json({data: req.body })
    } catch (error) {
        res.status(500).json({error : error})
    }

}