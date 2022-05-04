import express from "express";
import ProjectModel from "../models/ProjectModel.js";

const Router = express.Router();


// PROJECT ROUTES 
//get Project
Router.get('/project', async (req, res) => {
    
    try {
        const project = await ProjectModel.find(req.body);
        res.json(project);

    } catch(err) {
        res.status(500).json({Message: err})
    }
});

//get Project by id
Router.get('/project/:id', async(req, res) => {
    try {
        let project = await ProjectModel.findById(req.params.id);
        res.json(project);
    } catch (err) {
        res.status(500).json({Message: err})
    }
});

//add Project
Router.post('/project/', async (req, res) => {
    const {project_id, title, description, images} = req.body;

    try {
        const project = new ProjectModel({
            project_id: project_id,
            title: title,
            description: description,
            images: images,
        });

        const savedProject = await project.save();
        savedProject;
        res.json({Message: "Project Added"})

    } catch(error) {
        res.status(500).json('Something went wrong');
    }
});

//update Project by id
Router.put('/project/update/:id', async (req, res) => {
    const {project_id, title, description, images} = req.body;

    try {
        const project = await ProjectModel.findByIdAndUpdate(req.params.id, {
            project_id: project_id,
            title: title,
            description: description,
            images: images,
        });
        let result = await ProjectModel.save();
        await result;
        res.json({Message: "Project Updated"})

    } catch(err) {
        res.status(500).json({msg: 'Something went wrong'});
    }
});

//delete Project by id
Router.delete('/project/:id', async(req, res) => {
    let project = await ProjectModel.findByIdAndDelete(req.params.id);
    try {
        await project;
        res.json({msg: "Deleted"});
    } catch (err) {
        res.json({msg: err});
    }
});

export default Router;