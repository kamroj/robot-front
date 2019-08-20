import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToHome() {
    return browser.get('/home') as Promise<any>;
  }

  navigateTo() {
    return browser.get('/') as Promise<any>;
  }

  getTitleText() {
    return element(by.id('login')).getText() as Promise<string>;
  }

  getBookStoreName() {
    return element(by.css('input[value=empik]')).getText() as Promise<string>;
  }

  getElementByClass() {
    return element(by.className('next')).getText() as Promise<string>;
  }

  getLoginButton() {
    return element.all(by.css('app-nav'));
  }
}
