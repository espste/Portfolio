import mongoose from 'mongoose';


export const aboutSchema = new mongoose.Schema({
    about: {
        type: 'String',
    },
});

const AboutModel = mongoose.model('about', aboutSchema);
export default AboutModel;