import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/therestodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.restaurantDetail(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        rating: resto.restaurant.rating,
        city: resto.restaurant.city,
        pictureId: resto.restaurant.pictureId,
        description: resto.restaurant.description,
      },
    });
  },
};

export default Detail;
