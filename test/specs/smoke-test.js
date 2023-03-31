
import securePage from '../pageobjects/secure.page.js';
import MyAccountPage from '../pageobjects/myAccountPage.js';
import HomePage from '../pageobjects/homePage.js';
import ProductPage from '../pageobjects/productPage.js';
import CartPage from '../pageobjects/cartPage.js';
import CheckoutPage from '../pageobjects/checkoutPage.js';

describe('001: Smoke test for Shop Tools App', () => {
    it('TC-ID-1. User is able to login, to add item to the cart, and to complete order', async () => {
        await MyAccountPage.open();
        await MyAccountPage.enterUsername('username_1');
        await MyAccountPage.enterPassword('strongPssword1?');
        await MyAccountPage.clickOnSubmitButton();
        await expect(securePage.flashAlert).toHaveTextContaining("MY ACCOUNT");
        await MyAccountPage.logoClick();
        await expect(securePage.homepageVal).toHaveTextContaining('Search');
        await HomePage.scrollToProduct();
        await expect(securePage.productVal).toBeDisplayed();
        await HomePage.clickToProduct();
        await expect(securePage.pageHeader).toHaveTextContaining('PINK DROP SHOULDER OVERSIZED T SHIRT');
        await ProductPage.clickToColorDropDown();
        await ProductPage.selectColor('Pink');
        await ProductPage.clickToSizeDropdown();
        await ProductPage.selectSize('36');
        await ProductPage.clicktoAddToCartButton();
        await ProductPage.clickToViewCartButton();
        await expect(securePage.pageHeader).toHaveTextContaining('CART');
        await CartPage.scrollToTblCart();
        await CartPage.clickToProceedToCheckoutButton();
        await expect(securePage.pageHeader).toHaveTextContaining('CHECKOUT');
        await CheckoutPage.clickOnFirstnameField();
        await CheckoutPage.enterFirstName('Adaline');
        await CheckoutPage.clickOnLastNameField();
        await CheckoutPage.enterLastName('Kuhic');
        await CheckoutPage.clickOnCompany();
        await CheckoutPage.enterCompany('Company');
        await CheckoutPage.clickOnCountry();
        await CheckoutPage.enterCountry('Iceland');
        await CheckoutPage.clickOnAddress();
        await CheckoutPage.enterAddress('642 Vandervort Hill');
        await CheckoutPage.clickOnPostCode();
        await CheckoutPage.enterPostCode('87282-7667');
        await CheckoutPage.clickOnTown();
        await CheckoutPage.enterTown('New Josianne');
        await CheckoutPage.clickOnPhone();
        await CheckoutPage.enterPhone('670-330-3748');
        await CheckoutPage.clickOnEmail();
        await CheckoutPage.enterEmail('votysip@abyssmail.com');
        await CheckoutPage.clickOnTerms();
        await CheckoutPage.clickOnPlaceOrderButton();
        await expect(securePage.thankYouNote).toHaveTextContaining('Thank you. Your order has been received.');
    });
});


