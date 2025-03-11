import test from "@playwright/test";


test("Login to FaceBook", async({page}) =>{
    
    await page.goto("https://www.facebook.com/login.php/")

    await page.locator("#email").fill("amit@gmail.com")
    await page.locator("#pass").fill("123456")
    await page.locator("#loginbutton").click()
    

    page.close()

})