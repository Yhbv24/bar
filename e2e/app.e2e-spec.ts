import { BarPage } from './app.po';

describe('bar App', function() {
  let page: BarPage;

  beforeEach(() => {
    page = new BarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
