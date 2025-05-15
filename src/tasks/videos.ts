import { puppeteerService } from "../services/puppeteerService";

// Função que inicia a interação por vídeos
export async function getVideos() {
    const page = puppeteerService.getPage();

    (await page).evaluate(() => {
        const allVideos = Array.from(document.querySelectorAll("video"));

        for (const video of allVideos) {
            video.click();
        }
    });
};