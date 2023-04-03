import Page from "./page.js";


class MyAccountPage extends Page{

    get inputUsername() { return $('//*[@id="username"]'); }
    get inputPassword() { return $('//*[@id="password"]'); }
    get buttonSubmit() { return $('[name="login"]'); }
    get header() { return $('.noo-heading-content'); }
    get logo() { return $('img.custom-logo'); }

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

}
export default new MyAccountPage();