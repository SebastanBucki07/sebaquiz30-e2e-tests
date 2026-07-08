#Feature: 1.1.4.Delete team from list and check limits
#
#  Background:
#    Given I open the SebaQuiz home page
#    When I open New game screen
#
#  Scenario: Delete team from list and check limits
#    And I add following teams:
#      | Name    |
#      | TeamOne |
#    When I click delete button for team "TeamOne"
#    Then Team table is not vissible
#    And start game button is disabled
#
#  Scenario: Start game button requirements
#    When I add following teams:
#      | Name    |
#      | TeamOne |
#    Then start game button is disabled
#    When I add following teams:
#      | Name    |
#      | TeamTwo |
#    Then start game button is enabled
#
#  Scenario: Maximum teams limit reached
#    When I add 10 teams
#    Then add team button is disabled
#    And I should see info message "Osiągnięto maksymalną liczbę drużyn (10)!"