import prompts from "prompts";
import { LoginCredentials } from "../interfaces/loginCredentials";

/**
 * Função que captura email/ou nome de usuário e senha para iniciar a função de login no tiktok
 * @returns {Promise<LoginCredentials>} - Retorna dados de credenciais para login informados pelo usuário
 */
export async function credentialsLogin(): Promise<LoginCredentials> {
    const { login } = await prompts({
        type: "text",
        name: "login",
        message: "Informe seu email ou nome de usuário do tik-tok:"
    });

    const { password } = await prompts({
        type: "password",
        name: "password",
        message: "Informe a senha da sua conta:"
    });

    return { login, password };
};