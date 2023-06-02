import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Resto</h2>
        <div id="restos" class="restos">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllResto();
    const restosContainer = document.querySelector('#restos');
    if (restos.length === 0) {
      restosContainer.innerHTML = '<h3 class="nothing">Tidak Ada Favorite</h3>';
    } else {
      const totalRest = restos.length;
    }

    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favorite;
