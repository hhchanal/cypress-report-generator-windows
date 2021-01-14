Feature: Using Google

  Scenario: Opening Google
    Given I open Google page
    Then I see "Google" in the title

  Scenario: Google Search
    Given I open Google page
    When I search for "GitHub"
    Then I see "GitHub - Google" in the title