
import securePage from '../pageobjects/secure.page.js';
import myAccountPage from '../pageobjects/myAccountPage.js';
import homePage from '../pageobjects/homePage.js';
import productPage from '../pageobjects/productPage.js';
import cartPage from '../pageobjects/cartPage.js';
import checkoutPage from '../pageobjects/checkoutPage.js';

describe('001: Smoke test for Shop Tools App', () => {
    it('TC-ID-1. User is able to login, to add item to the cart, and to complete order', async () => {
        await myAccountPage.open();
        await myAccountPage.enterUsername('username_1');
        await myAccountPage.enterPassword('strongPssword1?');
        await myAccountPage.clickOnSubmitButton();
        await expect(securePage.flashAlert).toHaveTextContaining("MY ACCOUNT");
        await myAccountPage.logoClick();
        await expect(securePage.homepageVal).toHaveTextContaining('Search');
        await homePage.scrollToProduct();
        await expect(securePage.productVal).toBeDisplayed();
        await homePage.clickToProduct();
        await expect(securePage.pageHeader).toHaveTextContaining('PINK DROP SHOULDER OVERSIZED T SHIRT');
        await productPage.clickToColorDropDown();
        await productPage.selectColor('Pink');
        await productPage.clickToSizeDropdown();
        await productPage.selectSize('36');
        await productPage.clicktoAddToCartButton();
        await productPage.clickToViewCartButton();
        await expect(securePage.pageHeader).toHaveTextContaining('CART');
        await cartPage.scrollToTblCart();
        await cartPage.clickToProceedToCheckoutButton();
        await expect(securePage.pageHeader).toHaveTextContaining('CHECKOUT');
        await checkoutPage.clickOnFirstnameField();
        await checkoutPage.enterFirstName('Adaline');
        await checkoutPage.clickOnLastNameField();
        await checkoutPage.enterLastName('Kuhic');
        await checkoutPage.clickOnCompany();
        await checkoutPage.enterCompany('Company');
        await checkoutPage.clickOnCountry();
        await checkoutPage.enterCountry('Iceland');
        await checkoutPage.clickOnAddress();
        await checkoutPage.enterAddress('642 Vandervort Hill');
        await checkoutPage.clickOnPostCode();
        await checkoutPage.enterPostCode('87282-7667');
        await checkoutPage.clickOnTown();
        await checkoutPage.enterTown('New Josianne');
        await checkoutPage.clickOnPhone();
        await checkoutPage.enterPhone('670-330-3748');
        await checkoutPage.clickOnEmail();
        await checkoutPage.enterEmail('votysip@abyssmail.com');
        await checkoutPage.clickOnTerms();
        await checkoutPage.clickOnPlaceOrderButton();
        await expect(securePage.thankYouNote).toHaveTextContaining('Thank you. Your order has been received.');
    });
});


