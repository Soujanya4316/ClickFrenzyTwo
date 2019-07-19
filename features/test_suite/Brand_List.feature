@runall @brands @brandlist
Feature: Brand List Page
	As a Customer
	I want to be able to see the ClickFrenzy Brand list page
	So that I know what are all the brands associated with ClickFrenzy

Background:

    Given I navigate to Click Frenzy Brand List Page

Scenario:Check all brands are visible

    Then i should see page title at the top of the page
    Then all brands should be visible on the page
    Then all brands should be visible with a brand logo
    Then all brands should be visible with a brand name    
    Then all brands should be clickable when clicked on complete Brand item, Logo and Name
    Then brand entire row should scale up on hover state


Scenario:Verify Alphabet listing works as expected

    Then i should see brand navigation list below the Global Nav
    Then i should be able to see alphabet section titles for all brand groups    
    Then i click on specific alphabet to see the page anchors to that section
    Then i see alphabet is disabled on Nav if there are no brands in that group and also that group does not exist on page       

@goToTop 
Scenario: Verify Go To top CTA

    Then Then i first make sure CTA is not active on initial load
    Then i see CTA Go To Top gets enabled on page scroll
    Then i click on Go To Top CTA to see the page scrolls to top of the page
    Then i make sure CTA is not active on the page after few seconds
     
     