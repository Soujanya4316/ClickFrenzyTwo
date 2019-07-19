const {Given, When, Then} = require('cucumber');

const BrandPage = require('../pages/Brand_List_Page.js')

Given('I navigate to Click Frenzy Brand List Page', async function () {
       await testController
      .navigateTo(BrandPage.url)       
});                         

Then('i should see page title at the top of the page', async function () {
       await testController         
       .expect(BrandPage.BrandListPageTitle.PageTitle().visible).ok()             
     });

Then('all brands should be visible on the page', async function () {
       await testController      
       .expect((await BrandPage.RandomSection.RandomBrand()).visible).ok()
       .expect((await BrandPage.RandomSection.RandomBrand()).visible).ok() 
       .expect((await BrandPage.RandomSection.RandomBrand()).visible).ok()     
        
     });

Then('all brands should be visible with a brand logo', async function () {
       await testController               
       .expect((await BrandPage.RandomSection.RandomBrand()).find('.brand-item__logo').visible).ok()
       .expect((await BrandPage.RandomSection.RandomBrand()).find('.brand-item__logo').visible).ok()   
       .expect((await BrandPage.RandomSection.RandomBrand()).find('.brand-item__logo').visible).ok()
       
     });     

Then('all brands should be visible with a brand name', async function () {
        await testController   
       .expect((await BrandPage.RandomSection.RandomBrand()).find('.brand-item__name').visible).ok()
       .expect((await BrandPage.RandomSection.RandomBrand()).find('.brand-item__name').visible).ok()   
       .expect((await BrandPage.RandomSection.RandomBrand()).find('.brand-item__name').visible).ok()  
             
});

Then('all brands should be clickable when clicked on complete Brand item, Logo and Name', async function () {
           await testController
    
           .click(await BrandPage.RandomSection.RandomBrand())
           .wait(5000)
           .navigateTo(BrandPage.url)   
           .wait(5000)
           .click(await BrandPage.RandomSection.RandomBrand())
           .wait(5000)
           .navigateTo(BrandPage.url)    
           .wait(5000)
           .click(BrandPage.BrandItems.BrandLogo())
           .wait(5000)
           .navigateTo(BrandPage.url)   
           .wait(5000)
           .click(BrandPage.BrandItems.BrandName())
           .wait(5000)
           .navigateTo(BrandPage.url)   
           .wait(5000)
           
 });
 
Then('brand entire row should scale up on hover state', async function () {
         await testController
         .hover(BrandPage.BrandItems.CompleteBrandItem())
         .wait(5000) 
         .expect(BrandPage.BrandItems.CompleteBrandItem().getStyleProperty('box-shadow')).eql('rgba(0, 0, 0, 0.2) 0px 3px 9px 0px')
  });

Then('i should see brand navigation list below the Global Nav', async function () {
         await testController
         .expect(BrandPage.BrandNavList.AlphabetNavList().visible).ok()   
  });

Then('i should be able to see alphabet section titles for all brand groups', async function () {
       await testController
       .expect(BrandPage.SpecificAlphabet.SectionTitleOne().visible).ok()      
});

Then('i click on specific alphabet to see the page anchors to that section', async function () {
       await testController
       .click(BrandPage.BrandNavList.AlphabetsInNav())
       .wait(5000)
       .expect(BrandPage.BrandNavList.AlphabetAnchor().innerText).contains('N')        
          
});

Then('i see alphabet is disabled on Nav if there are no brands in that group and also that group does not exist on page', async function () {
       await testController
      
       .expect((await BrandPage.BrandNavList.DisabledBrandGroup()).exists).eql(false)       

});

Then('Then i first make sure CTA is not active on initial load', async function () {
       await testController
      .expect(BrandPage.SpecificAlphabet.GoToTopCTA().visible).notOk()
      console.log('CTA is not displayed on page on initial load')
      
});

Then('i see CTA Go To Top gets enabled on page scroll', async function () {
        await testController
       .hover(BrandPage.SpecificAlphabet.SectionTitleThree())      
       .expect(BrandPage.SpecificAlphabet.GoToTopCTA().visible).ok()

});
       
Then('i click on Go To Top CTA to see the page scrolls to top of the page', async function () {
       await testController
       .hover(BrandPage.SpecificAlphabet.SectionTitleTwo())
       .click(BrandPage.SpecificAlphabet.GoToTopCTA()) 
       .wait(5000)
       .expect(BrandPage.BrandNavList.AlphabetAnchor().innerText).contains('#')
            
});

Then('i make sure CTA is not active on the page after few seconds', async function () {
       await testController
       .hover(BrandPage.SpecificAlphabet.SectionTitleOne())
       .click(BrandPage.SpecificAlphabet.GoToTopCTA())
       .wait(2000)
       .expect(BrandPage.SpecificAlphabet.GoToTopCTA().getAttribute('class')).contains('back-to-top--exit-done')      
       .expect(BrandPage.SpecificAlphabet.GoToTopCTA().visible).notOk()   
       
});
