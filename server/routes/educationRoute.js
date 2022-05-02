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

// EDUCATION ROUTES
//get education
Router.get('/education', getEducation);

//get education by id
Router.get('/education/:id', getEducationId);

//post education
Router.post('/education/', addEducation);

//update education by id
Router.put('/education/update/:id', updatedEducation);

//delete education by id
Router.delete('/education/:id', delEducation);

export default Router;