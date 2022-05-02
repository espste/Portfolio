import mongoose from 'mongoose';


export const experienceSchema = new mongoose.Schema({
    experience: {
        type: 'String',
    },
});

const ExperienceModel = mongoose.model('experience', experienceSchema);
export default ExperienceModel;