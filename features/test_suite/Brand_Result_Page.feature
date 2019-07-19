@runall @brands @brandresult
Feature: Brand Result Page
	As a Customer
	I want to be able to see the ClickFrenzy Brand Result page
	So that I know more about that brands deals and what are all the deals of that brand 

Background:

    Given I navigate to Click Frenzy Brand Result Page


Scenario: Check all details of that Brand are visible on the page

    Then i see if the brand logo is visible
    And i see if the brand Name is visible
    And i see if the brand description is visible
    And i see if All deals by Brand title is visible on the page

Scenario:Check all other details are visible and working as expected on Brand Result Page

    Then i see if the Payment Options title is visible
    And i see if the payment icons are visible under payment options
    And i see if payment target url opens up in new tab when clicked on website    
    Then i see if the Delivery Options title is visible   
    And i see if the delivery icons are visible under delivery options
    And i see if delivery target url opens up in new tab when clicked on website
    Then i see if Rewards and Cashback title is visible on page
    And i see if target url under Rewards opens up in new tab when clicked on website  
    Then i see if the Refund and Returns Policy title is visible on the page  
    And i see the 2 line text below Refund and Returns title with a read more text at the end  
    Then i see if the Deal Terms and Condition title is visible on the page
    And i see the 2 line text below Deal Terms and Condition title with a read more text at the end
    And i see if the text is limiting to 2 line by checking the height of that text
    Then i take total Refer To Our websites count and see if the random one amongst them is visible
    

Scenario:Check read more Modal on Brand Result Page

    When i click on read more link
    Then i see modal component opens up on page
    And i see brand logo is visible on Modal
    And i see brand name is visible on Modal
    And i see brand description is visible on Modal
    And i see close icon is visible on Modal
    And i see all the sub links on modal are clickable by clicking on couple of random links
    And i see if the all the links om Modal are opening in new tab by checking if the target property is set to blank
    And i see the brand result page is faded out and not active when modal is open
    And i see if content inside modal is scrollable and also the scroll bar is not visible when there is enough space to fit all the content
    And i see if clicking on close icon closes modal and takes us back to brand result page


Scenario:Check deals on Brand Result Page

    Then i see if All deals by Brand title is visible on the page   
    Then i see gold deals are visible on Brand Result page
    Then i see silver deals are visible on Brand Result Page
    Then i see if all fields on gold deal are visible and clickable on Brand Result Page
    Then i see if all fields on silver deal are visible and clickable on Brand Result Page
    Then i check if that deal on Brand Result Page is a gold deal by checking the colour of bottom section
    Then i check if that deal on Brand Result Page is a silver deal by checking the colour of bottom section 
    Then i check if gold deal scales up on hover state on Brand Result Page
    Then i check if silver deal scales up on hover state on Brand Result Page
    Then i see if silver deals take the same row as of gold deals and appear only after gold deals are finished


    
  

    
    














     
     