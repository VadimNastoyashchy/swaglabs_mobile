Feature: Swaglabs app footer component

  Scenario Outline: As a standard user, I can order the product

    Given I am logged in the app
    When I scroll to the app footer
    Then App footer is displayed
    And I will see footer social media links
    And I will see footer corporation information title <title> and subtitle <subtitle>
    Examples:
      | title                                        | subtitle                                 |
      | © 2022 Sauce Labs. All Rights Reserved.      | Terms of Service \| Privacy Policy       |