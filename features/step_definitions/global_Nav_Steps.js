const {Given, When, Then} = require('cucumber');
const { Selector } = require('testcafe');

const  globalNav= require('../pages/global_Nav_Page.js')                         

Then('I should see Event count down is visible on the page', async function () {
  await testController  
  .expect(globalNav.eventCountDown.countDownBar().visible).ok()
});

Then('I should see Event count down bar is in purple colour', async function () {
  await testController
  .expect((globalNav.eventCountDown.countDownBar()).getStyleProperty('color')).eql('rgb(255, 255, 255)')
});

Then('I should see HRS in the first field of count down', async function () {
    await testController
    .expect((await globalNav.eventCountDown.hrsFieldString())).eql('HRS')
});

Then('I should see MIN in the first field of count down', async function () {
  await testController
  .expect((await globalNav.eventCountDown.minFieldString())).eql('MIN')
});

Then('I should see SEC in the first field of count down', async function () {
  await testController
  .expect((await globalNav.eventCountDown.secFieldString())).eql('SEC')
});

Then('I should see remaining text after the count down', async function () {
  await testController
  .expect((await globalNav.eventCountDown.remainingFieldString())).contains('REMAINING')
});

Then('I see count down is happening on Count down bar', async function () {
  await testController
  .expect((await globalNav.eventCountDown.coundDownTimer())).visible.ok()
});

Then('I should see main menu bar below Event Count down', async function () {
  await testController  
  .expect(globalNav.mainMenu.mainMenuBar().visible).ok()
});

Then('I see Hamburger icon visible on main Menu', async function () {
  await testController  
  .expect(globalNav.mainMenu.hamBurger().visible).ok()
});

Then('I see Click Frenzy Logo visible on main Menu bar', async function () {
  await testController  
  .expect(globalNav.mainMenu.clickFrenzyLogo().visible).ok()
});

Then('I see search icon is visible on main Menu bar', async function () {
  await testController  
  .expect(globalNav.mainMenu.searchIcon().visible).ok()
});

Then('I see Join link is visible on main Menu bar', async function () {
  await testController  
  .expect(globalNav.mainMenu.joinLink().visible).ok()
});

Then('I see Login link is visible on main Menu bar', async function () {
  await testController  
  .expect(globalNav.mainMenu.loginLink().visible).ok()
});

Then('i see if sub menu opens on clicking Hamburger icon on main menu', async function () {
  await testController
  .click(globalNav.mainMenu.hamBurger())
  .expect((globalNav.mainMenu.subNavBar()).getAttribute('class')).contains('sub-nav--is-active')
});

Then('i see if sub menu closes on clicking on Hamburger minus on main menu', async function () {
  await testController  
  .click(globalNav.mainMenu.hamBurgerMinus())
  .expect((globalNav.mainMenu.subNavBar()).getAttribute('class')).eql('sub-nav')
});

Then('i see if search icon is clickable and redirects to search page when clicked on it', async function () {
  await testController  
  .click(globalNav.mainMenu.searchIcon())
  .navigateTo(process.env.TESTCAFE_URL)  
});

Then('i see if Join page opens on clicking on join link from main menu', async function () {
  await testController   
  .click(globalNav.mainMenu.joinLink())
  .navigateTo(process.env.TESTCAFE_URL)  
});

Then('i see if login page opens on clicking on Login link from main menu', async function () {
  await testController   
  .click(globalNav.mainMenu.loginLink())
  .navigateTo(process.env.TESTCAFE_URL)  
});

When('i click on Hamburger icon on main Menu', async function () {
  await testController   
  .click(globalNav.mainMenu.hamBurger())
});

Then('i see sub menu opens up on the page', async function () {
  await testController
  .expect((globalNav.mainMenu.subNavBar()).getAttribute('class')).contains('sub-nav--is-active') 
});

Then('i see if background page is no longer active when sub menu is opened', async function () {
  await testController   
  .expect((globalNav.subMenu.pageBody()).getStyleProperty('overflow-y')).eql('hidden') 
});

Then('i see if sub menu links are visible on sub menu Bar', async function () {
  await testController 
  .expect((await globalNav.subMenu.randomSubMenuLink()).visible).ok()
});

Then('i see if sub menu icons are visible on sub menu bar', async function () {
  await testController  
  .expect((await globalNav.subMenu.randomSubLinkIcon()).visible).ok()
});

Then('i see if there is a under line on hover on sub menu links', async function () {
  await testController  
  .hover(globalNav.subMenu.anchorLink())
  .expect((globalNav.subMenu.anchorLinkHoverAfter()).getStyleProperty('visibility')).eql('visible')
});

Then('i see if sub menu links are clickable', async function () {
  await testController  
  .click(await globalNav.subMenu.randomSubMenuLink())
  .navigateTo(process.env.TESTCAFE_URL)
  .click(globalNav.mainMenu.hamBurger())
  .click(await globalNav.subMenu.randomSubMenuLink())
});

Then('i should see footer is visible on the bottom of the page', async function () {
  await testController  
  .expect((await globalNav.footerItems.footerSection()).visible).ok()
});

Then('i see if social icons are visible on footer', async function () {
  await testController  
  .expect((globalNav.footerItems.facebookIcon()).visible).ok()
  .expect((globalNav.footerItems.twitterIcon()).visible).ok()
  .expect((globalNav.footerItems.instagramIcon()).visible).ok()
});

Then('i see if social links are visible on footer', async function () {
  await testController  
  .expect((await globalNav.footerItems.randomFooterLink()).visible).ok()
});

Then('i see if copy right text is visible on footer', async function () {
  await testController  
  .expect((await globalNav.footerItems.copyRightBar()).innerText).contains('Click Frenzy Pty Ltd')
});

Then('i see if all the social icons are clickable and opens in a new tab', async function () {
  await testController  
  .expect(globalNav.footerItems.socialIconLink().getAttribute('target')).eql('_blank')
  .click(globalNav.footerItems.facebookIcon())
  .wait(5000)
  .navigateTo(process.env.TESTCAFE_URL) 
  .click(globalNav.footerItems.twitterIcon())
  .navigateTo(process.env.TESTCAFE_URL) 
  .click(globalNav.footerItems.instagramIcon())
  .navigateTo(process.env.TESTCAFE_URL)
});

Then('i see if a random footer link is clickable', async function () {
  await testController  
  .click(await globalNav.footerItems.randomFooterLink())
  .navigateTo(process.env.TESTCAFE_URL)
  .click(await globalNav.footerItems.randomFooterLink())
  .navigateTo(process.env.TESTCAFE_URL)
});