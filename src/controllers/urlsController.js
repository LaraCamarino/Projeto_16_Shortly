import { nanoid } from 'nanoid'

import connection from "../dbStrategy/postgres.js";

export async function shortenUrl(req, res) {
    const { url } = req.body;
    const { userId } = res.locals.verifyValidToken;
    const shortUrl = nanoid(8);

    try {
        await connection.query(`INSERT INTO urls (url, "shortUrl", "creatorId") VALUES ($1, $2, $3)`, [url, shortUrl, userId]);

        res.status(201).send({ shortUrl });
    }
    catch (error) {
        res.status(500).send(error);
    }
}

export async function getUrlById(req, res) {
    const { id } = req.params;

    try {
        const result = await connection.query("SELECT * FROM urls WHERE id = $1", [id]);

        if (result.rowCount === 0) {
            res.status(404).send("There is no URL with that ID.");
            return;
        }

        const url = result.rows[0];

        delete url.visitCount;
        delete url.creatorId;
        delete url.createdAt;

        res.status(200).send(url);
    }
    catch (error) {
        res.status(500).send(error);
    }
}