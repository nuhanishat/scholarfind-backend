import mongoose from "mongoose";

const researcherSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        default: '',
    },
    university: {
        type: String,
        required: true,
    },
    field: {
        type: String,
        default: '',
    },
    email: {
        type: String,
        default: '',
     },
    details: {
        qualifications: {
            type: String,
            default: '',
         },
        researchGroups: {
            type: [String],
            default: [],
         },
        biography: {
            type: String,
            default: '',
         },
        awards: {
            type: [String],
            default: [],
         },
        additionalInfo: {
            type: String,
            default: '',
         }
    },
    socials: {
        linkedin: {
            type: String,
            default: '',
         },
        researchgate: {
            type: String,
            default: '',
         },
        universityWebsite: {
            type: String,
            default: '',
         },
    },
    fundingAvailable: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Researcher', researcherSchema);