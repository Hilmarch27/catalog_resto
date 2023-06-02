import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}" alt="${resto.name}"/>
  <div class="resto__info">
    <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${resto.description}</p>
    <h4>City</h4>
    <p>${resto.city}</p>
    <h4>Address</h4>
    <p>${resto.address} minutes</p>
    <h4>Categories</h4>
    <p>${resto.categories
    .map(
      (category) => `
          <span class="category">${category.name}</span>
        `,
    )
    .join('')}</p>
  </div>
  <div class="detail-menu">
      <div class="detail-food">
        <h4>Food</h4>
        <ul>
          ${resto.menus.foods
    .map(
      (food) => `
                <li>${food.name}</li>
              `,
    )
    .join('')}
        </ul>
      </div>
      <div class="detail-drink">
        <h4>Drink</h4>
        <ul>
          ${resto.menus.drinks
    .map(
      (drink) => `
                <li>${drink.name}</li>
              `,
    )
    .join('')}
        </ul>
      </div>
    </div>
  <div class="resto__overview">
  <h3>Rating</h3>
    <p>${resto.rating}</p>
    <h3>Reviews</h3>
    <p>${resto.customerReviews
    .map(
      (review) => `
          <div class="detail-review-item">
            <div class="review-header">
              <p class="review-name"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em;"></i>&nbsp;${review.name}</p>
              <p class="review-date">${review.date}</p>
            </div>
            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `,
    )
    .join('')}</p>
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
    <img class="resto-item__header__poster lazyload" data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'images/heros/hero-image_4.jpg'}" crossorigin="anonymous" alt="Gambar ${resto.name}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
    <h3 class="resto__title"><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <p>City: ${resto.city}</p>
      <p>Deskription: ${resto.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate, createRestoDetailTemplate, createLikeButtonTemplate,
  createLikedButtonTemplate,
};
