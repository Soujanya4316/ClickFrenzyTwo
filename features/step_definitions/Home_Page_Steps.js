const {Given, When, Then} = require('cucumber');
const { Selector } = require('testcafe');

const  HomePage= require('../pages/Home_Page.js')

Given('I navigate to Click Frenzy Home Page', async function () {
    await testController
      .navigateTo(process.env.TESTCAFE_URL)      
});                            
