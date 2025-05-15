import { puppeteerService } from "../services/puppeteerService";

export async function getVideos() {
    const page = puppeteerService.getPage();

    (await page).evaluate(() => {
        const allVideos = Array.from(document.querySelectorAll("video"));

        for (const video of allVideos) {
            video.click();
        }
    });
};