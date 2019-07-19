const {Selector} = require('testcafe');
const ClientFunction = require('testcafe').ClientFunction;

module.exports = {

    url: `${process.env.TESTCAFE_URL}/brands/btt`,
       
    getPageDetails: {
        PageURL: function () {
            return ClientFunction(() => window.location.href).with({ boundTestRun: testController });
        }
    },

    BrandDetails: {
        brandResultPageBody: function() {
            return Selector('#root').with({ boundTestRun: testController })
        },
        BrandLogo: function() {
            return Selector('.brand-detail-basic__logo-image').with({ boundTestRun: testController })
        },

        BrandName: function() {
            return Selector('.brand-detail-basic__name').with({ boundTestRun: testController })
        }, 

        BrandDescription: function() {
            return Selector('.brand-detail-basic__description').with({ boundTestRun: testController })
        }        

    },

    Otherdetails: {

        PaymentTitle: function() {
            return Selector('.brand-detail-additional__payment > .brand-detail-additional-option__title').with({ boundTestRun: testController })
        },

        DeliveryOptionsTitle: function() {
            return Selector('.brand-detail-additional__delivery > .brand-detail-additional-option__title').with({ boundTestRun: testController })
        }, 

        RewardsTitle: function() {
            return Selector('.brand-detail-additional__rewardscashback > .brand-detail-additional-option__title').with({ boundTestRun: testController })
        }, 

        RefundTitle: function() {
            return Selector('.brand-detail-additional__refundreturnpolicy > .brand-detail-additional-summary__title').with({ boundTestRun: testController })
        },
        TandCTitle: function() {
            return Selector('.brand-detail-additional__termsconditions > .brand-detail-additional-summary__title').with({ boundTestRun: testController })
        },
    
        PaymentIcons: async function() {        
            var paymenticons =  Selector('.brand-detail-additional__payment .brand-detail-additional-option__option-image').with({ boundTestRun: testController })
            var paymenticonscount = await paymenticons.count
            var paymenticonindex = Math.floor(Math.random() * paymenticonscount);
            var Randompaymenticon = await paymenticons.nth(paymenticonindex);
            console.log({ paymenticonscount, paymenticonindex });
            return Randompaymenticon;                  
        },

        DeliveryIcons: async function() {
        
            var deliveryicons = Selector('.brand-detail-additional__delivery .brand-detail-additional-option__option-image').with({ boundTestRun: testController });
            var DeliveryIconsCount = await deliveryicons.count
            var DeliveryIconIndex = Math.floor(Math.random() * DeliveryIconsCount);

            var RandomDeliveryIcon = await deliveryicons.nth(DeliveryIconIndex);
            console.log({ DeliveryIconsCount, DeliveryIconIndex });
            return RandomDeliveryIcon;

        },

        paymentlink: function() {
            return Selector('.brand-detail-additional__payment .brand-detail-additional-option__link').with({ boundTestRun: testController })
        },  
    
        deliverylink: function() {
            return Selector('.brand-detail-additional__delivery .brand-detail-additional-option__link').with({ boundTestRun: testController })
        }, 

        Rewardslink: function() {
            return Selector('.brand-detail-additional-option__link-wrapper:nth-child(2) > .brand-detail-additional-option__link').with({ boundTestRun: testController })
        },

        RefundTwoLineText: function() {
            return Selector('.brand-detail-additional__refundreturnpolicy > .brand-detail-additional-summary__summary').with({ boundTestRun: testController })
        },

        TandCTwoLineText: function() {
            return Selector('.brand-detail-additional__termsconditions > .brand-detail-additional-summary__summary').with({ boundTestRun: testController })
        },

        RefundReadMore: function() {
            return Selector('.brand-detail-additional__refundreturnpolicy .brand-detail-additional-summary__link').with({ boundTestRun: testController })
        },

        TermsReadMorelink: function() {
            return Selector('.brand-detail-additional__termsconditions .brand-detail-additional-summary__link').with({ boundTestRun: testController })
        },

        ReferToOurWebsiteText: async function() {

            var ReferTextSelector = Selector('.brand-detail-additional-option__link-wrapper').with({ boundTestRun: testController });
                var ReferTextCount = await ReferTextSelector.count
                var ReferTextIndex = Math.floor(Math.random() * ReferTextCount);
                var TotalReferTexts = await ReferTextSelector.nth(ReferTextIndex);
                console.log({ ReferTextCount, ReferTextIndex });
                return TotalReferTexts;
        }    

    },

    Modal: {

        modalBody: function() {
            return Selector('.ReactModal__Body--open').with({ boundTestRun: testController })
        }, 

        ModalComponent: function() {
            return Selector('.ReactModal__Content').with({ boundTestRun: testController })
        },

        modalScrollableContent: function() {
            return Selector('.modal-body__content').with({ boundTestRun: testController })
        },   

        brandLogoOnModal: function() {
            return Selector('.image-and-title__image').with({ boundTestRun: testController })
        },
        brandNameOnModal: function() {
            return Selector('.image-and-title__title').with({ boundTestRun: testController })
        },
        closeIconOnModal: function() {
            return Selector('span > .isvg > svg').with({ boundTestRun: testController })
        },
        summaryTitleOnOnModal: function() {
            return Selector('.brand-detail-additional-summary__modal-title').with({ boundTestRun: testController })
        },
        brandDescriptionOnModal: function() {
            return Selector('.modal-body__content').with({ boundTestRun: testController })
        },
        specificModalSubLink: function() {
            return Selector('li:nth-child(2) > .toc-filter-processed').with({ boundTestRun: testController })
        },
        specificModalMainLink: function() {
            return Selector('p:nth-child(3) > a').with({ boundTestRun: testController })
        },
        randomSubLinkOnModal: async function() {
            var allSubLinks = Selector('.toc-filter-processed').with({ boundTestRun: testController });
            var subLinksCount = await allSubLinks.count
            var subLinksIndex = Math.floor(Math.random() * subLinksCount);
            var randomSubLink = await allSubLinks.nth(subLinksIndex);
            console.log('All sub links on modal are' + subLinksCount, 'Sub Link index clicked is' +  subLinksIndex);
            return randomSubLink;
        }   

        
    },

    dealDetails: {

        AlldealsByBrandTitle: function() {
            return Selector('.brand-deals__title').with({ boundTestRun: testController })
        },      

        randomGoldDeal: async function() {
            var AllGoldDeals = Selector('.deal-card--type-gold').with({ boundTestRun: testController });
            var GoldDealsCount = await AllGoldDeals.count
            var GoldIndex = Math.floor(Math.random() * GoldDealsCount);    
            var RandomGold = await AllGoldDeals.nth(GoldIndex);
            console.log({ GoldDealsCount, GoldIndex });
            return RandomGold;
        },

        specificGoldCompleteTile: function() {
            return Selector('.list-deal:nth-child(1) .deal-card--type-gold .deal-card__wrapper').with({ boundTestRun: testController })
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

        randomSilverDeal: async function() {
            var AllSilverDeals = Selector('.deal-card--type-silver').with({ boundTestRun: testController });
            var SilverDealsCount = await AllSilverDeals.count
            var SilverIndex = Math.floor(Math.random() * SilverDealsCount);    
            var RandomSilver = await AllSilverDeals.nth(SilverIndex);
            console.log({ SilverDealsCount, SilverIndex });
            return RandomSilver;
        },

        specificSilverCompleteTile: function() {
            return Selector('.list-deal:nth-child(6) .deal-card--type-silver .deal-card__wrapper').with({ boundTestRun: testController })
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

        getLastGolddealOnPage: async function(){
            var allGoldTiles = Selector('.grid > .row > .list-deal > .deal-card--type-gold').with({ boundTestRun: testController });
             var lastGoldSection = await allGoldTiles.nth(-1).parent(0).nextSibling(0).child(0).hasClass('deal-card--type-silver');
             console.log(lastGoldSection);
             return lastGoldSection;            
        },

        BrandGolddeals: function() {
            return Selector('.brand-deals .list-deal .deal-card--type-gold').with({ boundTestRun: testController })
        },
        
        BrandSilverdeals: function() {
            return Selector('.brand-deals .list-deal .deal-card--type-silver').with({ boundTestRun: testController })
        }
    },
}



    



