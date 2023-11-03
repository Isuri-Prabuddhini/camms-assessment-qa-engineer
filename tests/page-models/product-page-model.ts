import { Selector, t } from 'testcafe';
import { product01, product02 } from '../test-data/testdata';

class ProductPage {
    productLabel: Selector;
    shoppingCartContainer: Selector;
    sauceLabsFleeceJacketPriceLable: Selector;
    sauceLabsBackpackAddToCartButton: Selector;
    sauceLabsBikeLightAddToCartButton: Selector;
    cartProductItemList: Selector;
    checkOutButton: Selector;

    constructor() {
        this.shoppingCartContainer = Selector('#shopping_cart_container');
        this.sauceLabsFleeceJacketPriceLable = Selector('#item_5_title_link div').withText('Sauce Labs Fleece Jacket').parent(1).sibling(0).child(0);
        this.sauceLabsBackpackAddToCartButton = Selector('#item_4_title_link div').withText(product01).parent(1).sibling(0).child(1);
        this.sauceLabsBikeLightAddToCartButton = Selector('#item_0_title_link div').withText(product02).parent(1).sibling(0).child(1);
    }

    async clickSauceLabsBackpackAddToCartButton() {
        await t.click(this.sauceLabsBackpackAddToCartButton);
    }

    async clickSauceLabsBikeLightAddToCartButton() {
        await t.click(this.sauceLabsBikeLightAddToCartButton);
    }

    async clickShoppingCart() {
        await t.click(this.shoppingCartContainer);
    }

    async isShoppingCartContainerVisible() {
        return await this.shoppingCartContainer.exists;
    }

}

export default new ProductPage();
