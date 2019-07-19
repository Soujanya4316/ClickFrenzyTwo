const {Given, When, Then} = require('cucumber');

const BrandResultPage = require('../pages/Brand_Result_Page.js')

Given('I navigate to Click Frenzy Brand Result Page', async function () {
       await testController
      .navigateTo(BrandResultPage.url)       
});                         

Then('i see if the brand logo is visible', async function () {
       await testController         
       .expect(BrandResultPage.BrandDetails.BrandLogo().visible).ok()             
     });

Then('i see if the brand Name is visible', async function () {
       await testController      
       .expect(BrandResultPage.BrandDetails.BrandName().visible).ok()
        
     });

Then('i see if the brand description is visible', async function () {
       await testController 
       .expect(BrandResultPage.BrandDetails.BrandDescription().visible).ok()
      
});     

Then('i see if the Payment Options title is visible', async function () {
       await testController   
       .expect(BrandResultPage.Otherdetails.PaymentTitle().visible).ok()      
            
});

Then('i see if the payment icons are visible under payment options', async function () {
       await testController    
       .expect((await BrandResultPage.Otherdetails.PaymentIcons()).visible).ok()
                  
});

Then('i see if payment target url opens up in new tab when clicked on website', async function () {
       await testController    
       .expect(BrandResultPage.Otherdetails.paymentlink().visible).ok()
       .click(BrandResultPage.Otherdetails.paymentlink())
       .wait(1000)
       .navigateTo(BrandResultPage.url)    
       .expect(BrandResultPage.Otherdetails.paymentlink().getAttribute('target')).eql('_blank')
});


Then('i see if the Delivery Options title is visible', async function () {
       await testController   
       .expect(BrandResultPage.Otherdetails.DeliveryOptionsTitle().visible).ok()      
            
});

Then('i see if the delivery icons are visible under delivery options', async function () {
       await testController    
       .expect((await BrandResultPage.Otherdetails.DeliveryIcons()).visible).ok()  
            
});

Then('i see if delivery target url opens up in new tab when clicked on website', async function () {
       await testController    
       .expect(BrandResultPage.Otherdetails.deliverylink().visible).ok()
       .click(BrandResultPage.Otherdetails.deliverylink())
       .wait(1000)
       .navigateTo(BrandResultPage.url) 
       .expect(BrandResultPage.Otherdetails.deliverylink().getAttribute('target')).eql('_blank')
});

Then('i see if Rewards and Cashback title is visible on page', async function () {
       await testController   
       .expect(BrandResultPage.Otherdetails.RewardsTitle().visible).ok()          
});

Then('i see if target url under Rewards opens up in new tab when clicked on website', async function () {
       await testController    
       .expect(BrandResultPage.Otherdetails.Rewardslink().visible).ok()
       .click(BrandResultPage.Otherdetails.Rewardslink())
       .wait(1000)
       .navigateTo(BrandResultPage.url) 
       .expect(BrandResultPage.Otherdetails.Rewardslink().getAttribute('target')).eql('_blank')
});

Then('i see if the Refund and Returns Policy title is visible on the page', async function () {
       await testController   
       .expect(BrandResultPage.Otherdetails.RefundTitle().visible).ok()      
            
});

Then('i see the 2 line text below Refund and Returns title with a read more text at the end', async function () {
       await testController   
       .expect(BrandResultPage.Otherdetails.RefundTwoLineText().visible).ok() 
       .expect(BrandResultPage.Otherdetails.RefundReadMore().visible).ok()     
            
});

Then('i see if the Deal Terms and Condition title is visible on the page', async function () {
       await testController   
       .expect(BrandResultPage.Otherdetails.TandCTitle().visible).ok()      
            
});

Then('i see the 2 line text below Deal Terms and Condition title with a read more text at the end', async function () {
       await testController   
       .expect(BrandResultPage.Otherdetails.TandCTwoLineText().visible).ok() 
       .expect(BrandResultPage.Otherdetails.TermsReadMorelink().visible).ok()     
            
});

