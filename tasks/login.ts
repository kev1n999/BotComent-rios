import { LoginCredentials } from "../src/interfaces/loginCredentials";
import { puppeteerService } from "../src/services/puppeteerService";
import { urls } from "../src/urls";

export async function Login(credentials: LoginCredentials): Promise<void> {
    const page = await puppeteerService.getPage();
    const { login, password, loginMethod } = credentials;

    try {
        (await page).goto(urls.loginUrl, { waitUntil: "domcontentloaded" });

        const parseDivs = await page.evaluate(() => {
            return Array.from(document.querySelectorAll("div"));
        });

        if (loginMethod.toLowerCase() === "google") {
            const loginToGoogle = parseDivs.find(div => div.textContent?.trim().toLowerCase() === "continuar com google");
            loginToGoogle?.click();
        } else {
            const loginToUserAndPassword = parseDivs.find(div => div.textContent?.trim().toLowerCase() === "usar telefone/e-mail/nome de usuário");
            loginToUserAndPassword?.click();
        }

    } catch (err) {
        console.error(err);
    };
};