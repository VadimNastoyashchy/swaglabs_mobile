Feature: Swaglabs app product filter

  Scenario Outline: As a standard user, I can filter the product

    Given I am logged in the app
    When I chose NAME(Z-A) in filter options
    Then products should be sorted From Z to A