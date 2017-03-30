import { WeatherappPage } from './app.po';

describe('weatherapp App', () => {
  let page: WeatherappPage;

  beforeEach(() => {
    page = new WeatherappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
