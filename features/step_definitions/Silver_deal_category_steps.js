const {Given, When, Then} = require('cucumber');

const SilverTile = require('../pages/Silver_deal_category_Page.js')

Given('I navigate to Click Frenzy Category Page', async function () {
    await testController
      .navigateTo(SilverTile.url)     
});                           
   
Then('i check if all fields on silver deal are visible', async function () {
  await testController         
        .expect((await SilverTile.SilverTileComponent.randomSilverLogo()).visible).ok()
        .expect((await SilverTile.SilverTileComponent.randomSilverImage()).visible).ok()
        .expect((await SilverTile.SilverTileComponent.randomSilverTitle()).visible).ok()
        .expect((await SilverTile.SilverTileComponent.randomSilverOffer()).visible).ok()
        .expect((await SilverTile.SilverTileComponent.randomSilverShipping()).visible).ok()
        .expect((await SilverTile.SilverTileComponent.randomSilverShipping()).visible).ok()
        .expect((await SilverTile.SilverTileComponent.randomSilverCTA()).visible).ok()
});

Then('i check if that deal is a silver deal by checking the colour of bottom section', async function () {
  await testController
  .expect((await SilverTile.SilverTileComponent.randomSilverBottomColourSection()).getStyleProperty('color')).eql('rgb(56, 56, 56)')
});


Then('i check if complete silver deal is clickable', async function () {
    await testController
          .click(await SilverTile.SilverTileComponent.randomSilverTopSection())
          .navigateTo(SilverTile.url)
          .click(await SilverTile.SilverTileComponent.randomSilverBottomSection())
          .navigateTo(SilverTile.url)
          .click(await SilverTile.SilverTileComponent.randomSilverCompleteTile())
          .navigateTo(SilverTile.url)

 });
 
 Then('i check if silver deal scales up on hover state', async function () {
  await testController
  .hover(await SilverTile.SilverTileComponent.specificSilverCompleteTile())
  .expect((await SilverTile.SilverTileComponent.specificSilverCompleteTile()).getStyleProperty('transform')).eql('matrix(1.05, 0, 0, 1.05, 0, 0)')    
  });

 

