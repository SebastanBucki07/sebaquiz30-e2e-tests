Feature: 1.1.8.Delete middle team from the list

  Background:
    Given I open the SebaQuiz home page
    When I open New game screen

  Scenario: Delete middle team from the list
    And I add following teams:
      | Name    |
      | Team A  |
      | Team B  |
      | Team C  |
    When I click delete button for team "Team B"
    Then The teams list should contain following teams:
      | Name    | Points |
      | Team A  | 0 pkt   |
      | Team C  | 0 pkt   |