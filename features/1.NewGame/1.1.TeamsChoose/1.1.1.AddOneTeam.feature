Feature: 1.1.1.Add One Team

  Scenario: 1.1.1.Add One Team
    Given I open the SebaQuiz home page
    When I open New game screen
    Then Choose Team screen is open
    Then Add team button is disabled
    And Team table is not visible
    When I type "Seba" in "teamName" field
    Then Add team button is enabled
    When I click add team button
    Then The teams list should contain following teams:
      | Name | Points | Has Avatar | Has Delete Button |
      | Seba | 0 PKT  | yes        | yes               |
