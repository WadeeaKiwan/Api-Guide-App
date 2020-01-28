import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ga from "vue-ga";

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
    props: true,
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

// Call Google Analytics to track the visits of the website
ga(router, "UA-156250567-1");

export default router;
