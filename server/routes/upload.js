import express from "express";
import cloudinary from 'cloudinary';
import fs from 'fs';
import path from 'path';

//////////      //////////
//                      //
// NOT WORKING PROPERLY //
//                      //
//////////      //////////

const Router = express.Router();


//cloudinary config 
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SEC,
    secure: true
});

//upload image
Router.post('/upload', (req, res)=>{
    try {

        if(!req.files || Object.keys(req.files).length===0)
            return res.status(400).send({Message: 'Add file to upload..'});
       
        const file = req.files.file;
        if(file.size > 1024*1024) {
            removeTmp(file.tempFilePath);
            return res.status(400).json({Message:"File size is too large"});
        };
  
        if(file.mimetype !=='image/jpeg' && file.mimetype !== 'image/png'){
            removeTmp(file.tempFilePath);
            return res.status(400).json({Message:"File format is incorrect"});
        };

        cloudinary.v2.uploader.upload(
            file.tempFilePath, 
            {folder:"test" }, 
            async (err, result)=>{
                console.log('Cloudinary Error: ', err);
                console.log('Cloudinary Result: ', result);

                if(err) throw err;
            
                removeTmp(file.tempFilePath);
                res.json({
                    public_id: result.public_id, 
                    url: result.secure_url
                });
            }
        );

        // cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
        //     { public_id: "olympic_flag" }, 
        //     function(error, result) {console.log(result); });
       
    } catch (err) {
      res.status(500).json({Message: err.message});  
    }
});

//delete image
Router.post('/destroy', (req, res) => {
    const public_id = req.body;
    
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