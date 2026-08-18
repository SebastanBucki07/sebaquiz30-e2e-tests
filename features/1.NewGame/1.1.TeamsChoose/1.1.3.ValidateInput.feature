Feature: 1.1.3.Team Input Validation

  Background:
    Given I open the SebaQuiz home page
    When I open New game screen

  Scenario Outline: 1.1.3.1.Validation of minimum character length
    When I type "<TypedName>" in "teamName" field
    Then I should see validation message "Nazwa musi mieć co najmniej 4 znaki!"
    And Add team button is disabled

    Examples:
      | TypedName |
      | A         |
      | AB        |
      | ABC       |

  Scenario: 1.1.3.2.Prevent adding a team with a duplicate name
    And I add following teams:
      | Name      |
      | FirstTeam |
    When I type "FirstTeam" in "teamName" field
    Then I should see validation message "Drużyna o tej nazwie już istnieje!"
    And Add team button is disabled

  Scenario: 1.1.3.3.Prevent adding team names with only whitespaces
    When I type "    " in "teamName" field
    Then Add team button is disabled

  Scenario: 1.1.3.4.Trim leading and trailing spaces from team name
    When I type "  Real Madryt  " in "teamName" field
    And I click add team button
    Then The teams list should contain following teams:
      | Name        | Points |
      | Real Madryt | 0 pkt  |

  Scenario: 1.1.3.5.Validation of maximum character length
    When I type "TaNazwaDruzynyJestZdecydowanieZaDlugaIPrzekraczaTrzydziesciZnakow" in "teamName" field
    Then I should see validation message "Nazwa nie może przekraczać 20 znaków!"
    And Add team button is disabled

  Scenario: 1.1.3.6.Add team with special characters and emojis
    When I type "FC Barcelona ⚽🔥 #1" in "teamName" field
    And I click add team button
    Then The teams list should contain following teams:
      | Name                | Points |
      | FC Barcelona ⚽🔥 #1 | 0 pkt  |