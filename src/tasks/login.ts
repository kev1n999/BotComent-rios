import "colors";
import { LoginCredentials } from "../interfaces/loginCredentials";
import { puppeteerService } from "../services/puppeteerService";
import { urls } from "../urls";

export async function Login(credentials: LoginCredentials): Promise<void> {
    const page = await puppeteerService.getPage();
    const { login, password } = credentials;
    
    try {
        await page.goto(urls.loginUrl);

        await page.type('input[name="username"]', login);
        await page.type('input[type="password"]', password);

        const submitLoginButton = await page.waitForSelector('button[data-e2e="login-button"]');
        await submitLoginButton?.click();
    } catch (err) {
        console.error(err);
    };
};