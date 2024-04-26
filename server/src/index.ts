import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 3000;
const GIPHY_KEY = process.env.GIPHY_KEY;

const app = express();

app.use(express.static(path.join(__dirname, "../../giphy-search/dist")));

app.get("/api/v1/gifs", async (req, res) => {
    const search = req.query.search;
    const rating = req.query.rating;
    const limit = req.query.limit;
    if (typeof rating !== "string" || typeof limit !== "string") {
        return res.status(400);
    }

    const url =
        typeof search === "string"
            ? createUrl("search", { q: search, rating, limit, api_key: GIPHY_KEY })
            : createUrl("trending", { rating, limit, api_key: GIPHY_KEY });

    const resp = await fetch(url);
    if (!resp.ok) {
        return res.status(resp.status).json(resp.statusText);
    }

    try {
        return res.json(await resp.json());
    } catch (err) {
        return res.status(500);
    }
});

app.listen(PORT, () => console.log(`express server listening on port ${PORT}`));

function createUrl(
    endpoint: string,
    params: Record<string, string | number | boolean | undefined>
) {
    const url = new URL(`https://api.giphy.com/v1/gifs/${endpoint}`);
    for (const key in params) {
        const val = params[key];
        if (val !== undefined) {
            url.searchParams.set(key, String(val));
        }
    }

    return url;
}
