import Page from "./page.js";

class CartPage extends Page{
    get tblCart() { return $('.shop_table.shop_table_responsive.cart'); }
    get buttonProceedToCheckout() { return $('.checkout-button.button.alt.wc-forward.wp-element-button'); }

    async scrollToTblCart() {
        await this.tblCart.scrollIntoView();
    }
    
    async clickToProceedToCheckoutButton() {
        await this.buttonProceedToCheckout.click();
    }
}
export default new CartPage();
