import prompts from "prompts";
import { LoginCredentials } from "../interfaces/loginCredentials";

export async function credentialsLogin(): Promise<LoginCredentials> {
    const { loginMethod } = await prompts({
        type: "text",
        name: "loginMethod",
        message: "Qual o método de login(google ou user)?",
        validate: (method) => method === "google" || method === "user" ? true : "Método de login indisponível."
    });

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

    return { login, password, loginMethod };
};