

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert() {
        return $('.noo-page-heading');
    }
    get homepageVal() {
        return $('.navbar.navbar-default');
    }
    get productVal() {
        return $('.noo-product-inner.noo-product-inner2');
    }
    get pageHeader() {
        return $('.page-title');
    }
    get productColorPreview() {
        return $('#pa_color');
    }
    get tblCartPreview() {
        return $('.shop_table.shop_table_responsive.cart')
    }
    get thankYouNote(){
        return $('.woocommerce');
    }

}

export default new SecurePage();
