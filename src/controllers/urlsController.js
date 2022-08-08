import { nanoid } from 'nanoid'

import { urlsRepository } from '../repositories/urlsRepository.js';

export async function shortenUrl(req, res) {
    const { url } = req.body;
    const { userId } = res.locals.verifyValidToken;
    const shortUrl = nanoid(8);

    try {
        await urlsRepository.shortenUrl(url, shortUrl, userId);

        res.status(201).send({ shortUrl });
    }
    catch (error) {
        res.status(500).send(error);
    }
}

export async function getUrlById(req, res) {
    const { id } = req.params;

    try {
        const result = await urlsRepository.getUrlById(id);

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

export async function redirectToUrl(req, res) {
    const { shortUrl } = req.params;

    try {
        const result = await urlsRepository.verifyUrlByShortUrl(shortUrl);

        if (result.rowCount === 0) {
            res.status(404).send("URL not found.");
            return;
        }

        const url = result.rows[0];
        const newVisitCount = url.visitCount + 1;

        await urlsRepository.updateUrlVisitCount(newVisitCount, url.id);

        res.redirect(url.url);
    }
    catch (error) {
        res.status(500).send(error);
    }
}

export async function deleteUrl(req, res) {
    const { id } = req.params;
    const { userId } = res.locals.verifyValidToken;


    try {
        const result = await urlsRepository.verifyUrlById(id);

        if (result.rowCount === 0) {
            res.status(404).send("There is no URL with that ID.");
            return;
        }

        const url = result.rows[0];

        if (url.creatorId !== userId) {
            res.status(401).send("The shorten URL does not belong to this user.");
            return;
        }

        await urlsRepository.deleteUrl(id);
        res.status(204).send("The shorten URL was deleted successfully.");
    }
    catch (error) {
        res.status(500).send(error);
    }
}