import { credentialsLogin } from "./prompts/loginCredentials";
import { Login } from "./tasks/login";

async function main() {
    // Função para iniciar o processo de login
    const { login, password, loginMethod } = await credentialsLogin();
    await Login({ login: login, password: password, loginMethod: loginMethod });
};

main();