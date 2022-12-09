Feature: Swaglabs app Log In

  Scenario Outline: As a standard user, I can log into Swaglabs application

    Given I am on the login page
    When I login with <username> and <password>
    Then I redirected to the inventory page with title <title>

    Examples:
      | username      | password     | title    |
      | standard_user | secret_sauce | PRODUCTS |