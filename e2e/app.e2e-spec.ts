import { Angular2testPage } from './app.po';

describe('angular2test App', () => {
  let page: Angular2testPage;

  beforeEach(() => {
    page = new Angular2testPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
