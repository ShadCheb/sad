export const state = () => ({
  visible: false,
});

export const mutations = {
  SET_CHANGE_MENU_VISIBLE(state) {
    state.visible = !state.visible;
  },
};

export const actions = {
  changeVisibleMenu({ commit }) {
    commit('SET_CHANGE_MENU_VISIBLE');
  },
};
