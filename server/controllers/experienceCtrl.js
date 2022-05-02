import ExperienceModel from '../models/ExperienceModel.js'


//get Experience
export const getExperience = async(req, res) => {
    const experience = await ExperienceModel.find();

    try {
        res.json(experience);
    } catch(error) {
        res.status(500).json({msg: 'Something went wrong..'});
    }
};

//get Experience by id
export const getExperienceId = async(req, res) => {
    
    try {
        const experience = await ExperienceModel.findById(req.params.id);
        res.json(experience);

    } catch(err) {
        res.status(500).json({msg: 'Something went wrong..'});
    }
};

//add Experience
export const addExperience = async(req, res) => {
    const { experience } = req.body;
    const newExperience = new ExperienceModel({experience: experience});

    try {
        await newExperience.save();
        res.send('Experience Inserted Successfully');
    } catch(error) {
        res.status(500).json({msg: 'Something went wrong..'})
    }
};

//update Experience by id
export const updatedExperience = async(req, res) => {
    const { experience } = req.body;

    try {
        const newExperience = await ExperienceModel.findByIdAndUpdate(req.params.id, {experience});

        let results = await ExperienceModel.save();
        await results;
        res.json({msg: 'Experience Updated..'})

        //WORKS BUT GET THE ERROR MSG AS WELL
    } catch(error) {
        res.status(500).json({msg: 'Something went wrong..'});
    }
};

//delete Experience by id
export const delExperience = async(req, res) => {
    const experience = await ExperienceModel.findByIdAndDelete(req.params.id);
    experience;
    res.json({msg: 'Experience Deleted..'})
};
