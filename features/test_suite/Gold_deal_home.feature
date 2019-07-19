@runall @deals 
Feature: Gold Deal - Home Page
	As a Customer
	I want to be able to see the ClickFrenzy Home Page
	So that I know what all components we have on home page

Background:

    Given I navigate to the home page of Click Frenzy


Scenario:Check all fields on Gold deal are visible and clickable

    Then i check if all fields on gold deal are visible
    Then i check if that deal is a gold deal by checking the colour of bottom section
    Then i check if complete gold deal is clickable    
    Then i check if gold deal scales up on hover state



	