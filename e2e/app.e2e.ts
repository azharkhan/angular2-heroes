import { SuperteamPage } from './app.po';

describe('superteam App', function() {
  let page: SuperteamPage;

  beforeEach(() => {
    page = new SuperteamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('superteam works!');
  });
});
