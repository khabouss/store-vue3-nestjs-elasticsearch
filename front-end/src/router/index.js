import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from '../views/ProductView.vue'
import AddProductVue from "@/views/AddProduct.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product",
    name: "product_view",
    component: ProductView,
  },
  {
    path: "/add-product",
    name: "add_product_view",
    component: AddProductVue,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
