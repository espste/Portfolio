import EducationModel from '../models/EducationModel.js'


//get Education
export const getEducation = async (req, res) => {
    const education = await EducationModel.find();

    try {
        res.json(education);
    } catch(error) {
        res.status(500).json({msg: 'Something went wrong..'});
    }
};

//get by id
export const getEducationId = async (req, res) => {
    
    try {
        const education = await EducationModel.findById(req.params.id);
        res.json(education);
        console.log(req.params.id);

    } catch(err) {
        res.status(500).json({msg: 'Something went wrong..'});
    }
};

//add Education
export const addEducation = async(req, res) => {
    const { education } = req.body;
    const newEducation = new EducationModel({education: education});

    try {
        await newEducation.save();
        res.json(newEducation);
    } catch(error) {
        res.status(500).json({msg: 'Server problem..'})
    }
};

//update Education by id
export const updatedEducation = async (req, res) => {
    const { education } = req.body;


    try {
        await EducationModel.findByIdAndUpdate(req.params.id, {education});

        let results = await EducationModel.save();
        await results;
        res.json({msg: 'Updated..'})

    } catch(error) {
        res.status(500).json({msg: 'Something went wrong..'});
    }
};

//delete Education by id
export const delEducation = async (req, res) => {
    const education = await EducationModel.findOne({_id: req.params.id});
    education;
    res.json({msg: 'Deleted..'})
};
