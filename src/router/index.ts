import Vue from "vue";
import VueRouter from "vue-router";
import UserTableHome from "../views/UserTableHome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: UserTableHome
  },
  {
    path: "/addUser",
    name: "addUser",
    component: () =>
      import( "../views/AddUser.vue")
  },
  {
    path: "/user",
    name: "userDetails",
    component: () =>
        import( "../views/UserDetails.vue")
  },
  {
    path: "/editUser",
    name: "editUser",
    component: () =>
        import( "../views/EditUser.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
