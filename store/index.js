const getDateFormat = (ms) => {
  const date = new Date(ms);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate() + 1).padStart(2, '0');

  return `${day}.${month}.${year}`;
};

export const state = () => ({
  categoriesList: [],
  productsCategory: [],
  reviews: [],
  loadingProducts: false,
});
export const mutations = {
  SET_REVIEWS(state, reviews) {
    state.reviews = reviews;
  },
  SET_CATEGORIES_LIST(state, categories) {
    state.categoriesList = categories;
  },
  SET_PRODUCTS_LIST(state, products) {
    state.productsCategory = products;
  },
  SET_LOADING_PRODUCTS(state, value) {
    state.loadingProducts = value;
  },
};
export const actions = {
  async getReviewsList({ commit }) {
    try {
      const request = await this.$axios.$get('/api/review/list');

      if (!request.success || request.result?.error) throw Error();

      const response = request.result.response;
      const result = [];

      const profilesKeys = response.profiles.reduce((prev, current) => {
        prev[current.id] = {
          id: current.id,
          photo: current.photo_100,
          first_name: current.first_name,
          last_name: current.last_name,
        };

        return prev;
      }, {});

      response.items.forEach((item) => {
        // Проверяем, является ли сообщение ответом на другое сообщение
        if (item.text && !item.text.startsWith('[id')) {
          const itemResult = {
            id: item.id,
            profile: profilesKeys[item.from_id],
            text: item.text,
            date: getDateFormat(item.date * 1000),
          };

          result.push(itemResult);
        }
      });

      commit('SET_REVIEWS', result);
    } catch (err) {
      console.error('Error getReviewsList. ', err);
    }
  },

  async getCategoriesList({ commit }) {
    try {
      const request = await this.$axios.$get('/api/albums/category');

      if (!request.success || request.result?.error) throw Error();
      const result = (request.result.response?.items || []).map((item) => {
        const sizeM = (item.photo.sizes || []).find(
          (size) => size.type === 'm'
        );

        return {
          id: item.id,
          title: item.title,
          photo: sizeM.url,
        };
      });

      await commit('SET_CATEGORIES_LIST', result);
    } catch (err) {
      console.warn('Error getCategoriesList. ', err);
    }
  },
  async getProducts({ commit }, { albumId }) {
    try {
      commit('SET_LOADING_PRODUCTS', true);

      const request = await this.$axios.$post('/api/albums/products', {
        id: albumId,
      });
      const result = (request.result.response?.items || []).map((item) => {
        return {
          id: item.id,
          title: item.title,
          description: item.description,
          photo: item.thumb_photo,
          price: item.price.text,
        };
      });

      await commit('SET_PRODUCTS_LIST', result);
      commit('SET_LOADING_PRODUCTS', false);
    } catch (err) {
      console.warn('Error getProducts. ', err);
      commit('SET_LOADING_PRODUCTS', false);
    }
  },
};
