import { test } from '@playwright/test';

export class SignUpPage {
    constructor(page){
        this.page = page;

        this.signInEmailField = page.getByRole('textbox', { name: 'Email Address*', exact: true});
        this.passwordField = page.locator('#ec_account_login_password')
        this.emailField = page.getByRole('textbox', { name: 'Email', exact: true });
        
        this.signInButton = page.getByRole('button', { name: 'Sign In'});
        this.restorePasswordButton = page.getByRole('button', { name: 'Retrieve Password'});

        this.passwordRestoreLink = page.getByRole('link', { name: 'Forgot Your Password?' });
    }

    async goToRestorePassword(){
        await test.step('Перейти в раздел восстановления пароля', async() => {
            await this.passwordRestoreLink.click();
        });
    }
    
    async restorePassword(email){
        await test.step('Отправить форму восстановления пароля', async() => {
            await this.emailField.click();
            await this.emailField.fill(email);
            await this.restorePasswordButton.click();
        });
    }
    
    async signIn({email, password}){
        await test.step('Авторизоваться на сайте', async() => {
            await this.signInEmailField.click();
            await this.signInEmailField.fill(email);
            await this.passwordField.click();
            await this.passwordField.fill(password);
            await this.signInButton.click();
        });
    }
}