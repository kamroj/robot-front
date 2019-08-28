import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Sortowanie', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Login');
  });

  it('should return name of the Bookstore', () => {
    page.navigateToHome();
    expect(page.getBookStoreName()).toEqual('Empik');
  });

  it('should return login button', () => {
    page.navigateToHome();
    expect(page.getLoginButton().getText()).toEqual('Login');
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
