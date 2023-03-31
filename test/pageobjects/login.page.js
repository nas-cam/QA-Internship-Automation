
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() { return $('//*[@id="username"]'); }
    get inputPassword() { return $('//*[@id="password"]'); }
    get buttonSubmit() { return $('[name="login"]'); }
    get header() { return $('.noo-heading-content'); }
    get logo() { return $('img.custom-logo'); }
    get product() { return $('.noo-product-inner.noo-product-inner2'); }
    get colorDropdown() { return $('#pa_color'); }
    get sizeDropdown() { return $('#pa_size'); }
    get buttonAddToCart() { return $('.single_add_to_cart_button.button.alt.wp-element-button'); }
    get buttonViewCart() { return $('a.button.wc-forward.wp-element-button'); }
    get tblCart() { return $('.shop_table.shop_table_responsive.cart'); }
    get buttonProceedToCheckout() { return $('.checkout-button.button.alt.wc-forward.wp-element-button'); }
    get inputFirstName() { return $('#billing_first_name'); }
    get inputLastName() { return $('#billing_last_name'); }
    get inputCompany() { return $('#billing_company'); }
    get countryArrow() { return $('.select2-selection__arrow'); }
    get inputCountry() { return $('#billing_country'); }
    get inputBillingAddress() { return $('#billing_address_1'); }
    get inputTown() { return $('#billing_city'); }
    get selectBillingState() { return $('#billing_state'); }
    get inputPostCode() { return $('#billing_postcode'); }
    get inputPhone() { return $('#billing_phone'); }
    get inputEmail() { return $('#billing_email'); }
    get inputTerms() { return $('#terms'); }
    get buttonPlaceOrder() { return $('#place_order'); }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async enterUsername(username){
        await this.inputUsername.click();
        await this.inputUsername.setValue(username);
    }
    async enterPassword(password){
        await this.inputUsername.click();
        await this.inputUsername.setValue(password);
    }
    async clickOnSubmitButton(){
        await this.buttonSubmit.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('my-account');
    }
    async logoClick() {
        await this.logo.click()
    }
    async scrollToProduct() {
        await this.product.scrollIntoView();
    }
    async clickToProduct() {
        await this.product.click();
    }
    async clickToColorDropDown() {
        await this.colorDropdown.click();
    }
    async selectColor(color) {
        await this.colorDropdown.selectByVisibleText(color);
    }
    async clickToSizeDropdown() {
        await this.sizeDropdown.click();
    }
    async selectSize(size) {
        await this.sizeDropdown.selectByVisibleText(size);
    }
    async clicktoAddToCartButton() {
        await this.buttonAddToCart.click();
    }
    async clickToViewCartButton() {
        await this.buttonViewCart.click();
    }
    async scrollToTblCart() {
        await this.tblCart.scrollIntoView();
    }
    async clickToProceedToCheckoutButton() {
        await this.buttonProceedToCheckout.click();
    }
    async clickOnFirstnameField() {
        await this.inputFirstName.click();
    }
    async enterFirstName(firstname) {
        await this.inputFirstName.setValue(firstname);
    }
    async clickOnLastNameField() {
        await this.inputLastName.click();
    }
    async enterLastName(lastname) {
        await this.inputLastName.setValue(lastname);
    }
    async clickOnCompany() {
        await this.inputCompany.click();
    }
    async enterCompany(company) {
        await this.inputCompany.setValue(company);
    }
    async clickOnCountry() {
        await this.countryArrow.click();
    }
    async enterCountry(country) {
        await this.inputCountry.selectByVisibleText(country);
    }
    async clickOnAddress() {
        await this.inputBillingAddress.click();
    }
    async enterAddress(address) {
        await this.inputBillingAddress.setValue(address);
    }
    async clickOnTown() {
        await this.inputTown.click();
    }
    async enterTown(town) {
        await this.inputTown.setValue(town);
    }
    async clickOnCountry() {
        await this.countryArrow.click();
    }
    async enterState(state) {
        await this.selectBillingState.selectByVisibleText(state);
    }
    async clickOnPostCode() {
        await this.inputPostCode.click();
    }
    async enterPostCode(zip) {
        await this.inputPostCode.setValue(zip);
    }
    async clickOnPhone() {
        await this.inputPhone.click();
    }
    async enterPhone(phone) {
        await this.inputPhone.setValue(phone);
    }
    async clickOnEmail() {
        await this.inputEmail.click();
    }
    async enterEmail(email) {
        await this.inputEmail.setValue(email);
    }
    async clickOnTerms() {
        await this.inputTerms.click();
    }
    async clickOnPlaceOrderButton() {
        await this.buttonPlaceOrder.click();
    }
}

export default new LoginPage();
