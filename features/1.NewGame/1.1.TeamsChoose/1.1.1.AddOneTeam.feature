#Feature: 1.1.1.Add One Team
#
#  Scenario: 1.1.1.Add One Team
#    Given I open the SebaQuiz home page
#    When I open New game screen
#    Then add team button is disabled
#    And Team table is not vissible
#    When I type "teamName" in "teamName" field
#    Then Button with id "AddTeam" is enabled
#    When I click add button
#    Then The teams list should contain following teams:
#      | Name     | Points | Has Avatar | Has Delete Button |
#      | teamName | 0pkt   | yes        | yes               |
