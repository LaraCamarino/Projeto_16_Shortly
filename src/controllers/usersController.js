import connection from "../dbStrategy/postgres.js";

export async function getUserInfo(req, res) {
    const { userId } = res.locals.verifyValidToken;

    try {
        const verifyExistingUser = await connection.query("SELECT * FROM users WHERE id = $1", [userId]);

        if (verifyExistingUser.rowCount === 0) {
            res.status(404).send("This user does not exist.");
            return;
        }

        const visitCount = await connection.query(`SELECT SUM("visitCount") FROM urls WHERE "creatorId" = $1`, [userId]);

        const { rows: arrayUrls} = await connection.query(`SELECT id, url, "shortUrl", "visitCount" FROM urls WHERE "creatorId" = $1`, [userId]);
        
        const formattedResult = {
            "id": verifyExistingUser.rows[0].id,
            "name": verifyExistingUser.rows[0].name,
            "visitCount": visitCount.rows[0].sum,
            "shortenedUrls": arrayUrls
        }

        res.status(200).send(formattedResult);
    }
    catch (error) {
        res.status(500).send(error);
    }
}
