import mongoose from 'mongoose';


export const aboutSchema = new mongoose.Schema({
    about: {
        type: 'String',
        required: true
    },
});

const AboutModel = mongoose.model('about', aboutSchema);
export default AboutModel;