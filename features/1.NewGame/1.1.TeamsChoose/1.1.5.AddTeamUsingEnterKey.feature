Feature: 1.1.5.Add team using Enter key

  Background:
    Given I open the SebaQuiz home page
    When I open New game screen

  Scenario: Add team using Enter key
    When I type "PiastGliwice" in "teamName" field
    And I press Enter key
    Then The teams list should contain following teams:
      | Name         | Points |
      | PiastGliwice | 0 pkt  |
    And "teamName" field should be empty