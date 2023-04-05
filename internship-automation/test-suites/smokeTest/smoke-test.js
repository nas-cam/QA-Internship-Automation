import securePage from '../../pageobjects/secure.page.js'
import myAccountPage from '../../pageobjects/myAccountPage.js';
import homePage from '../../pageobjects/homePage.js';
import productPage from '../../pageobjects/productPage.js';
import cartPage from '../../pageobjects/cartPage.js';
import checkoutPage from '../../pageobjects/checkoutPage.js';
import { cartPageData, loginData, productPageData } from '../../data/commonData.js';
import { checkoutPageData, myAccountPageData } from '../../data/commonData.js';

describe('001: Smoke test for Shop Tools App', () => {
    it('TC-ID-1. User is able to login, to add item to the cart, and to complete order', async () => {
        await myAccountPage.open();
        await myAccountPage.clickOnUsername();
        await myAccountPage.enterUsername(loginData.validUsername);
        await myAccountPage.clickOnPassword();
        await myAccountPage.enterPassword(loginData.validPassword);
        await myAccountPage.clickOnSubmitButton();
        await expect(securePage.flashAlert).toHaveTextContaining(myAccountPageData.myAccountHeaderText);
        await myAccountPage.logoClick();
        await expect(securePage.homepageVal).toHaveTextContaining(myAccountPageData.searchFieldText);
        await homePage.scrollToProduct();
        await expect(securePage.productVal).toBeDisplayed();
        await homePage.clickToProduct();
        await expect(securePage.pageHeader).toHaveTextContaining(productPageData.productHeaderText);
        await productPage.clickToColorDropDown();
        await productPage.selectColor(productPageData.productColor);
        await productPage.clickToSizeDropdown();
        await productPage.selectSize(productPageData.productSize);
        await productPage.clicktoAddToCartButton();
        await productPage.clickToViewCartButton();
        await expect(securePage.pageHeader).toHaveTextContaining(cartPageData.cartPageHeader);
        await cartPage.scrollToTblCart();
        await cartPage.clickToProceedToCheckoutButton();
        await expect(securePage.pageHeader).toHaveTextContaining(checkoutPageData.checkoutPageHeader);
        await checkoutPage.clickOnFirstnameField();
        await checkoutPage.enterFirstName(checkoutPageData.firstName);
        await checkoutPage.clickOnLastNameField();
        await checkoutPage.enterLastName(checkoutPageData.lastName);
        await checkoutPage.clickOnCompany();
        await checkoutPage.enterCompany(checkoutPageData.company);
        await checkoutPage.clickOnCountry();
        await checkoutPage.enterCountry(checkoutPageData.country);
        await checkoutPage.clickOnAddress();
        await checkoutPage.enterAddress(checkoutPageData.address);
        await checkoutPage.clickOnPostCode();
        await checkoutPage.enterPostCode(checkoutPageData.postCode);
        await checkoutPage.clickOnTown();
        await checkoutPage.enterTown(checkoutPageData.town);
        await checkoutPage.clickOnPhone();
        await checkoutPage.enterPhone(checkoutPageData.phone);
        await checkoutPage.clickOnEmail();
        await checkoutPage.enterEmail(checkoutPageData.email);
        await checkoutPage.clickOnTerms();
        await checkoutPage.clickOnPlaceOrderButton();
        await expect(securePage.thankYouNote).toHaveTextContaining(checkoutPageData.thankYouNote);
    });
});


