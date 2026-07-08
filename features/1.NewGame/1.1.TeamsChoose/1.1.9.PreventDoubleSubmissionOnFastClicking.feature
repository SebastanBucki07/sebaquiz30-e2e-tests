#Feature: 1.1.9.Prevent double submission on fast clicking
#
#  Background:
#    Given I open the SebaQuiz home page
#    When I open New game screen
#
#  Scenario: Prevent double submission on fast clicking
#    When I type "Raków" in "teamName" field
#    And I double click add button
#    Then The teams list should contain exactly 1 team