Then('i see if the text is limiting to 2 line by checking the height of that text', async function () {
       await testController   
       .expect(BrandResultPage.Otherdetails.TandCTwoLineText().getStyleProperty('height')).eql('48px')         
            
});

Then('i take total Refer To Our websites count and see if the random one amongst them is visible', async function () {
       await testController   
       .expect((await BrandResultPage.Otherdetails.ReferToOurWebsiteText()).visible).ok()       
            
});

When('i click on read more link', async function () {
       await testController   
       .click(BrandResultPage.Otherdetails.TermsReadMorelink())
});

Then('i see modal component opens up on page', async function () {
       await testController   
       .expect((BrandResultPage.Modal.ModalComponent()).visible).ok()       
            
});

Then('i see brand logo is visible on Modal', async function () {
       await testController   
       .expect((BrandResultPage.Modal.brandLogoOnModal()).visible).ok()       
            
});

Then('i see brand name is visible on Modal', async function () {
       await testController   
       .expect((BrandResultPage.Modal.brandNameOnModal()).visible).ok()       
            
});

Then('i see brand description is visible on Modal', async function () {
       await testController   
       .expect((BrandResultPage.Modal.brandDescriptionOnModal()).visible).ok()       
            
});

Then('i see summary Title is visible on Modal', async function () {
       await testController   
       .expect((BrandResultPage.Modal.summaryTitleOnOnModal()).visible).ok()       
            
});

Then('i see close icon is visible on Modal', async function () {
       await testController   
       .expect((BrandResultPage.Modal.closeIconOnModal()).visible).ok()       
            
});

Then('i see all the main links on modal are clickable by clicking on couple of random links', async function () {
       await testController   
       .click(await BrandResultPage.Modal.randomMainLinkOnModal()) 
       .click(await BrandResultPage.Modal.randomMainLinkOnModal())    
            
});

Then('i see all the sub links on modal are clickable by clicking on couple of random links', async function () {
       await testController   
       .click(await BrandResultPage.Modal.randomSubLinkOnModal())
       .navigateTo(BrandResultPage.url)
       .click(BrandResultPage.Otherdetails.TermsReadMorelink())
       .click(await BrandResultPage.Modal.randomSubLinkOnModal())
       .navigateTo(BrandResultPage.url)   
       .click(BrandResultPage.Otherdetails.TermsReadMorelink())        
            
});

Then('i see if the all the links om Modal are opening in new tab by checking if the target property is set to blank', async function () {
       await testController   
       .expect(await BrandResultPage.Modal.specificModalMainLink().getAttribute('target')).eql('_blank')
       .expect(await BrandResultPage.Modal.specificModalSubLink().getAttribute('target')).eql('_blank')                
});

Then('i see the brand result page is faded out and not active when modal is open', async function () {
       await testController  
       .expect((BrandResultPage.Modal.modalBody()).visible).ok()  
       .expect(BrandResultPage.Modal.ModalComponent().getStyleProperty('overflow-y')).eql('hidden')                          
});

Then('i see if content inside modal is scrollable and also the scroll bar is not visible when there is enough space to fit all the content', async function () {
       await testController
       .expect(BrandResultPage.Modal.modalScrollableContent().getStyleProperty('overflow-y')).eql('auto')                          
});

Then('i see if clicking on close icon closes modal and takes us back to brand result page', async function () {
       await testController   
       .click(BrandResultPage.Modal.closeIconOnModal())
       .expect((BrandResultPage.BrandDetails.brandResultPageBody().getStyleProperty('overflow-y')).visible).notOk()
});

Then('i see if All deals by Brand title is visible on the page', async function () {
       await testController   
       .expect(BrandResultPage.dealDetails.AlldealsByBrandTitle().visible).ok()
});

Then('i see gold deals are visible on Brand Result page', async function () {
      await testController    
      .expect((await BrandResultPage.dealDetails.randomGoldDeal()).visible).ok()        
});

Then('i see silver deals are visible on Brand Result Page', async function () {
       await testController  
       .expect((await BrandResultPage.dealDetails.randomSilverDeal()).visible).ok()
 });

