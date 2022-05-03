import AboutModel from "../models/AboutModel.js";

//get 
export const getAbout = async (req, res) => {
    const about = await AboutModel.find();

    try {
        res.json(about);
    } catch(error) {
        res.status(500).json({msg: 'Server problem..'});
    }
};

//get by id
export const getAboutId = async (req, res) => {
    
    try {
        const about = await AboutModel.findById(req.params.id);
        res.json(about);

    } catch(err) {
        res.status(500).json({msg: 'Something went wrong..'});
    }
};

//add
export const addAbout = async (req, res) => {
    const { about } = req.body;
    const newAbout = new AboutModel({about});
    
    try {
        await newAbout.save();
        res.json(newAbout);

    } catch(error) {
        res.status(500).json({msg: 'Server problem..'});
    }
};

//update by id
export const updatedAbout = async (req, res) => {
    const { about } = req.body;

    try {
        await AboutModel.findByIdAndUpdate(req.params.id, {about});

        let results = await AboutModel.save();
        await results;
        res.json({msg: 'Updated'})

    } catch(error) {
        res.status(500).json({msg: error});
    }
};

//delete by id
export const delAbout = async (req, res) => {
    const about = await AboutModel.findByIdAndDelete(req.params.id);
    about;
    res.json({msg: 'Deleted'})
};

