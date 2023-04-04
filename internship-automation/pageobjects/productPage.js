import Page from "./page.js";

class ProductPage extends Page{
    get colorDropdown() { return $('#pa_color'); }
    get sizeDropdown() { return $('#pa_size'); }
    get buttonAddToCart() { return $('.single_add_to_cart_button.button.alt.wp-element-button'); }
    get buttonViewCart() { return $('a.button.wc-forward.wp-element-button'); }

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
    
}
export default new ProductPage();
