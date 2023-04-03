import Page from "./page.js";

class CheckoutPage extends Page{
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
export default new CheckoutPage();

