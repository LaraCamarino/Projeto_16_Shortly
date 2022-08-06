import joi from "joi";

import connection from "../dbStrategy/postgres.js";

export default async function validateSignUp(req, res, next) {
    const newUser = req.body;
    const nameRegex = /^[a-zA-Z]{2,25}$/;
    const passwordRegex = /^.{5,}$/;

    const newUserSchema = joi.object({
        name: joi.string().pattern(nameRegex).required(),
        email: joi.string().email().required(),
        password: joi.string().pattern(passwordRegex).required(),
        confirmPassword: joi.string().required().valid(joi.ref("password"))
    });

    const validation = newUserSchema.validate(newUser, { abortEarly: false });
    if (validation.error) {
        res.status(422).send(validation.error.details);
        return;
    }

    const { rows: emailsInUse } = await connection.query("SELECT (email) FROM users");
    if (emailsInUse.some((user) => user.email === newUser.email)) {
        res.status(409).send("This e-mail is alrealdy being used.");
        return;
    }

    next();
}
