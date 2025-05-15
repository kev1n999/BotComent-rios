import prompts from "prompts";
import { SearchVideoProps } from "../interfaces/searchVideo";

/**
 * Função que captura os dados e informações de pesquisa para iniciar a função de pesquisar vídeos no tiktok
 * @returns {Promise<SearchVideoProps>} - Retorna dados como o método de pesquisa(hashtag ou pesquisa normal), e a pesquisa.
 */
export async function SearchVideo(): Promise<SearchVideoProps> {
    const { searchMethod } = await prompts({
        type: "text",
        message: "Qual o método de pesquisa?hashtag ou search?",
        name: "searchMethod",
        validate: (r) => r.toLowerCase() === "hashtag" || r.toLowerCase() === "search" ? true : "erro: método de pesquisa inválido." 
    });

    const { search } = await prompts({
        type: "text",
        message: "Qual a pesquisa?",
        name: "search",
        validate: (r) => r.length > 1 ? true : "Pesquisa inválida!"
    });

    return { searchMethod, search };
};