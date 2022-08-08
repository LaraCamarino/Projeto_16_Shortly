import connection from "../dbStrategy/postgres.js";

async function shortenUrl(url, shortUrl, userId) {
    return connection.query(`INSERT INTO urls (url, "shortUrl", "creatorId") VALUES ($1, $2, $3)`, [url, shortUrl, userId]);
}

async function getUrlById(id) {
    return connection.query("SELECT * FROM urls WHERE id = $1", [id]);
}

async function verifyUrlByShortUrl(shortUrl) {
    return connection.query(`SELECT * FROM urls WHERE "shortUrl" = $1`, [shortUrl]);
}

async function updateUrlVisitCount(newVisitCount, id) {
    return connection.query(`UPDATE urls SET "visitCount" = $1 WHERE id = $2`, [newVisitCount, id]);
}

async function verifyUrlById(id) {
    return connection.query("SELECT * FROM urls WHERE id = $1", [id]);
}

async function deleteUrl(id) {
    return connection.query("DELETE FROM urls WHERE id = $1;", [id]);
}

export const urlsRepository = {
    shortenUrl,
    getUrlById,
    verifyUrlByShortUrl,
    updateUrlVisitCount,
    verifyUrlById,
    deleteUrl
}