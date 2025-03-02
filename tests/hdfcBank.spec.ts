import {test} from '@playwright/test';


test('hdfc Bank Test', async({page, context}) =>{
    await page.goto('https://www.hdfcbank.com/')
   
   const loginButton = await page.locator("(//button[@class='desktop-login position-find btn btn-primary login-btn hide-in-mobileApp ng-scope'])[1]");

   await loginButton.hover();

   const netBank = page.locator("//a[normalize-space()='NetBanking']")


   // Parent child window
   const [newPage] = await Promise.all([
         context.waitForEvent('page'),  // wait for new page event
         netBank.click(), // click the link that opens new window
  
   ])

   await newPage.waitForLoadState();
   console.log(await newPage.title())

   // Switch to frame

   //await newPage.waitForSelector("//div[@class='welcmewrap']")

   const frame = newPage.locator('frame[name="login_page"]').contentFrame().getByText('Login to NetBanking Customer')

   await frame.locator("//input[@name='fldLoginUserId']").fill("12345")
   await frame.locator("//a[normalize-space()='CONTINUE']").click()

   await frame.locator("#fldPasswordDispId").fill("12345")
   await frame.locator("#chksecmod").check()
   await frame.locator("//a[normalize-space()='LOGIN']").click();
   
   await newPage.close()
   await page.close()

   // done


})