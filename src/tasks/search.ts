import { Page } from "puppeteer";
import { puppeteerService } from "../services/puppeteerService";

export async function searchVideos(searchMethod: string, search: string) {
    let url: string = "";

    if (searchMethod.trim().toLowerCase() === "hashtag") {
        url = `https://www.tiktok.com/search?q=${search}`;
    } else if (searchMethod.trim().toLowerCase() === "search") {
        url = `https://www.tiktok.com/tag/${search}`;
    }

    if (!url.includes("tiktok.com")) return;

    const page = await puppeteerService.getPage();
    await page.goto(url);
};