import "colors";
import { LoginCredentials } from "../interfaces/loginCredentials";
import { puppeteerService } from "../services/puppeteerService";
import { urls } from "../urls";

// Função que inicia o processo de login baseado nas informações enviadas no prompt de login
export async function Login(credentials: LoginCredentials): Promise<void> {
    const page = await puppeteerService.getPage();
    const { login, password } = credentials;
    
    try {
        await page.goto(urls.loginUrl);

        const inputUsername = await page.waitForSelector('input[name="username"]', { visible: true });
        const inputPassword = await page.waitForSelector('input[type="password"]', { visible: true });

        await inputUsername?.type(login);
        await inputPassword?.type(password);

        const submitLoginButton = await page.waitForSelector('button[data-e2e="login-button"]');
        await submitLoginButton?.click();
    } catch (err) {
        console.error(err);
    };
};