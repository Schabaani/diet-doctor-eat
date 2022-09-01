import {getToday, greeting} from '../src/utils/date';

describe('Home', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('today is', async () => {
    const today = getToday();
    await expect(element(by.label('Today is'))).toHaveText(today);
  });

  it('greeting', async () => {
    const welcomeMessage = greeting();
    await expect(element(by.id('greeting'))).toBeVisible();
    await expect(element(by.id('greeting'))).toHaveText(welcomeMessage);
  });

  it('scroll video section not toBeVisible item', async () => {
    await expect(element(by.id('video-flat-list'))).toBeVisible();
    await element(by.id('video-flat-list')).swipe('left', 'slow', 0.99);
    await waitFor(element(by.text('18:00')))
      .not.toBeVisible()
      .whileElement(by.id('video-flat-list'))
      .scroll(50, 'right');
  });

  it('tap on videosection item', async () => {
    const item0 = element(by.id('videosection-item-0'));
    await expect(item0).toBeVisible();
    await item0.tap();
    await expect(element(by.text('videosection-item-0'))).toBeVisible();
    await element(by.text('OK')).tap();
  });

  it('scroll main flat list', async () => {
    const flatList = element(by.id('main-flat-list'));
    await expect(flatList).toBeVisible();
    await flatList.swipe('up', 'fast', 0.99);
    await flatList.swipe('down', 'slow', 0.99);
  });

  it('scroll meal flat lists', async () => {
    const header = 'Lunch';
    const flatList = element(by.id(`meal-flat-list-${header}`));
    await expect(flatList).toBeVisible();
    await flatList.swipe('left', 'fast', 0.99);
    await flatList.swipe('right', 'slow', 0.99);
  });
});
