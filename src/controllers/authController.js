import bcrypt from "bcrypt";

import connection from "../dbStrategy/postgres.js";

export async function signUp(req, res) {
    const { name, email, password } = req.body;
    const encryptedPassword = bcrypt.hashSync(password, 10);

    try {
        await connection.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", [name, email, encryptedPassword]);
        res.status(201).send("User registered successfully.");
    }
    catch (error) {
        res.status(500).send(error);
    }
}


