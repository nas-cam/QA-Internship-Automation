
import loginPage from '../pageobjects/login.page.js';
import securePage from '../pageobjects/secure.page.js';
import LoginPage from '../pageobjects/login.page.js';

describe('001: Smoke test for Shop Tools App', () => {
    it('TC-ID-1. User is able to login, to add item to the cart, and to complete order', async () => {
        await LoginPage.open();
        await LoginPage.enterUsername('username_1');
        await LoginPage.enterPassword('strongPssword1?');
        await LoginPage.clickOnSubmitButton();
        await expect(securePage.flashAlert).toHaveTextContaining("MY ACCOUNT");
        await LoginPage.logoClick();
        await expect(securePage.homepageVal).toHaveTextContaining('Search');
        await LoginPage.scrollToProduct();
        await expect(securePage.productVal).toBeDisplayed();
        await LoginPage.clickToProduct();
        await expect(securePage.pageHeader).toHaveTextContaining('PINK DROP SHOULDER OVERSIZED T SHIRT');
        await LoginPage.clickToColorDropDown();
        await LoginPage.selectColor('Pink');
        await LoginPage.clickToSizeDropdown();
        await LoginPage.selectSize('36');
        await LoginPage.clicktoAddToCartButton();
        await LoginPage.clickToViewCartButton();
        await expect(securePage.pageHeader).toHaveTextContaining('CART');
        await LoginPage.scrollToTblCart();
        await LoginPage.clickToProceedToCheckoutButton();
        await expect(securePage.pageHeader).toHaveTextContaining('CHECKOUT');
        await LoginPage.clickOnFirstnameField();
        await LoginPage.enterFirstName('Adaline');
        await LoginPage.clickOnLastNameField();
        await LoginPage.enterLastName('Kuhic');
        await LoginPage.clickOnCompany();
        await LoginPage.enterCompany('Company');
        await LoginPage.clickOnCountry();
        await LoginPage.enterCountry('Iceland');
        await LoginPage.clickOnAddress();
        await LoginPage.enterAddress('642 Vandervort Hill');
        await LoginPage.clickOnPostCode();
        await LoginPage.enterPostCode('87282-7667');
        await LoginPage.clickOnTown();
        await LoginPage.enterTown('New Josianne');
        await LoginPage.clickOnPhone();
        await LoginPage.enterPhone('670-330-3748');
        await loginPage.clickOnEmail();
        await LoginPage.enterEmail('votysip@abyssmail.com');
        await LoginPage.clickOnTerms();
        await LoginPage.clickOnPlaceOrderButton();
        await expect(securePage.thankYouNote).toHaveTextContaining('Thank you. Your order has been received.');
    });
});


