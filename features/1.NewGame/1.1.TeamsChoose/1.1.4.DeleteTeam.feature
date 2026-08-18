Feature: 1.1.4.Delete team from list

  Background:
    Given I open the SebaQuiz home page
    When I open New game screen
    And I add following teams:
      | Name    |
      | TeamOne |

  Scenario: Delete team from list
    When I click delete button for team "TeamOne"
    Then Team table is not visible
    And Start game button is disabled