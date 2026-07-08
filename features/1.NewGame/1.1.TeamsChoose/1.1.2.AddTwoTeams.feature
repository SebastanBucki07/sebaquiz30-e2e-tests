Feature: 1.1.2.Add Two Teams

  Scenario: 1.1.2.Add Two Teams
    Given I open the SebaQuiz home page
    When I open New game screen
    And I add following teams:
      | Name       |
      | FirstTeam  |
      | SecondTeam |
    Then The teams list should contain following teams:
      | Name       | Points | Has Avatar | Has Delete Button |
      | FirstTeam  | 0 pkt   | yes        | yes               |
      | SecondTeam | 0 pkt   | yes        | yes               |