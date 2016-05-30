export class SuperteamPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('superteam-app h1')).getText();
  }
}
