import {test } from '@playwright/test'


const users = [
    {user: "student", pass: "Password123"},
    {user: "user1", pass: "Password123"},
    {user: "user2", pass: "Password123"},
    {user: "user3", pass: "Password123"},


]

users.forEach(({ user, pass }) => {
    test(`Login Test - Username: ${user}`, async ({ page }) => {
        await page.goto("https://practicetestautomation.com/practice-test-login/");

        await page.locator('#username').fill(user);
        await page.locator('#password').fill(pass);
        await page.locator('#submit').click();

    });
});