Feature: Home Page Verification

  Scenario: Verify main menu buttons are visible
    Given I open the SebaQuiz home page
    Then I should see the "NOWA GRA" button
    And I should see the "ZALOGUJ" button