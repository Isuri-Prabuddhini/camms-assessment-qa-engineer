import loginPage from './page-models/login-page-model';
import productPage from './page-models/product-page-model'
import checkoutPage from './page-models/checkout-page-model';
import checkoutOverviewPage from './page-models/checkout-overview-page-model';
import cartPage from './page-models/cart-page-model';
import { validateTheCartContainsSelectedItems, generateRandomFirstName, generateRandomLastName, generateRandomPostalCode } from './common-utils/utils';
import { testProductPrice, userName, password } from './test-data/testdata';


fixture`Login to the SauceDemo site and place an order`
    .page`https://www.saucedemo.com/`

test('Checking the price of "Sauce Labs Fleece Jacket" and Placing an order by adding any two products ', async t => {
    //type user name
    await loginPage.typeUserName(userName);

    //type password
    await loginPage.typePassword(password)

    //click login button
    await loginPage.clickLoginButton();

    // Check cart container icon available after login
    await t.expect(productPage.isShoppingCartContainerVisible).ok('Cart container is visible')

    // Check the price of product, Sauce Labs Fleece Jacket is $49.99
    .expect(productPage.sauceLabsFleeceJacketPriceLable.textContent).eql(testProductPrice);

    // Click Add to cart button of Sauce Labs Backpack
    await productPage.clickSauceLabsBackpackAddToCartButton();

    // Click Add to cart button of Sauce Labs Bike Light
    await productPage.clickSauceLabsBikeLightAddToCartButton();

    //Click cart icon in the top 
    await productPage.clickShoppingCart();

    await t
    //Verify if the selected items are in the cart
    .expect(await cartPage.cartProductItemList.count).eql(2)
    .expect(await validateTheCartContainsSelectedItems(await cartPage.cartProductItemList)).ok()

    //Click chekout Button
    await cartPage.clickOnCheckoutButton();

    //fill your information page
    //Enter first name by generating random name
    await checkoutPage.typeFirstName(await generateRandomFirstName());

    //Enter last name by generating random name
    await checkoutPage.typeLastName(await generateRandomLastName());

    //Enter zip/postal code by generating random name
    await checkoutPage.typePostalCode(await generateRandomPostalCode());

    //Click Continue Button
    await checkoutPage.clickOnContinueButton();

    //Click Finish Button
    await checkoutOverviewPage.clickOnFinishButton();

});





