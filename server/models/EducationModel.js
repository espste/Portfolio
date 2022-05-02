import mongoose from 'mongoose';


export const educationSchema = new mongoose.Schema({
    education: {
        type: 'String',
    },
});

const EducationModel = mongoose.model('education', educationSchema);
export default EducationModel;