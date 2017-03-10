import { WhereBeerPage } from './app.po';

describe('where-beer App', function() {
  let page: WhereBeerPage;

  beforeEach(() => {
    page = new WhereBeerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
