import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

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

export async function signIn(req, res) {
    const { email, password } = req.body;

    try {
        const { rows: verifyExistingUser } = await connection.query("SELECT * FROM users WHERE email = $1", [email]);
        if(verifyExistingUser.length === 0) {
            res.status(401).send("Incorrect e-mail or password.");
            return;
        }

        const verifyPassword = bcrypt.compareSync(password, verifyExistingUser[0].password);
        if(!verifyPassword) {
            res.status(401).send("Incorrect e-mail or password.");
            return;
        }
               
        if (verifyExistingUser && verifyPassword) {
            const token = uuid();

            await connection.query(`INSERT INTO sessions ("userId", token) VALUES ($1, $2)`, [verifyExistingUser[0].id, token]);

            res.status(200).send(token);
            return;
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}
