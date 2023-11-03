import { ClientFunction, Selector, t } from 'testcafe';

class CartPage {
    cartProductItemList: Selector;
    checkOutButton: Selector;

    constructor() {
        this.cartProductItemList = Selector('div.inventory_item_name');
        this.checkOutButton = Selector('#checkout');
    }

    async clickOnCheckoutButton() {
        await t.click(this.checkOutButton);
    }

}

export default new CartPage();
