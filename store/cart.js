export const state = () => ({
  visible: false,
  products: [],
  success: false,
  error: ''
});

export const mutations = {
  // Добавляем товар, если его нет в корзине
  ADD_PRODUCT(state, product) {
    if (!state.products.find((p) => product.id === p.product.id)) {
      state.products = [
        ...state.products,
        {
          product,
          qty: 1,
        },
      ];
    }
  },
  // Убираем товар
  REMOVE_PRODUCT(state, productId) {
    state.products = state.products.filter(
      (item) => item.product.id !== productId
    );
    if (!state.products.length) {
      state.visible = false;
    }
  },
  REMOVE_PRODUCTS(state) {
    state.products = [];
  },
  // Меняем количество товара в корзине
  SET_PRODUCT_QTY(state, { productId, qty }) {
    state.products = state.products.map((item) => {
      return item.product.id === productId
        ? {
            product: item.product,
            qty,
          }
        : item;
    });
  },
  SET_CHANGE_CART_VISIBLE(state) {
    state.visible = !state.visible;
  },
  CHANGE_SUCCESS(state, value) {
    state.success = value;
  },
  SET_ERROR(state, value) {
    state.error = value;
  }
};

export const actions = {
  async addProduct({ commit }, product) {
    await commit('ADD_PRODUCT', product);
  },
  async removeProduct({ commit }, productId) {
    await commit('REMOVE_PRODUCT', productId);
  },
  async setProductQuantity({ commit }, { productId, qty }) {
    await commit('SET_PRODUCT_QTY', { productId, qty });
  },
  changeVisibleMenu({ commit }) {
    commit('SET_CHANGE_CART_VISIBLE');
  },
  async order({ commit, state }, phone) {
    try {
      this.$mail.send({
        from: 't3.t3st@yandex.ru',
        subject: 'Incredible',
        text: JSON.stringify({
          phone,
          products: state.products.map(product => ({
            name: product.product?.title || '-',
            qty: product.qty,
            price: product.product?.price?.text || '0',
          }))
        }),
      });

      await commit('CHANGE_SUCCESS', true);
      setTimeout(() => {
        commit('CHANGE_SUCCESS', false);
      }, 300);
    } catch(err) {
      await commit('SET_ERROR', 'При отправке произошла ошибка. Попробуйте оформить заказ позже или позвоните для этого по телефону');
      setTimeout(() => {
        commit('SET_ERROR', '');
      }, 300);
    }
  },
};
