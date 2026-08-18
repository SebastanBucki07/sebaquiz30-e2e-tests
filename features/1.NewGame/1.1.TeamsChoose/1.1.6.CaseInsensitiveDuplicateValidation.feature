Feature: 1.1.6.Case insensitive duplicate validation

  Background:
    Given I open the SebaQuiz home page
    When I open New game screen

  Scenario: Case insensitive duplicate validation
    And I add following teams:
      | Name  |
      | Legia |
    And I type "LEGIA" in "teamName" field
    Then I should see validation message "Drużyna o tej nazwie już istnieje!"