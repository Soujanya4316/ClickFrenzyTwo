@runall @deals
Feature: Silver deal on CategoryPage - ClickFrenzy
	As a Customer
	I want to be able to see the ClickFrenzy Category page
	So that I know if all the fileds on Silver deal are present

Background:

    Given I navigate to Click Frenzy Category Page


Scenario: Check all fields on Silver Deal on Desktop on Category Page are visible and clickable

    Then i check if all fields on silver deal are visible
    Then i check if that deal is a silver deal by checking the colour of bottom section
    Then i check if complete silver deal is clickable    
    Then i check if silver deal scales up on hover state



	