import { expextedCart } from "../test-data/testdata";
import cartPage from '../page-models/cart-page-model';
import { faker } from '@faker-js/faker';

const validateTheCartContainsSelectedItems = async (element: Selector) => {
    for (let i = 0; i < await cartPage.cartProductItemList.count; i++) {
        if (!(expextedCart.includes(await cartPage.cartProductItemList.nth(i).innerText))) {
            return false;
        }
    }
    return true;
}

const generateRandomFirstName = async () => {
    return faker.person.firstName()

}

const generateRandomLastName = async () => {
    return faker.person.lastName()

}

const generateRandomPostalCode = async () => {
    return faker.location.zipCode('####')

}

export { validateTheCartContainsSelectedItems, generateRandomFirstName, generateRandomLastName, generateRandomPostalCode };