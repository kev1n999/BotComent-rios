import { LoginCredentials } from "../interfaces/loginCredentials";
import { puppeteerService } from "../services/puppeteerService";
import { urls } from "../urls";

export async function Login(credentials: LoginCredentials): Promise<void> {
    const page = await puppeteerService.getPage();
    const { login, password } = credentials;

    try {
        (await page).goto(urls.loginUrl);
    } catch (err) {
        console.error(err);
    };
};