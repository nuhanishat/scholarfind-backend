import Joi from 'joi';

export const updateResearcherSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    university: Joi.string().required(),
    fieldsToUpdate: Joi.object({
        title: Joi.string(),
        fundingAvailable: Joi.boolean(),
        details: Joi.object({
            qualifications: Joi.string(),
            researchGroups: Joi.array().items(Joi.string()),
            biography: Joi.string(),
            awards: Joi.array().items(Joi.string()),
            additionalInfo: Joi.string()
        }),
        socials: Joi.object({
            linkedin: Joi.string().uri(),
            researchgate: Joi.string().uri(),
            universityWebsite: Joi.string().uri(),
        })
  }).required()
})