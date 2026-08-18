Feature: 1.1.10.Maximum teams limit reached

  Background:
    Given I open the SebaQuiz home page
    When I open New game screen
    And I add 10 random teams

  Scenario: 1.1.10.Maximum teams limit reached
    When I type "Seba" in "teamName" field
    Then I should see validation message "Osiągnięto maksymalną liczbę drużyn (10)!"