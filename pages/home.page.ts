import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly newGameButton: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newGameButton = page.locator('button.menu-btn.btn-new-game');
        this.loginButton = page.locator('button.menu-btn.btn-login');
    }

    async navigateTo() {
        await this.page.goto('/');
    }
}