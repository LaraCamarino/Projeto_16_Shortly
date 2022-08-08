import { usersRepository } from "../repositories/usersRepository.js";

export async function getUserInfo(req, res) {
    const { userId } = res.locals.verifyValidToken;

    try {
        const existingUser = await usersRepository.verifyExistingUser(userId);

        if (existingUser.rowCount === 0) {
            res.status(404).send("This user does not exist.");
            return;
        }

        const visitCount = await usersRepository.getUserVisitCount(userId);

        const { rows: arrayUrls } = await usersRepository.getUserUrls(userId);

        const formattedResult = {
            "id": existingUser.rows[0].id,
            "name": existingUser.rows[0].name,
            "visitCount": visitCount.rows[0].sum,
            "shortenedUrls": arrayUrls
        }

        res.status(200).send(formattedResult);
    }
    catch (error) {
        res.status(500).send(error);
    }
}

export async function getRanking(req, res) {
    try {
        const { rows: ranking } = await usersRepository.getRanking();
        res.status(200).send(ranking);
    }
    catch (error) {
        res.status(500).send(error);
    }
}