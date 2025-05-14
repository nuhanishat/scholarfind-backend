import mongoose from "mongoose";
import Researcher from "../models/Researcher";

export const getAllResearchers = async (req, res) => {
    try {
        console.log('[API] Recieved request for all researchers in database')
        const researchers = await Researcher.find();
        res.json(researchers);
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

export const postNewResearcher = async (req, res) => {
    console.log('[API] Recieved request to add new researcher to database')

    const detailsData = req.body.details || {};
    const socialData = req.body.socials || {};

    const researcher = new Researcher({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        title: req.body.title,
        department: req.body.department || '',
        university: req.body.university,
        field: req.body.field || '',
        email: req.body.email || '',
        details: {
            qualifications: detailsData.qualifications || '',
            researchGroups: detailsData.researchGroups || [],
            biography: detailsData.biography || '',
            awards: detailsData.awards || [],
            additionalInfo: detailsData.additionalInfo || ''
        },
        socials: {
            linkedin: socialData.linkedin || '',
            researchgate: socialData.researchgate || '',
            universityWebsite: socialData.universityWebsite || '',
        },
        fundingAvailable: req.body.fundingAvailable ?? false
    });

    try {
        const newResearcher = await researcher.save();
        res.status(201).json(newResearcher);
    } catch (err) {
        res.status(400).json( { message: err.message })
    }
}

export const updateResearcher = async (req, res) => {
    const { firstName, lastName, university } = req.body; // Search criteria in the body
    const fieldsToUpdate = req.body.fieldsToUpdate;

    console.log(`[API] Recieved request to update researcher : ${lastName}, ${firstName} `)

    if (!firstName || !lastName || !university) {
        return res.status(400).json({ message: 'Missing search parameters: firstName, lastName, university' })
    }

    if (!fieldsToUpdate || typeof fieldsToUpdate !== 'object') {
        return res.status(400).json({ message: 'Missing fieldsToUpdate object with data to update.'})
    }

    //Find researcher
    try { 
        const researcher = await Researcher.findOne({ firstName, lastName, university });
        if (!researcher) {
            return res.status(404).json({ message: 'Researcher not found'})
        }

        // Merge update data into the existing document
        // Handle nested updates carefully if needed
        for (const key in fieldsToUpdate) {
            if (fieldsToUpdate.hasOwnProperty(key)) {
                //if nested, handle separately
                if (key === 'details' && typeof fieldsToUpdate[key] === 'object') {
                    Object.assign(researcher.details, fieldsToUpdate.details);
                } else if (key === 'socials' && typeof fieldsToUpdate[key] === 'object') {
                    Object.assign(researcher.socials, fieldsToUpdate.socials);
                } else {
                    researcher[key] = fieldsToUpdate[key];
                }
            }
        }

        await researcher.save();
        console.log(`[API] Info updated for researcher : ${lastName}, ${firstName}`)
        res.json(researcher);

    } catch (err) {
        res.status(500).json({ message: 'Error updating researcher', error: err.message });
    }
}

export const deleteResearcher = async (req, res) => {
    const { firstName, lastName, university } = req.body;

    console.log(`[API][DELETE] Received request to delete researcher: ${lastName}, ${firstName}`);

    try {
        const researcher = await Researcher.findOne({ lastName: lastName, firstName: firstName, university: university })
        if (!researcher) {
            return res.status(404).json({ message: '[API][DELETE] Researcher not found'})
        }
        console.log(`[API][DELETE] Researcher found! : ${firstName} ${lastName} @ ${university}`);
    
        await Researcher.deleteOne({ _id: researcher._id })
        console.log(`[API][DELETE] Researcher deleted : ${firstName} ${lastName} @ ${university}`);
        res.status(200).json({message: `Reseacher ${firstName} ${lastName} @ ${university} deleted!`});

    } catch (err) {
        res.status(500).json({ message: '[API][DELETE] Error deleting researcher', error: err.message });
    }
    

}

