Feature: 1.1.7.Input field resets after adding a team

  Background:
    Given I open the SebaQuiz home page
    When I open New game screen

  Scenario: Input field resets after adding a team
    When I type "Lech Poznań" in "teamName" field
    And I click add team button
    Then "teamName" field should be empty
    And Add team button is disabled