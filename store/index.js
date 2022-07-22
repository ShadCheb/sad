const monthArray = [
  'янв', 'фев', 'мар', 'апр', 'мая', 'июня',
  'июля', 'авг', 'сен', 'окт', 'нояб', 'дек'
];

const getDateFormat = (ms) => {
  const date = new Date(ms);

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');

  return `${day} ${monthArray[month]} ${year} в ${hour}:${minute}`;
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

      const promises = (request.result.response?.items || []).map((catalog, idx) => (
        // eslint-disable-next-line no-async-promise-executor
        new Promise((resolve) => {
          setTimeout(async() => {
            const requestProducts = await this.$axios.$post('/api/albums/products', { id: catalog.id });

            if (requestProducts.result.error) {
              resolve({
                id: catalog.id,
                title: catalog.title,
                products: [],
              });
              return;
            }

            resolve({
              id: catalog.id,
              title: catalog.title,
              products: requestProducts.result.response?.items || [].map(product => ({
                id: product.id,
                title: product.title,
                description: product.description,
                photo: product.thumb_photo,
                price: product.price.text,
              }))
            })
          }, 300 * idx)
        })
      ))
      const result = await Promise.all(promises);

      await commit('SET_CATEGORIES_LIST', result);
    } catch (err) {
      console.warn('Error getCategoriesList. ', err);
    }
  },
};
