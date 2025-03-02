import {test} from '@playwright/test'



const products = [
{product: "Apple"},
{product: "Mango"},
{product: "Sea"},
{product: "Mountain"},
]


products.forEach(({product}) =>{
    test(`Search multipe product: ${product}`, async({page}) => {
       await page.goto("https://www.google.co.uk/")

       await page.locator("//textarea[@id='APjFqb']").fill(product)
       await page.locator("//textarea[@id='APjFqb']").press('Enter')

       await page.close()

    })
})