import { nanoid } from 'nanoid'

import connection from "../dbStrategy/postgres.js";

export async function shortenUrl(req, res) {
    const { url } = req.body;
    const { userId } = res.locals.verifyValidToken;
    const shortUrl = nanoid(8);
   
    try {
        await connection.query(`INSERT INTO urls (url, "shortUrl", "creatorId") VALUES ($1, $2, $3)`, [url, shortUrl, userId]);

        res.status(201).send({shortUrl});
    }
    catch (error) {
        res.status(500).send(error);
    }
}