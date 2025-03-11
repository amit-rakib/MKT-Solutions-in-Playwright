import test from "@playwright/test";




test("Search on goole and select", async({page}) =>{


   await page.goto("https://www.google.com/")

   await page.locator("//textarea[@id='APjFqb']").fill("dollar")

   await page.locator(".sbct.PZPZlf").filter({ hasText: "Dollar Rate" }).first().click();

   
   


})