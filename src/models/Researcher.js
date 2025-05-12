import mongoose from "mongoose";

const researcherSchema = new mongoose.Schema({
    name: String,
    university: String,
    field: String,
    email: String,
    details: {
        qualifications: String,
        researchGroups: String,
        biography: String,
        awards: String,
        additionalInfo: String
    },
    socials: {
        linkedin: String,
        researchgate: String,
        universityWebsite: String,
    },
    fundingAvailable: Boolean
});

module.exports = mongoose.model('Researcher', researcherSchema);