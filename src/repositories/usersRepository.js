import connection from "../dbStrategy/postgres.js";

async function verifyExistingUser(userId) {
    return connection.query("SELECT * FROM users WHERE id = $1", [userId]);
}

async function getUserVisitCount(userId) {
    return connection.query(`SELECT SUM("visitCount") FROM urls WHERE "creatorId" = $1`, [userId]);
}

async function getUserUrls(userId) {
    return connection.query(`SELECT id, url, "shortUrl", "visitCount" FROM urls WHERE "creatorId" = $1`, [userId]);
}

async function getRanking() {
    return connection.query(`SELECT users.id, users.name, COUNT(url) AS "linksCount", COALESCE(SUM(urls."visitCount"),0) as "visitCount"
    FROM users 
    LEFT JOIN urls 
    ON urls."creatorId" = users.id 
    GROUP BY users.id
    ORDER BY "visitCount" DESC
    LIMIT 10`);
}

export const usersRepository = {
    verifyExistingUser,
    getUserVisitCount,
    getUserUrls,
    getRanking
}