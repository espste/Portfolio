import express from "express";
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

const Router = express.Router();


//cloudinary config 
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SEC
});

//upload image

Router.post('/api/upload', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'yuxlp3ad',
        });
        console.log(uploadResponse);
        res.json({ msg: 'Uploaded..'})
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong!'})
    }
})

// Router.post('/upload', (req, res)=>{
//     try {
//         console.log(req.files);

//         if(!req.files || Object.keys(req.files).length===0) {
//             return res.status(400).send({Message: 'Add file to upload..'});
//         }
       
//         const file = req.files.file;
//         if(file.size > 1024*1024) {
//             removeTmp(file.tempFilePath);
//             return res.status(400).json({Message:"File size is too large"});
//         };
  
//         if(file.mimetype !=='image/jpeg' && file.mimetype !== 'image/png'){
//             removeTmp(file.tempFilePath);
//             return res.status(400).json({Message:"File format is incorrect"});
//         };

//         cloudinary.v2.uploader.upload(
//             file.tempFilePath, 
//             {folder:"portfolio" }, 
//             async (err, res)=>{
//                 console.log('Cloudinary Error: ', err);
//                 console.log('Cloudinary Result: ', rs);

//                 if(err) throw err;
            
//                 removeTmp(file.tempFilePath);
//                 res.json({
//                     public_id: res.public_id, 
//                     url: res.secure_url
//                 });
//             }
//         );
//     } catch (err) {
//       res.status(500).json({Message: err.message});  
//     }
// });

//delete image
Router.post('/destroy', (req, res) => {
    const {public_id} = req.body;
    
    try {
        if(!public_id) {
            return res.status(400).json({Message: 'No images selected'})
        };
    
        cloudinary.v2.uploader.destroy(public_id, async(err, result) => {
            if(err) throw err;
            res.json({Message: 'Image deleted'});
        });
    } catch (err) {
        res.status(500).json({Message: err.message})
    }
});

//remove temp path
const removeTmp = (path) => {
    fs.unlink(path, err => {
        if(err) throw err;
    });
};

export default Router;