/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/Favorite');
  I.wait(5);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('Tidak Ada Favorite');

  I.amOnPage('/');
  I.waitForElement('.resto-item');
  I.seeElement('.resto-item');

  const firstRestaurant = locate('.resto-item').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.wait(5);
  I.seeElement('#restos');
  const likedRestaurantName = await I.grabTextFrom('.resto-item');

  // membandingkan apakah sama atau tidak
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click('.resto-item');

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/Favorite');
  I.wait(5);
  I.see('Tidak Ada Favorite');
});