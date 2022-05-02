import express from "express";
import fileUpload from 'express-fileupload';
import mongoose from "mongoose";
import cors from 'cors';
import helmet from "helmet";
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

import contactRoute from './routes/contactRoute.js';
import userRoute from './routes/userRoute.js';
import projectRoute from './routes/projectRoute.js';
import experienceRoute from './routes/experienceRoute.js';
import aboutRoute from './routes/aboutRoute.js';
import educationRoute from './routes/educationRoute.js';
import upload from './routes/upload.js';

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(fileUpload({
    useTempFiles: true
}));

//mongodb
const URI = process.env.MONGO_URI;
mongoose.connect(URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if(err) throw new err;
        else {
            return console.log('MongoDB Connected..!')
        }
    } 
);

//routes
app.use('/contact', contactRoute);
app.use('/user', userRoute);
app.use('/', projectRoute);
app.use('/', experienceRoute);
app.use('/', educationRoute);
app.use('/', aboutRoute);
app.use('/', upload);

//static assets
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
};


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});