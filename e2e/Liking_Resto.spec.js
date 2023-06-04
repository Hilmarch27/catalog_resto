const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/Favorite');
  I.wait(3);
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restos');
  I.see('Tidak Ada Favorite', '#restos');
});

Scenario('liking one restaurants', async ({ I }) => {
  I.wait(3);
  I.see('Tidak Ada Favorite', '#restos');

  I.amOnPage('/');
  I.waitForElement('.resto-item', 10);
  I.seeElement('.resto-item');

  const firstRestaurant = locate('.resto__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/Favorite');
  I.wait(3);
  I.seeElement('.resto-item');
  const likedRestaurantName = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});