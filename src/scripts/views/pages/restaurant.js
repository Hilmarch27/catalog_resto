import RestaurantSource from '../../data/therestodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Restaurant</h2>
        <div id="restos" class="restos">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await RestaurantSource.restaurantList();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Restaurant;
