import Page from "./page.js";

class HomePage extends Page{
    get product() { return $('.noo-product-inner.noo-product-inner2'); }

    async scrollToProduct() {
        await this.product.scrollIntoView();
    }

    async clickToProduct() {
        await this.product.click();
    }
    
}
export default new HomePage();