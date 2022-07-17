export const state = () => ({
  visible: false,
  products: [],
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
  async order({ commit }, phone) {
    // Отправить заказ
    commit('REMOVE_PRODUCTS');

    this.$mail.send({
      from: 'Order',
      subject: 'Incredible',
      text: `Phone: ${phone} \n ${JSON.stringify(state.products)}`,
    });
  },
};
