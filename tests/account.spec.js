import { test } from '../src/fixture/fixture';
import { expect } from '@playwright/test';
import { messages, email } from '../src/data/index';

test('Восстановить пароль c email зарегистрированного пользователя', async({ app }) => {
    test.slow()
    await app.mainPage.goToProductPage();
    await app.productPage.goToSignUpPage();
    await app.signUpPage.goToRestorePassword();
    await app.signUpPage.restorePassword(email);
    await app.waitForCongratsPopUp();

    await test.step('Появляется сообщение об ошибке', async() => {
        await expect(app.congratsPopUp).toContainText(messages.firstCongrats)
        });
    });


test('Проверить вывод платежной информации', async({ auth }) => {
    test.slow()
    await auth.accountPage.getBillingInformation();
    await auth.waitForPopUp();
    
    await test.step('Появляется поп-ап для выбора типа и описания бага', async() => {
        await expect(auth.popUp).toContainText(messages.bugPopUpMessage);
    });
});

test('Обновить платежную информацию', async({ auth }) => {
    test.slow()
    await auth.accountPage.goToBillingInformation();
    await auth.accountPage.updateBillingInformation();
    await auth.waitForPopUp();
    
    await test.step('Появляется поп-ап для выбора типа и описания бага', async() => {
        await expect(auth.popUp).toContainText(messages.bugPopUpMessage);
    });
});

test('Проверить отображение истории заказов', async({ auth }) => {
    test.slow()
    await auth.goToMainPage();
    await auth.mainPage.goToProductPage();
    await auth.accountPage.goToOrderHistory();
    await auth.waitForPopUp();
   
    await test.step('Появляется поп-ап для выбора типа и описания бага', async() => {
        await expect(auth.popUp).toContainText(messages.bugPopUpMessage);
    });
});




        
        



