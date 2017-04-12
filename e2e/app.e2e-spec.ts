import { ImproveCodeFrontendPage } from './app.po';

describe('improve-code-frontend App', () => {
  let page: ImproveCodeFrontendPage;

  beforeEach(() => {
    page = new ImproveCodeFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
