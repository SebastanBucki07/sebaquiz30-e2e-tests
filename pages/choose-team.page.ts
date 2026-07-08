import { Page, Locator, expect } from '@playwright/test';

export class ChooseTeamPage {
  readonly page: Page;
  readonly addTeamContent: Locator;
  readonly addTeamButton: Locator;
  readonly teamNameInput: Locator;
  readonly teamsTable: Locator;
  readonly emptyMessage: Locator;
  readonly inputError: Locator;
  readonly teamRows: Locator;
  readonly startGameButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addTeamContent = page.locator('.add-team-content');
    this.addTeamButton = page.locator('.add-btn');
    this.teamNameInput = page.getByTestId('team-input');
    this.teamsTable = page.locator('.cards-list');
    this.emptyMessage = page.locator('.empty-state');
    this.inputError = page.getByTestId('form-input-error');
    this.teamRows = page.locator('[data-testid="team-list"] .team-row-custom');
    this.startGameButton = page.getByTestId('start-game-button');
  }

  async isAt() {
    await expect(this.page).toHaveURL(/\/choose-team/);
    await expect(this.addTeamContent).toBeVisible({ timeout: 5000 });
  }

  async typeTeamName(name: string) {
    await this.teamNameInput.fill(name);
  }

  async clickAddTeamButton() {
    await this.addTeamButton.click();
  }

  async getAvatarFromRow(row: Locator): Promise<Locator> {
    return row.locator('.team-avatar img').or(row.locator('.team-avatar')).first();
  }

  async getInputError(row: Locator): Promise<Locator> {
    return row.locator('.team-avatar img').or(row.locator('.team-avatar')).first();
  }

  async pressEnterInTeamNameInput() {
    await this.teamNameInput.press('Enter');
  }

  async clickDeleteButtonForTeam(teamName: string) {
    const teamRow = this.teamRows.filter({ hasText: teamName });
    await teamRow.locator('.mini-remove').click();
  }
}
