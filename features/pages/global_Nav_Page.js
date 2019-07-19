const {Selector} = require('testcafe');
const ClientFunction = require('testcafe').ClientFunction;
const Config = require('../../support/config.js');

module.exports = {

    url: 'https://qa.d1spk673gr9g3c.amplifyapp.com/',
       
    getPageDetails: {
        PageURL: function () {
            return ClientFunction(() => window.location.href).with({ boundTestRun: testController });
        }
    },

    eventCountDown: {
        countDownBar: function() {
            return Selector('.header-timer').with({ boundTestRun: testController })
        }, 
        hrsFieldString: async function() {
            var hrsSelector = await Selector('.header-timer__time:nth-child(1)').with({ boundTestRun: testController })
            var hrsFieldText = await hrsSelector.innerText
            var hrsfinaltxt = hrsFieldText.split(" ")
            console.log("Full HRS field text is " + hrsfinaltxt)
            console.log("String in second position is: " + hrsfinaltxt[1])
            return hrsfinaltxt[1]
        },
        minFieldString: async function() {
            var minSelector = await Selector('.header-timer__time:nth-child(2)').with({ boundTestRun: testController })
            var minFieldText = await minSelector.innerText
            var minfinaltxt = minFieldText.split(" ")
            console.log("Full MIN field text is " + minfinaltxt)
            console.log("String in second position is: " + minfinaltxt[1])
            return minfinaltxt[1]
        }, 
        secFieldString: async function() {
            var secondsSelector = await Selector('.header-timer__time:nth-child(3)').with({ boundTestRun: testController })
            var secondFieldText = await secondsSelector.innerText
            var secondFieldfinaltxt = secondFieldText.split(" ")
            console.log("Full Seconds field text is " + secondFieldfinaltxt)
            console.log("String in second position is: " + secondFieldfinaltxt[1])
            return secondFieldfinaltxt[1]
        }, 
        remainingText: function() {
            return Selector('.header-timer__description--desktop').with({ boundTestRun: testController })
        },
        remainingFieldString: async function() {
            var remainingSelector = await Selector('.header-timer__description--desktop').with({ boundTestRun: testController })
            var remainingFieldText = await remainingSelector.innerText
            console.log("Full Remaining field text is " + remainingFieldText)
            return remainingFieldText
        }, 
    },

    mainMenu: {
        mainMenuBar: function() {
            return Selector('.nav-bar__body').with({ boundTestRun: testController })
        },        
        clickFrenzyLogo: function() {
            return Selector('.nav-bar__logo svg').with({ boundTestRun: testController })
        },
        hamBurger: function() {
            return Selector('.hamburger--minus > .hamburger-box').with({ boundTestRun: testController })
        }, 
        hamBurgerMinus: function() {
            return Selector('.hamburger--minus > .hamburger-box').with({ boundTestRun: testController })
        },         
        searchIcon: function() {
            return Selector('.nav-bar__link svg').with({ boundTestRun: testController })
        }, 
        joinLink: function() {
            return Selector('.nav-bar__link-join').with({ boundTestRun: testController })
        },
        loginLink: function() {
            return Selector('.nav-bar__link-login').with({ boundTestRun: testController })
        },
        subNavBar: function() {
            return Selector('.sub-nav').with({ boundTestRun: testController })
        },
        searchModal: function() {
            return Selector('.ReactModal__Body--open').with({ boundTestRun: testController })
        }    
        
    },
    
    subMenu: {
        pageBody: function() {
            return Selector('body').with({ boundTestRun: testController })
        },         
        randomSubMenuLink: async function() {
            var allSubMenuLinks = Selector('.sub-nav__text').with({ boundTestRun: testController });
            var allSubMenuLinksCount = await allSubMenuLinks.count
            var randomSubMenuIndex = Math.floor(Math.random() * allSubMenuLinksCount);    
            var randomSubMenu = await allSubMenuLinks.nth(randomSubMenuIndex);
            return randomSubMenu;
        },
        specificSubMenuLink: function() {
            return Selector('.sub-nav__item:nth-child(1) .sub-nav__text').with({ boundTestRun: testController })
        },
        anchorLink: function() {
            return Selector('.sub-nav__item:nth-child(1) .sub-nav__link').with({ boundTestRun: testController })
        },
        anchorLinkHoverAfter: function() {
            return Selector('.sub-nav__link:hover:after').with({ boundTestRun: testController })
        },
        anchorLinkHover: function() {
            return Selector('.sub-nav__item:nth-child(1) .sub-nav__link:hover').with({ boundTestRun: testController })
        },  
        anchorLinkAfter: function() {
            return Selector('.sub-nav__item:nth-child(1) .sub-nav__link::after').with({ boundTestRun: testController })
        },
        subLinkText: function() {
            return Selector('.sub-nav__item:nth-child(1) .sub-nav__text').with({ boundTestRun: testController })
        },
        test: function() {
            return Selector('.sub-nav__item:nth-child(1) .sub-nav__link .sub-nav__text').with({ boundTestRun: testController })
        },       
        
        testtwo: function() {
            return Selector('.sub-nav__item:nth-child(1) .sub-nav__link > span').with({ boundTestRun: testController })
        },
        new: function() {
            return Selector('.sub-nav__item:nth-child(1) .no-touchevents .sub-nav__link:hover:after').with({ boundTestRun: testController })
        },               
        randomSubLinkIcon: async function() {
            var allSubMenuIcons = Selector('.sub-nav__icon').with({ boundTestRun: testController });
            var allSubMenuIconsCount = await allSubMenuIcons.count
            var randonSubmenuIconIndex = Math.floor(Math.random() * allSubMenuIconsCount);    
            var randomSubMenuIcon = await allSubMenuIcons.nth(randonSubmenuIconIndex);
            return randomSubMenuIcon;
        },
        
    },

    footerItems: {
        footerSection: function() {
            return Selector('.footer__link-section').with({ boundTestRun: testController })
        },
        socialIconLink: function() {
            return Selector('.footer__social-link').with({ boundTestRun: testController })
        },
        facebookIcon: function() {
            return Selector('.footer__social-icon:nth-child(1)').with({ boundTestRun: testController })
        },
        instagramIcon: function() {
            return Selector('.footer__social-icon:nth-child(2)').with({ boundTestRun: testController })
        }, 
        twitterIcon: function() {
            return Selector('.footer__social-icon:nth-child(3)').with({ boundTestRun: testController })
        }, 

        copyRightBar: function() {
            return Selector('.footer__copyright').with({ boundTestRun: testController })
        },

        randomFooterLink: async function() {
            var allFooterLinkItems = Selector('.footer__link').with({ boundTestRun: testController });
            var allFooterLinksCount = await allFooterLinkItems.count
            var randomFooterLinkIndex = Math.floor(Math.random() * allFooterLinksCount);    
            var randomFooterLinkItem = await allFooterLinkItems.nth(randomFooterLinkIndex);
            return randomFooterLinkItem;
        },

    }
    
}


