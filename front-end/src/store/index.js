import { createStore } from "vuex";

export default createStore({
  state: {
    productInfo: [],
    open: false,
    isAdmin: false,
    wProducts: [],
  },
  getters: {},
  mutations: {
    selectProduct(state, product) {
      state.productInfo = product;
    },
    changeOpen(state, val) {
      state.open = val;
    },
    changeIsAdmin(state, val) {
      state.isAdmin = val;
    },
    addToWProducts(state, val) {
      state.wProducts.push(val);
    }
  },
  actions: {},
  modules: {},
});
