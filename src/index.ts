import colors from "colors";
import { credentialsLogin } from "./prompts/loginCredentials";
import { Login } from "./tasks/login";
import { searchVideos } from "./tasks/search";
import { SearchVideo } from "./prompts/searchVideo";
import { getVideos } from "./tasks/videos";

async function main() {
    // Função para iniciar o processo de login
    const { login, password } = await credentialsLogin();
    const { searchMethod, search } = await SearchVideo();

    await Login({ login: login, password: password });
    await searchVideos(searchMethod, search);
    await getVideos();
};

main();