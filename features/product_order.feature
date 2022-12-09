Feature: Swaglabs app product order

  Scenario Outline: As a standard user, I can order the product

    Given I am logged in the app
    And I want to add one product into the basket
    And I complete first order step
    When I fill <firstName> and <lastName> and <zipCode> on the second order step
    Then I click on the finnish button on the third order step
    And I will see page title <title>

    Examples:
      | firstName | lastName      | zipCode |  | title               |
      | Vadym     | Nastoiashchyi | 21000   |  | CHECKOUT: COMPLETE! |