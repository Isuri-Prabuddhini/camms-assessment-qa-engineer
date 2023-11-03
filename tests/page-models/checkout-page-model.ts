import { Selector, t } from 'testcafe';

class CheckoutPage {
    firstNameInput: Selector;
    lastNameInput: Selector;
    zip_PostalCodeInput: Selector;
    continueButton: Selector;


    constructor() {
        this.firstNameInput = Selector('#first-name');
        this.lastNameInput = Selector('#last-name');
        this.zip_PostalCodeInput = Selector('#postal-code');
        this.continueButton = Selector('#continue');
    }

    async typeFirstName(fisrtName: string) {
        await t.typeText(this.firstNameInput, fisrtName);
    }

    async typeLastName(lastName: string) {
        await t.typeText(this.lastNameInput, lastName);
    }

    async typePostalCode(postalCode: string) {
        await t.typeText(this.zip_PostalCodeInput, postalCode);
    }

    async clickOnContinueButton() {
        await t.click(this.continueButton);
    }

}

export default new CheckoutPage();
