import express from "express";
//Controller
import { 
    getEducation, 
    getEducationId, 
    addEducation, 
    updatedEducation, 
    delEducation 
} from '../controllers/educationCtrl.js';

const Router = express.Router();

//get 
Router.get('/education', getEducation);

//get by id
Router.get('/education/:id', getEducationId);

//post 
Router.post('/education/', addEducation);

//update by id
Router.put('/education/update/:id', updatedEducation);

//delete by id
Router.delete('/education/:id', delEducation);

export default Router;