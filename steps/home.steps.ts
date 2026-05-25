import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

const { Given, Then } = createBdd();

Given('I open the SebaQuiz home page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateTo();
});

Then('I should see the "NOWA GRA" button', async ({ page }) => {
    const homePage = new HomePage(page);

    await expect(homePage.newGameButton).toBeVisible();
    await expect(homePage.newGameButton).toHaveText('Nowa Gra');
});

Then('I should see the "ZALOGUJ" button', async ({ page }) => {
    const homePage = new HomePage(page);

    await expect(homePage.loginButton).toBeVisible();
    await expect(homePage.loginButton).toHaveText('Zaloguj');
});