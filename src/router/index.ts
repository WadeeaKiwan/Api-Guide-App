import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/categories",
    name: "Categories",
    component: () => import("../views/Categories.vue")
  },
  {
    path: "/random",
    name: "Random",
    component: () => import("../views/Random.vue")
  },
  {
    path: "/item-details/:API",
    name: "ItemDetails",
    component: () => import("../views/ItemDetails.vue")
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
