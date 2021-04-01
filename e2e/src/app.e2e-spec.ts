import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
<<<<<<< HEAD
    expect(await page.getTitleText()).toEqual('FE-TASKS app is running!');
=======
    expect(await page.getTitleText()).toEqual('task1 app is running!');
>>>>>>> 4104ca0290090217609b94e26383c84a669c51b1
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
