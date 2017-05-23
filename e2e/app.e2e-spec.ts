import { ObservableswithhttpPage } from './app.po';

describe('observableswithhttp App', () => {
  let page: ObservableswithhttpPage;

  beforeEach(() => {
    page = new ObservableswithhttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
