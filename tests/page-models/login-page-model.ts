import { Selector, t } from 'testcafe';

class Page {
    usernameInput: Selector;
    passwordInput: Selector;
    loginButton: Selector;

    constructor() {
        this.usernameInput = Selector('#user-name');
        this.passwordInput = Selector('#password');
        this.loginButton = Selector('#login-button');
    }

    async typeUserName(name: string) {
        await t.typeText(this.usernameInput, name);
    }

    async typePassword(password: string) {
        await t.typeText(this.passwordInput, password);
    }

    async clickLoginButton() {
        await t.click(this.loginButton)
    }
}

export default new Page();
