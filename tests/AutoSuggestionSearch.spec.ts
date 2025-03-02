import {test} from '@playwright/test'


test('Select from Auto Suggestion', async({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    await page.locator("#autocomplete").fill("ind")
    

    // Used filter for matching the india
    await page.locator(".ui-menu-item").filter({hasText: /^India$/}).click()


    // Dropdown

    await page.locator("#dropdown-class-example").selectOption("Option2")

    await page.close()
    
})