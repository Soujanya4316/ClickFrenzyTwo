@Nav
Feature: Global Nav
	As a Customer
	I want to be able to see the ClickFrenzy Global Nav
	So that I can navigate through different pages on site

Background:

    Given I navigate to Click Frenzy Home Page


Scenario: Event Count down

    Then I should see Event count down is visible on the page
	And I should see Event count down bar is in purple colour
	And I should see HRS in the first field of count down
	And I should see MIN in the first field of count down
	And I should see SEC in the first field of count down
	And I should see remaining text after the count down

Scenario: Main Menu Items

    Then I should see main menu bar below Event Count down
	And I see Hamburger icon visible on main Menu
	And I see Click Frenzy Logo visible on main Menu bar
	And I see search icon is visible on main Menu bar
	And I see Join link is visible on main Menu bar
	And I see Login link is visible on main Menu bar
	And i see if sub menu opens on clicking Hamburger icon on main menu	
	And i see if sub menu closes on clicking on Hamburger minus on main menu
	And i see if search icon is clickable and redirects to search page when clicked on it
	And i see if Join page opens on clicking on join link from main menu
	And i see if login page opens on clicking on Login link from main menu

Scenario: Sub Menu items

    When i click on Hamburger icon on main Menu
	Then i see sub menu opens up on the page
	And i see if background page is no longer active when sub menu is opened
	And i see if sub menu links are visible on sub menu Bar
	And i see if sub menu icons are visible on sub menu bar
	And i see if sub menu links are clickable

Scenario: Footer

    Then i should see footer is visible on the bottom of the page
    And i see if social icons are visible on footer
	And i see if social links are visible on footer
	And i see if copy right text is visible on footer
	And i see if all the social icons are clickable and opens in a new tab
	And i see if a random footer link is clickable


    



	