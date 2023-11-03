import { Selector, t } from 'testcafe';

class CheckoutOverviewPage {
    finishButton: Selector;

    constructor() {
        this.finishButton = Selector('#finish');
    }

    async clickOnFinishButton() {
        await t.click(this.finishButton);
    }

}

export default new CheckoutOverviewPage();
