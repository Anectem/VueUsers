import Vue from "vue";
import Vuex from "vuex"
import {IUser} from "@/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [] as IUser[],
    user: {} as IUser
  },
  getters:{

  },
  mutations: {},
  actions: {
    GET_DATA: async (context,payload)
  },

});
