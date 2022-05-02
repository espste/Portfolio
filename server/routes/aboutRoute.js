import express from "express";
//Controller
import { 
    getAbout, 
    getAboutId, 
    addAbout, 
    updatedAbout, 
    delAbout 
} from '../controllers/aboutCtrl.js';


const Router = express.Router();

//ABOUT ROUTES
//get 
Router.get('/about', getAbout);

//get by id
Router.get('/about/:id', getAboutId);

//post 
Router.post('/about/', addAbout);

//update by id
Router.put('/about/update/:id', updatedAbout);

//delete by id
Router.delete('/about/:id', delAbout);

export default Router;