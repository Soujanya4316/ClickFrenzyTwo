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

    GoldTileComponent: {

        CompleteTile: function() {
            return Selector(' .col-md-3:nth-child(1) .deal-card__wrapper').with({ boundTestRun: testController })
        }, 
        TileTopSection: function() {
            return Selector('.col-md-3:nth-child(1) .deal-card__section-images').with({ boundTestRun: testController })
        },      

        TileBottomSection: function() {
            return Selector('.col-md-3:nth-child(1) .deal-card__section-details').with({ boundTestRun: testController })
        },

        Logo: function() {
            return Selector('.col-md-3:nth-child(1) .deal-card__brand').with({ boundTestRun: testController })
        },

        Image: function() {
            return Selector('.col-md-3:nth-child(1) .deal-card__image').with({ boundTestRun: testController })
        },

        Title: function() {
            return Selector('.col-md-3:nth-child(1) .deal-card__title').with({ boundTestRun: testController })
        },

        Offer: function() {
            return Selector('.col-md-3:nth-child(1) .deal-card__offer:nth-child(1)').with({ boundTestRun: testController })
        },

        Shipping: function() {
            return Selector('.col-md-3:nth-child(1) .deal-card__optional-1').with({ boundTestRun: testController })
        },

        Redemption: function() {
            return Selector('.col-md-3:nth-child(1) .deal-card__optional-2').with({ boundTestRun: testController })
        },

        CTA: function() {
            return Selector('.col-md-3:nth-child(1) .deal-card__CTA').with({ boundTestRun: testController })
        },

        BottomColourSection: function() {
            return Selector('.col-md-3:nth-child(2) .deal-card__optional-1').with({ boundTestRun: testController })
        }

        
    },    
}
