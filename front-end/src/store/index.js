import { createStore } from "vuex";

export default createStore({
  state: {
    productInfo: [],
  },
  getters: {},
  mutations: {
    selectProduct(state, product) {
      state.productInfo = product;
    }
  },
  actions: {},
  modules: {},
});
