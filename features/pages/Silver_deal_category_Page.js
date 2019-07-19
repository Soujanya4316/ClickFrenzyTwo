const {Selector} = require('testcafe');
const ClientFunction = require('testcafe').ClientFunction;

module.exports = {

    url: `${process.env.TESTCAFE_URL}/categorypage`,
       
    getPageDetails: {
        PageURL: function () {
            return ClientFunction(() => window.location.href).with({ boundTestRun: testController });
        }
    },

    SilverTileComponent: {

        randomSilverDeal: async function() {
            var AllSilverDeals = Selector('.deal-card--type-silver').with({ boundTestRun: testController });
            var SilverDealsCount = await AllSilverDeals.count
            var SilverIndex = Math.floor(Math.random() * SilverDealsCount);    
            var RandomSilver = await AllSilverDeals.nth(SilverIndex);
            console.log({ SilverDealsCount, SilverIndex });
            return RandomSilver;
        },

        specificSilverCompleteTile: function() {
            return Selector('.list-deal:nth-child(1) .deal-card--type-silver .deal-card__wrapper').with({ boundTestRun: testController })
        },

        randomSilverCompleteTile: async function() {
            var allCompleteTiles = Selector('.deal-card--type-silver .deal-card__wrapper').with({ boundTestRun: testController });
            var completeTilesCount = await allCompleteTiles.count
            var completeTileIndex = Math.floor(Math.random() * completeTilesCount);    
            var randomCompleteTile = await allCompleteTiles.nth(completeTileIndex);
            return randomCompleteTile;
        }, 

        randomSilverTopSection: async function() {
            var allTopSections = Selector('.deal-card--type-silver .deal-card__section-images').with({ boundTestRun: testController });
            var allTopSectionsCount = await allTopSections.count
            var randomTopSectionIndex = Math.floor(Math.random() * allTopSectionsCount);    
            var randomTileTopSection = await allTopSections.nth(randomTopSectionIndex);
            return randomTileTopSection;
        },      

        randomSilverBottomSection: async function() {
            var AllSilverbottomSections = Selector('.deal-card--type-silver .deal-card__section-details').with({ boundTestRun: testController });
            var allBottomSectionsCount = await AllSilverbottomSections.count
            var randomBottomSectionIndex = Math.floor(Math.random() * allBottomSectionsCount);    
            var randomBottomSection = await AllSilverbottomSections.nth(randomBottomSectionIndex);
            return randomBottomSection;
        },

        randomSilverLogo: async function() {
            var allSilverDealLogos = Selector('.deal-card--type-silver .deal-card__brand').with({ boundTestRun: testController });
            var allSilverDealLogosCount = await allSilverDealLogos.count
            var randomSilverLogoIndex = Math.floor(Math.random() * allSilverDealLogosCount);    
            var randomSilverLogo = await allSilverDealLogos.nth(randomSilverLogoIndex);
            return randomSilverLogo;
        },

        randomSilverImage: async function() {
            var allSilverDealImages = Selector('.deal-card--type-silver .deal-card__image').with({ boundTestRun: testController });
            var allSilverImagesCount = await allSilverDealImages.count
            var randomSilverImageIndex = Math.floor(Math.random() * allSilverImagesCount);    
            var randomSilverImage = await allSilverDealImages.nth(randomSilverImageIndex);
            return randomSilverImage;
        },

        randomSilverTitle: async function() {
            var allSilverDealTitles = Selector('.deal-card--type-silver .deal-card__title').with({ boundTestRun: testController });
            var allSilverTitlesCount = await allSilverDealTitles.count
            var randomSilverTitleIndex = Math.floor(Math.random() * allSilverTitlesCount);    
            var randomSilverTitle = await allSilverDealTitles.nth(randomSilverTitleIndex);
            return randomSilverTitle;
        },

        randomSilverOffer: async function() {
            var allSilverDealOffers = Selector('.deal-card--type-silver .deal-card__offer:nth-child(1)').with({ boundTestRun: testController });
            var allSilverDealOffersCount = await allSilverDealOffers.count
            var randomSilverDealOfferIndex = Math.floor(Math.random() * allSilverDealOffersCount);    
            var randomSilverDealOffer = await allSilverDealOffers.nth(randomSilverDealOfferIndex);
            return randomSilverDealOffer;
        },

        randomSilverShipping: async function() {
            var allSilverDealShippings = Selector('.deal-card--type-silver .deal-card__optional-1').with({ boundTestRun: testController });
            var allSilverDealShippingsCount = await allSilverDealShippings.count
            var randomSilverDealShippingIndex = Math.floor(Math.random() * allSilverDealShippingsCount);    
            var randomSilverDealShipping = await allSilverDealShippings.nth(randomSilverDealShippingIndex);
            return randomSilverDealShipping;
        },

        randomSilverRedemption: async function() {
            var allSilverDealRedemps = Selector('.deal-card--type-silver .deal-card__optional-2').with({ boundTestRun: testController });
            var allSilverDealRedempsCount = await allSilverDealRedemps.count
            var randomSilverDealRedempIndex = Math.floor(Math.random() * allSilverDealRedempsCount);    
            var randomSilverDealRedemption = await allSilverDealRedemps.nth(randomSilverDealRedempIndex);
            return randomSilverDealRedemption;
        },

        randomSilverCTA: async function() {
            var allSilverDealCTAs = Selector('.deal-card--type-silver .deal-card__CTA').with({ boundTestRun: testController });
            var allSilverDealCTAsCount = await allSilverDealCTAs.count
            var randomSilverDealCTAIndex = Math.floor(Math.random() * allSilverDealCTAsCount);    
            var randomSilverDealCTA = await allSilverDealCTAs.nth(randomSilverDealCTAIndex);
            return randomSilverDealCTA;
        },

        randomSilverBottomColourSection: async function() {
            var allSilverbottomColourSections = Selector('.deal-card--type-silver .deal-card__optional-1').with({ boundTestRun: testController });
            var allSilverbottomColourSectionsCount = await allSilverbottomColourSections.count
            var randomSilverBottomColourIndex = Math.floor(Math.random() * allSilverbottomColourSectionsCount);    
            var randomSilverDealBottomColourSection = await allSilverbottomColourSections.nth(randomSilverBottomColourIndex);
            return randomSilverDealBottomColourSection;
        },

        CompleteSilverTile: function() {
            return Selector('.list-deal:nth-child(1) > .deal-card--type-silver .deal-card__wrapper').with({ boundTestRun: testController })
        }, 
        SilverTileTopSection: function() {
            return Selector('.list-deal:nth-child(1) > .deal-card--type-silver .deal-card__section-images').with({ boundTestRun: testController })
        },      

        SilverTileBottomSection: function() {
            return Selector('.list-deal:nth-child(1) > .deal-card--type-silver .deal-card__section-details').with({ boundTestRun: testController })
        },

        SilverTileLogo: function() {
            return Selector('.list-deal:nth-child(1) > .deal-card--type-silver .deal-card__brand').with({ boundTestRun: testController })
        },

        SilverTileImage: function() {
            return Selector('.list-deal:nth-child(1) > .deal-card--type-silver .deal-card__image').with({ boundTestRun: testController })
        },

        SilverTileTitle: function() {
            return Selector('.list-deal:nth-child(1) > .deal-card--type-silver .deal-card__title').with({ boundTestRun: testController })
        },

        SilverTileOffer: function() {
            return Selector('.list-deal:nth-child(1) > .deal-card--type-silver .deal-card__offer:nth-child(1)').with({ boundTestRun: testController })
        },

        SilverTileShipping: function() {
            return Selector('.list-deal:nth-child(1) > .deal-card--type-silver .deal-card__optional-1').with({ boundTestRun: testController })
        },

        SilverTileRedemption: function() {
            return Selector('.list-deal:nth-child(1) > .deal-card--type-silver .deal-card__optional-2').with({ boundTestRun: testController })
        },

        SilverTileCTA: function() {
            return Selector('.list-deal:nth-child(1) > .deal-card--type-silver .deal-card__CTA').with({ boundTestRun: testController })
        },

        BottomColourSection: function() {
            return Selector('.list-deal:nth-child(1) > .deal-card--type-silver .deal-card__optional-1').with({ boundTestRun: testController })
        }
        
    }  
}

  