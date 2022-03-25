
import { unlinkSync } from "fs";
import { v2 as cloudinary } from "cloudinary";

const uploadProfilePic = async(req,res) => {
    try {
        const src = await cloudinary.uploader.upload(
            req.files.image.tempFilePath,
            {
                use_filename: true,
                folder: "Profile Pics"
            }
        )
        unlinkSync(req.files.image.tempFilePath)
        res.status(200).json({src: src.secure_url})
        
    } catch (error) {
        console.log(error);
        return res.status(500).send("Cloudinary Upload Error")
    }
}

export default {uploadProfilePic}