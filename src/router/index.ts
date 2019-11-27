import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/addUser",
    name: "addUser",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddUser.vue")
  },
  {
    path: "/user",
    name: "userDetails",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/UserDetails.vue")
  },
  {
    path: "/editUser",
    name: "editUser",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/EditUser.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
