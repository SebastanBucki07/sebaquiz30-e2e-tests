Feature: 1.1.4.Delete team from list and check limits

  Background:
    Given I open the SebaQuiz home page
    When I open New game screen
    And I add following teams:
      | Name    |
      | TeamOne |

  Scenario: Delete team from list and check limits
    When I click delete button for team "TeamOne"
    Then Team table is not visible
    And Start game button is disabled

  Scenario: Start game button requirements
    When I add following teams:
      | Name    |
      | TeamOne |
    Then Start game button is disabled
    When I add following teams:
      | Name    |
      | TeamTwo |
    Then Start game button is enabled

  Scenario: Maximum teams limit reached
    When I add 10 random teams
    Then Add team button is disabled
    When I type "Seba" in "teamName" field
    Then Add team button is enabled
    When I click add team button
    Then I should see validation message "Osiągnięto maksymalną liczbę drużyn (10)!"