Then('i see if all fields on gold deal are visible and clickable on Brand Result Page', async function () {
       await testController    
       .expect((await BrandResultPage.dealDetails.randomGoldLogo()).visible).ok()
       .expect((await BrandResultPage.dealDetails.randomGoldImage()).visible).ok()
       .expect((await BrandResultPage.dealDetails.randomGoldTitle()).visible).ok()
       .expect((await BrandResultPage.dealDetails.randomGoldOffer()).visible).ok()
       .expect((await BrandResultPage.dealDetails.randomGoldShipping()).visible).ok()
       .expect((await BrandResultPage.dealDetails.randomGoldRedemption()).visible).ok()
       .expect((await BrandResultPage.dealDetails.randomGoldCTA()).visible).ok()
       .click(await BrandResultPage.dealDetails.randomGoldTopSection())
       .navigateTo(BrandResultPage.url) 
       .click(await BrandResultPage.dealDetails.randomGoldBottomSection()) // 
       .navigateTo(BrandResultPage.url)
       .click(await BrandResultPage.dealDetails.randomGoldCompleteTile())
       .navigateTo(BrandResultPage.url)  
       
 });

Then('i see if all fields on silver deal are visible and clickable on Brand Result Page', async function () {
       await testController  
       .expect((await BrandResultPage.dealDetails.randomSilverLogo()).visible).ok()
       .expect((await BrandResultPage.dealDetails.randomSilverImage()).visible).ok()
       .expect((await BrandResultPage.dealDetails.randomSilverTitle()).visible).ok()
       .expect((await BrandResultPage.dealDetails.randomSilverOffer()).visible).ok()
       .expect((await BrandResultPage.dealDetails.randomSilverShipping()).visible).ok()
       .expect((await BrandResultPage.dealDetails.randomSilverRedemption()).visible).ok()
       .expect((await BrandResultPage.dealDetails.randomSilverCTA()).visible).ok()
       .click(await BrandResultPage.dealDetails.randomSilverTopSection())
       .navigateTo(BrandResultPage.url) 
       .click(await BrandResultPage.dealDetails.randomSilverBottomSection())
       .navigateTo(BrandResultPage.url) 
       .click(await BrandResultPage.dealDetails.randomSilverCompleteTile())
       .navigateTo(BrandResultPage.url) 
 });

Then('i check if that deal on Brand Result Page is a gold deal by checking the colour of bottom section', async function () {
       await testController
       .hover(await BrandResultPage.dealDetails.randomGoldBottomColourSection())
       .expect((await BrandResultPage.dealDetails.randomGoldBottomColourSection()).getStyleProperty('color')).eql('rgb(255, 255, 255)')
});

Then('i check if that deal on Brand Result Page is a silver deal by checking the colour of bottom section', async function () {
       await testController
       .hover(await BrandResultPage.dealDetails.randomSilverBottomColourSection())
       .expect((await BrandResultPage.dealDetails.randomSilverBottomColourSection()).getStyleProperty('color')).eql('rgb(56, 56, 56)')
});

Then('i check if gold deal scales up on hover state on Brand Result Page', async function () {
       await testController
       .hover(await BrandResultPage.dealDetails.specificGoldCompleteTile())
       .expect((await BrandResultPage.dealDetails.specificGoldCompleteTile()).getStyleProperty('transform')).eql('matrix(1.05, 0, 0, 1.05, 0, 0)')       
});

Then('i check if silver deal scales up on hover state on Brand Result Page', async function () {
       await testController
       .hover(await BrandResultPage.dealDetails.specificSilverCompleteTile())
       .expect((await BrandResultPage.dealDetails.specificSilverCompleteTile()).getStyleProperty('transform')).eql('matrix(1.05, 0, 0, 1.05, 0, 0)')       
});

Then('i see if silver deals take the same row as of gold deals and appear only after gold deals are finished', async function () {
       await testController
       .expect(await BrandResultPage.dealDetails.getLastGolddealOnPage()).eql(true)     
});



