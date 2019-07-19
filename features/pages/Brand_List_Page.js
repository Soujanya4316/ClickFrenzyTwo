const {Selector} = require('testcafe');
const ClientFunction = require('testcafe').ClientFunction;

module.exports = {

    url: `${process.env.TESTCAFE_URL}/brands`,
       
    getPageDetails: {
        PageURL: function () {
            return ClientFunction(() => window.location.href).with({ boundTestRun: testController });
        }
    },

    BrandListPageTitle: {
        PageTitle: function() {
            return Selector('.brand-page-heading__title').with({ boundTestRun: testController })
        },
    },

    BrandItems: {
        
        BrandLogo: function() {
            return Selector('#brand-group--N .brand-group__cell:nth-child(1) .brand-item__logo').with({ boundTestRun: testController })
        },

        BrandName: function() {
            return Selector('#brand-group--A .brand-group__cell:nth-child(2) .brand-item__name').with({ boundTestRun: testController })
        },

        CompleteBrandItem: function() {
            return Selector('#brand-group--I .brand-group__cell:nth-child(2) > .brand-item').with({ boundTestRun: testController })
        }  
        
    },

    BrandNavList: {

        AlphabetNavList: function() {
                return Selector('.brand-navigation__list').with({ boundTestRun: testController })
        },  
            
        AlphabetsInNav: function() {
                return Selector('.brand-navigation__item:nth-child(15)').with({ boundTestRun: testController })
        },

        AlphabetAnchor: function() {
           
            return Selector('.brand-navigation__item--active').with({ boundTestRun: testController });


        },

        BrandPageListing: function() {
            return Selector('.brand-page-listing').with({ boundTestRun: testController })
        },

        DisabledBrandGroup: async function() {           
            
            var elementSelector = Selector('.brand-navigation__item--is-missing').with({ boundTestRun: testController });
            var element = await elementSelector.innerText

            console.log('The disabled element is :' + element)

            if (element) {
                var id = `#brand-group--${element}`;
                var nonElementSelector = Selector(id).with({ boundTestRun: testController });                
                console.log(nonElementSelector);

                return nonElementSelector;
            }
            else {
                console.log('No disabled element on Brand Navigation')
            }  
        },

        ActiveBrandNav: function() {
            return Selector('.brand-navigation__item--active').with({ boundTestRun: testController })
        }  
    },  

    RandomSection: {

        RandomBrand: async function() {

            var elements = Selector('.brand-item').with({ boundTestRun: testController });
            var count = await elements.count
            var index = Math.floor(Math.random() * count);

            var element = await elements.nth(index);
            console.log({ count, index });

            return element;
        }
    },

    SpecificAlphabet: {
        CompleteAlphabetList: function() {
                return Selector('.brand-navigation').with({ boundTestRun: testController })
        },

        SectionTitleOne: function() {
                return Selector('#brand-group--V .brand-group__name').with({ boundTestRun: testController })
        },

        SectionTitleTwo: function() {
            return Selector('#brand-group--N .brand-group__name').with({ boundTestRun: testController })
        },

        SectionTitleThree: function() {
            return Selector('#brand-group--T .brand-group__name').with({ boundTestRun: testController })
        },

        SectionTitleFour: function() {
            return Selector('#brand-group--A .brand-group__name').with({ boundTestRun: testController })
        },

        DivRoot: function() {
            return Selector('#root').with({ boundTestRun: testController })
        },

        GoToTopCTA: function() {
            return Selector('.button--action-callback').with({ boundTestRun: testController })
        }
    }
}

