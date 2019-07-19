const {Given, When, Then} = require('cucumber');

const GoldTile = require('../pages/Gold_deal_home_page.js')

Given('I navigate to the home page of Click Frenzy', async function () {
    await testController
      .navigateTo(process.env.TESTCAFE_URL)      
});
   
Then('i check if all fields on gold deal are visible', async function () {
  await testController         
        .expect((await GoldTile.GoldTileComponent.randomGoldLogo()).visible).ok()
        .expect((await GoldTile.GoldTileComponent.randomGoldImage()).visible).ok()
        .expect((await GoldTile.GoldTileComponent.randomGoldTitle()).visible).ok()
        .expect((await GoldTile.GoldTileComponent.randomGoldOffer()).visible).ok()
        .expect((await GoldTile.GoldTileComponent.randomGoldShipping()).visible).ok()
        .expect((await GoldTile.GoldTileComponent.randomGoldRedemption()).visible).ok()
        .expect((await GoldTile.GoldTileComponent.randomGoldCTA()).visible).ok()
});

Then('i check if that deal is a gold deal by checking the colour of bottom section', async function () {
       await testController
       .hover(await GoldTile.GoldTileComponent.randomGoldBottomColourSection())
       .expect((await GoldTile.GoldTileComponent.randomGoldBottomColourSection()).getStyleProperty('color')).eql('rgb(255, 255, 255)')
});

Then('i check if complete gold deal is clickable', async function () {
    await testController
           .click(await GoldTile.GoldTileComponent.randomGoldTopSection())
           .navigateTo(process.env.TESTCAFE_URL)
           .click(await GoldTile.GoldTileComponent.randomGoldBottomSection())
           .navigateTo(process.env.TESTCAFE_URL) 
           .click(await GoldTile.GoldTileComponent.randomGoldCompleteTile())
           .navigateTo(process.env.TESTCAFE_URL)
 });
 

 Then('i check if gold deal scales up on hover state', async function () {
  await testController
         .hover(await GoldTile.GoldTileComponent.specificGoldCompleteTile())
         .expect((await GoldTile.GoldTileComponent.specificGoldCompleteTile()).getStyleProperty('transform')).eql('matrix(1.05, 0, 0, 1.05, 0, 0)')       
  });




 
