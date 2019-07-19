const {Selector} = require('testcafe');
const ClientFunction = require('testcafe').ClientFunction;

module.exports = {

    url: process.env.TESTCAFE_URL,
       
    getPageDetails: {
        PageURL: function () {
            return ClientFunction(() => window.location.href).with({ boundTestRun: testController });
        }
    },

    GoldTileComponent: {

        randomGoldDeal: async function() {
            var AllGoldDeals = Selector('.deal-card--type-gold').with({ boundTestRun: testController });
            var GoldDealsCount = await AllGoldDeals.count
            var GoldIndex = Math.floor(Math.random() * GoldDealsCount);    
            var RandomGold = await AllGoldDeals.nth(GoldIndex);
            console.log({ GoldDealsCount, GoldIndex });
            return RandomGold;
        },

        specificGoldCompleteTile: function() {
            return Selector('.container:nth-child(4) .deal-slider__slide:nth-child(1) .deal-card__wrapper').with({ boundTestRun: testController })
        },

        randomGoldCompleteTile: async function() {
            var allCompleteTiles = Selector('.deal-card--type-gold .deal-card__wrapper').with({ boundTestRun: testController });
            var completeTilesCount = await allCompleteTiles.count
            var completeTileIndex = Math.floor(Math.random() * completeTilesCount);    
            var randomCompleteTile = await allCompleteTiles.nth(completeTileIndex);
            return randomCompleteTile;
        }, 

        randomGoldTopSection: async function() {
            var allTopSections = Selector('.deal-card--type-gold .deal-card__section-images').with({ boundTestRun: testController });
            var allTopSectionsCount = await allTopSections.count
            var randomTopSectionIndex = Math.floor(Math.random() * allTopSectionsCount);    
            var randomTileTopSection = await allTopSections.nth(randomTopSectionIndex);
            return randomTileTopSection;
        },      

        randomGoldBottomSection: async function() {
            var AllGoldbottomSections = Selector('.deal-card--type-gold .deal-card__section-details').with({ boundTestRun: testController });
            var allBottomSectionsCount = await AllGoldbottomSections.count
            var randomBottomSectionIndex = Math.floor(Math.random() * allBottomSectionsCount);    
            var randomBottomSection = await AllGoldbottomSections.nth(randomBottomSectionIndex);
            return randomBottomSection;
        },

        randomGoldLogo: async function() {
            var allGoldDealLogos = Selector('.deal-card--type-gold .deal-card__brand').with({ boundTestRun: testController });
            var allGoldDealLogosCount = await allGoldDealLogos.count
            var randomGoldLogoIndex = Math.floor(Math.random() * allGoldDealLogosCount);    
            var randomGoldLogo = await allGoldDealLogos.nth(randomGoldLogoIndex);
            return randomGoldLogo;
        },

        randomGoldImage: async function() {
            var allGoldDealImages = Selector('.deal-card--type-gold .deal-card__image').with({ boundTestRun: testController });
            var allGoldImagesCount = await allGoldDealImages.count
            var randomGoldImageIndex = Math.floor(Math.random() * allGoldImagesCount);    
            var randomGoldImage = await allGoldDealImages.nth(randomGoldImageIndex);
            return randomGoldImage;
        },

        randomGoldTitle: async function() {
            var allGoldDealTitles = Selector('.deal-card--type-gold .deal-card__title').with({ boundTestRun: testController });
            var allGoldTitlesCount = await allGoldDealTitles.count
            var randomGoldTitleIndex = Math.floor(Math.random() * allGoldTitlesCount);    
            var randomGoldTitle = await allGoldDealTitles.nth(randomGoldTitleIndex);
            return randomGoldTitle;
        },

        randomGoldOffer: async function() {
            var allGoldDealOffers = Selector('.deal-card--type-gold .deal-card__offer:nth-child(1)').with({ boundTestRun: testController });
            var allGoldDealOffersCount = await allGoldDealOffers.count
            var randomGoldDealOfferIndex = Math.floor(Math.random() * allGoldDealOffersCount);    
            var randomGoldDealOffer = await allGoldDealOffers.nth(randomGoldDealOfferIndex);
            return randomGoldDealOffer;
        },

        randomGoldShipping: async function() {
            var allGoldDealShippings = Selector('.deal-card--type-gold .deal-card__optional-1').with({ boundTestRun: testController });
            var allGoldDealShippingsCount = await allGoldDealShippings.count
            var randomGoldDealShippingIndex = Math.floor(Math.random() * allGoldDealShippingsCount);    
            var randomGoldDealShipping = await allGoldDealShippings.nth(randomGoldDealShippingIndex);
            return randomGoldDealShipping;
        },

        randomGoldRedemption: async function() {
            var allGoldDealRedemps = Selector('.deal-card--type-gold .deal-card__optional-2').with({ boundTestRun: testController });
            var allGoldDealRedempsCount = await allGoldDealRedemps.count
            var randomGoldDealRedempIndex = Math.floor(Math.random() * allGoldDealRedempsCount);    
            var randomGoldDealRedemption = await allGoldDealRedemps.nth(randomGoldDealRedempIndex);
            return randomGoldDealRedemption;
        },

        randomGoldCTA: async function() {
            var allGoldDealCTAs = Selector('.deal-card--type-gold .deal-card__CTA').with({ boundTestRun: testController });
            var allGoldDealCTAsCount = await allGoldDealCTAs.count
            var randomGoldDealCTAIndex = Math.floor(Math.random() * allGoldDealCTAsCount);    
            var randomGoldDealCTA = await allGoldDealCTAs.nth(randomGoldDealCTAIndex);
            return randomGoldDealCTA;
        },

        randomGoldBottomColourSection: async function() {
            var allGoldbottomColourSections = Selector('.deal-card--type-gold .deal-card__optional-1').with({ boundTestRun: testController });
            var allGoldbottomColourSectionsCount = await allGoldbottomColourSections.count
            var randomGoldBottomColourIndex = Math.floor(Math.random() * allGoldbottomColourSectionsCount);    
            var randomGoldDealBottomColourSection = await allGoldbottomColourSections.nth(randomGoldBottomColourIndex);
            return randomGoldDealBottomColourSection;
        },

        CompleteTile: function() {
            return Selector(' .deal-slider__slide:nth-child(1) .deal-card__wrapper').with({ boundTestRun: testController })
        }, 
        TileTopSection: function() {
            return Selector('.deal-slider__slide:nth-child(1) .deal-card__section-images').with({ boundTestRun: testController })
        },      

        TileBottomSection: function() {
            return Selector('.deal-slider__slide:nth-child(1) .deal-card__section-details').with({ boundTestRun: testController })
        },

        Logo: function() {
            return Selector('.deal-slider__slide:nth-child(1) .deal-card__brand').with({ boundTestRun: testController })
        },

        Image: function() {
            return Selector('.deal-slider__slide:nth-child(1) .deal-card__image').with({ boundTestRun: testController })
        },

        Title: function() {
            return Selector('.deal-slider__slide:nth-child(1) .deal-card__title').with({ boundTestRun: testController })
        },

        Offer: function() {
            return Selector('.deal-slider__slide:nth-child(1) .deal-card__offer:nth-child(1)').with({ boundTestRun: testController })
        },

        Shipping: function() {
            return Selector('.deal-slider__slide:nth-child(1) .deal-card__optional-1').with({ boundTestRun: testController })
        },

        Redemption: function() {
            return Selector('.deal-slider__slide:nth-child(1) .deal-card__optional-2').with({ boundTestRun: testController })
        },

        CTA: function() {
            return Selector('.deal-slider__slide:nth-child(1) .deal-card__CTA').with({ boundTestRun: testController })
        },

        BottomColourSection: function() {
            return Selector('.deal-slider__slide:nth-child(2) .deal-card__optional-1').with({ boundTestRun: testController })
        }
    },    
}
