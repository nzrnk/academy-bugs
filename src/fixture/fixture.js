import { test as base } from '@playwright/test';
import { App } from '../pages/app.page';
import { user } from '../data';

export const test = base.extend({
    app: async({ page }, use) => {
        const app = new App(page);
        await page.goto('.');
        await use(app);
        
    },

    auth: [async({ app }, use) => {
        await app.mainPage.goToProductPage();
        await app.productPage.goToSignUpPage();
        await app.signUpPage.signIn({
            email: user.login,
            password: user.pass,
        }),
        await use(app);
    }, { timeout: 60000 }]
})                      