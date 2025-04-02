import { test } from '@playwright/test';

export class AccountPage{
    constructor(page){
        this.billingInformationLink = page.getByRole('link', { name: 'billing information' });
        this.orderHistoryLink = page.getByRole('link', { name: 'Order History'});

        this.billingInformationUpdateButton = page.getByRole('button', {name: 'Update' });

        this.orderHistoryLoader = page.locator('.academy-bug17');
        this.billingAddressLoader = page.locator('.academy-bug-18');
        this.billingInformationLoader = page.locator('#ec_account_billing_information form div').filter({ hasText: 'UPDATE CANCEL' }).locator('span')
    }

    async getBillingInformation(){
        await test.step('Ожидать загрузки платежной информации', async() => {
            await this.billingAddressLoader.waitFor({ state: 'visible' });
            await this.billingAddressLoader.click({ force: true });
        });
    }

    async goToBillingInformation(){
        await test.step('Перейти в раздел платежной информации', async() => {
            await this.billingInformationLink.click();
        });
    }

    async updateBillingInformation(){
        await test.step('Обновить платежную информацию', async() => {
            await this.billingInformationUpdateButton.waitFor({ state: 'visible' });
            await this.billingInformationUpdateButton.click();
            await this.billingInformationLoader.waitFor({ state: 'visible' });
            await this.billingInformationLoader.click({ force: true});
        });
    }

    async goToOrderHistory(){
        await test.step('Перейти к истории заказов', async() => {
            await this.orderHistoryLink.click();
            await this.orderHistoryLoader.waitFor({ state: 'visible' });
            await this.orderHistoryLoader.click({ force: true });
        });
    }
}
