Feature: Login

    Scenario: Clicking the Home link on the homepage shows home page
        Given I visit phptravels
        When I click on Login button
        Then The login page is loaded