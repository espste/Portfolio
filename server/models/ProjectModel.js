import mongoose from 'mongoose';


export const projectSchema = new mongoose.Schema({
    project_id: {
        type: 'String',
        unique: true,
        required: true
    },

    title: {
        type: 'String',
        trim: true
    },

    description: {
        type: 'String',
        required: true
    },
    images: {
        type: Object,
        required: true
    },
});

const ProjectModel = mongoose.model('project', projectSchema);
export default ProjectModel;