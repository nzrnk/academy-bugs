import { MainPage, ProductPage, AccountPage, CartPage, SignUpPage } from './index'
import { Comment } from "../bulders/comment.builder";
import { test } from '@playwright/test';


export class App {
    constructor(page){
        this.page = page;
        this.mainPage = new MainPage(page);
        this.productPage = new ProductPage(page);
        this.signUpPage = new SignUpPage(page);
        this.cartPage = new CartPage(page);
        this.accountPage = new AccountPage(page);
        this.comment = new Comment();

        
        this.mainPageLink = page.getByRole('link', { name: 'Find Bugs' });
        
        this.overlay = page.locator('div').filter({ hasText: 'You found a crash bug,' });
        //добавил другой селектор, так как overlay не всегда проходит, хотя элемент тот же самый
        this.anotherOverlay = page.locator('div').filter({ hasText: 'You found a crash bug,' }).nth(1) 
        
        this.popUp = page.locator('#bug-popup');
        this.congratsPopUp = page.locator('#popmake-4406');
        
        this.cart = page.locator('.single-entry-content');
    }

    
    async goToMainPage(){
        await test.step('Перейти на главную страницу', async() => {
            await this.mainPageLink.click();
        });
    }

    async waitForPopUp(){
        await test.step('Ожидать загрузки поп-апа с информацией по багу', async() => {
            await this.popUp.waitFor({ state: 'visible' });
        });
    }

    async waitForOverlay(){
        await test.step('Ожидать загрузки оверлея', async() => {
            await this.overlay.waitFor({ state: 'visible' });
        });
    }

    async waitForCart(){
        await test.step('Ожидать загрузки корзины', async() => {
            await this.cart.waitFor({ state: 'visible' });
        });
    }
    
    async waitForCongratsPopUp(){
        await test.step('Ожидать загрузки поп-апа с поздравлением о найденном первом баге', async() => {
            await await this.congratsPopUp.waitFor({ state: 'visible' });

        });
    }

    async waitForAnotherOverlay(){
        await test.step('Ожидать загрузки оверлея', async() => {
            await this.anotherOverlay.waitFor({ state: 'visible' });
        });
    }

}

