import { ChooseTeamPage } from '../pages/choose-team.page';
import { createBdd, DataTable } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const { Then, When } = createBdd();

Then('Choose Team screen is open', async ({ page }) => {
  const chooseTeamPage = new ChooseTeamPage(page);
  await chooseTeamPage.isAt();
});

Then('Add team button is disabled', async ({ page }) => {
  const chooseTeamPage = new ChooseTeamPage(page);
  await chooseTeamPage.isAt();

  await expect(chooseTeamPage.addTeamButton).toBeDisabled();
});

Then('Add team button is enabled', async ({ page }) => {
  const chooseTeamPage = new ChooseTeamPage(page);
  await chooseTeamPage.isAt();

  await expect(chooseTeamPage.addTeamButton).toBeEnabled();
});

Then('Team table is not visible', async ({ page }) => {
  const chooseTeamPage = new ChooseTeamPage(page);
  await chooseTeamPage.isAt();

  await expect(chooseTeamPage.teamsTable).toBeHidden();
});

When('I type {string} in "teamName" field', async ({ page }, teamName: string) => {
  const chooseTeamPage = new ChooseTeamPage(page);
  await chooseTeamPage.isAt();

  await chooseTeamPage.typeTeamName(teamName);
});

When('I click add team button', async ({ page }) => {
  const chooseTeamPage = new ChooseTeamPage(page);
  await chooseTeamPage.isAt();

  await chooseTeamPage.clickAddTeamButton();
});

Then('The teams list should contain following teams:', async ({ page }, dataTable: DataTable) => {
  const chooseTeamPage = new ChooseTeamPage(page);
  await chooseTeamPage.isAt();

  const expectedTeams = dataTable.hashes();

  for (let i = 0; i < expectedTeams.length; i++) {
    const expected = expectedTeams[i];

    const row = chooseTeamPage.teamRows.nth(i);

    await expect(row.locator('.team-name-text')).toContainText(expected.Name);

    await expect(row.locator('.pts-display')).toContainText(expected.Points, { ignoreCase: true });

    if (expected['Has Avatar'] === 'yes') {
      const avatarImg = await chooseTeamPage.getAvatarFromRow(row);

      await expect(avatarImg).toBeVisible();

      await expect(avatarImg).toHaveJSProperty('complete', true);

      await expect(avatarImg).not.toHaveJSProperty('naturalWidth', 0);
    }

    if (expected['Has Delete Button'] === 'yes') {
      await expect(row.locator('.mini-remove')).toBeVisible();
    }
  }
});

When('I add following teams:', async ({ page }, dataTable: DataTable) => {
  const chooseTeamPage = new ChooseTeamPage(page);
  await chooseTeamPage.isAt();

  const teams = dataTable.hashes();

  for (const team of teams) {
    const teamName = team.Name;
    await chooseTeamPage.typeTeamName(teamName);
    await chooseTeamPage.clickAddTeamButton();
  }
});

When('I should see validation message {string}', async ({ page }, message: string) => {
  const chooseTeamPage = new ChooseTeamPage(page);
  await chooseTeamPage.isAt();
  await expect(chooseTeamPage.inputError).toBeVisible();
  await expect(chooseTeamPage.inputError).toHaveText(message);
});

When('I press Enter key', async ({ page }) => {
  const chooseTeamPage = new ChooseTeamPage(page);
  await chooseTeamPage.isAt();
  await chooseTeamPage.teamNameInput.press('Enter');
});

Then(/"teamName" field should be empty/i, async ({ page }) => {
  const chooseTeamPage = new ChooseTeamPage(page);
  await chooseTeamPage.isAt();
  await expect(chooseTeamPage.teamNameInput).toBeEmpty();
});

When('I double click add button', async ({ page }) => {
  const chooseTeamPage = new ChooseTeamPage(page);
  await chooseTeamPage.isAt();
  await chooseTeamPage.addTeamButton.dblclick();
});

Then('The teams list should contain exactly {int} teams', async ({ page }, count: string) => {
  const chooseTeamPage = new ChooseTeamPage(page);
  await chooseTeamPage.isAt();
  await expect(chooseTeamPage.teamRows).toHaveCount(parseInt(count, 10));
});

When('I click delete button for team {string}', async ({ page }, teamName: string) => {
  const chooseTeamPage = new ChooseTeamPage(page);
  await chooseTeamPage.isAt();
  await chooseTeamPage.clickDeleteButtonForTeam(teamName);
});

Then('Start game button is disabled', async ({ page }) => {
  const chooseTeamPage = new ChooseTeamPage(page);
  await chooseTeamPage.isAt();
  await expect(chooseTeamPage.startGameButton).toBeDisabled();
});

Then('Start game button is enabled', async ({ page }) => {
  const chooseTeamPage = new ChooseTeamPage(page);
  await chooseTeamPage.isAt();
  await expect(chooseTeamPage.startGameButton).toBeEnabled();
});

When('I add {int} random teams', async ({ page }, count: string) => {
  const chooseTeamPage = new ChooseTeamPage(page);
  await chooseTeamPage.isAt();
  const numberOfTeams = parseInt(count, 10);
  for (let i = 0; i < numberOfTeams; i++) {
    let randomTeamName;
    do {
      randomTeamName = `${faker.word.adjective()} ${faker.animal.type()}`;
    } while (randomTeamName.length > 15);
    await chooseTeamPage.typeTeamName(randomTeamName);
    await chooseTeamPage.clickAddTeamButton();
  }
});
