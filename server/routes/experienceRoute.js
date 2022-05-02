import express from "express";
//Controller
import { 
    getExperience, 
    getExperienceId, 
    addExperience, 
    updatedExperience, 
    delExperience 
} from '../controllers/ExperienceCtrl.js';

const Router = express.Router();

// Experience ROUTES
//get Experience
Router.get('/experience', getExperience);

//get Experience by id
Router.get('/experience/:id', getExperienceId);

//post Experience
Router.post('/experience/', addExperience);

//update Experience by id
Router.put('/experience/update/:id', updatedExperience);

//delete Experience by id
Router.delete('/experience/:id', delExperience);

export default Router;