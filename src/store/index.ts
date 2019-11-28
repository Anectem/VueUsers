import Vue from "vue";
import Vuex from "vuex"
import users from "@/store/modules/users";
import oneUser from "@/store/modules/oneUser";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters:{},
  mutations: {
  },

  actions: {
  },
  modules: {
    users,
    oneUser
  }

});
