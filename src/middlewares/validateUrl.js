import joi from "joi";

export default async function validateUrl(req, res, next) {
    const url = req.body;

    const urlSchema = joi.object({
        url: joi.string().required()
    });

    const validation = urlSchema.validate(url);
    if (validation.error) {
        res.status(422).send(validation.error.details);
        return;
    }
    
    next();
}