import puppeteer, { Browser, Page } from "puppeteer";

class PuppeteerServices {
    private browser!: Browser;
    
    constructor(public headless?: boolean) {};

    // Método que inicia a instância do navegador
    public async init(): Promise<void> {
        if (!this.browser) {
            if (!this.headless) this.headless = false;
            this.browser = await puppeteer.launch({ headless: this.headless});
        }    
    };
    
    /**
     * @returns {Page} - retorna uma nova instância de Page(nova página)
     */
    public async getPage(): Promise<Page> {
        if (!this.browser) {
            await this.init();
        }

        return this.browser.newPage();
    }

    // Método para encerrar/fechar a instância atual da página
    public async close(): Promise<void> {
        if (this.browser) await this.browser.close();
    }
};

export const puppeteerService = new PuppeteerServices();