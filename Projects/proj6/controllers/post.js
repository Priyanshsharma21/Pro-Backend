import Post from '../models/post.js'
import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'
dotenv.config()



const { CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET  } = process.env

cloudinary.config({
    cloud_name : CLOUDINARY_CLOUD_NAME,
    api_key : CLOUDINARY_API_KEY,
    api_secret : CLOUDINARY_API_SECRET,
})



export const getAllPosts = async(req,res)=>{
    try {
        const posts = await Post.find()

        return res.status(200).json({posts : posts})
    } catch (error) {
        return res.status(404).json({Message : 'No Posts Found'})
    }
}

export const createPosts = async(req,res)=>{
    try {
        const { description, postImg } = req.body;
        const photoUrl = await cloudinary.uploader.upload(postImg);

        console.log({ description, postImg })


        const newPost = await Post.create({
          description,
          postImg: photoUrl.secure_url, // use the secure URL returned by Cloudinary
          createdAt: new Date(), // set createdAt to the current date and time
        });
    
        return res.status(200).json({ success: true, post: newPost });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Post not created, something went wrong" });
      }
}