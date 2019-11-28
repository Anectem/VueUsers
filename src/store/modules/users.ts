import {IUser} from "@/types";
import HttpService from "@/services/http.service";


const state = {
    users: [] as IUser[],
};

const getters = {
    USERS: (state: any) => {
        return state.users
    }
};
const mutations = {
    SET_DATA: (state: any, payload: any) => {
        state.users = payload
    },
};

const actions = {
    GET_USERS: async (context: { commit: (arg0: string, arg1: any) => void; }) => {
        let {data} = await HttpService.get('/user/');
        context.commit('SET_DATA', data.data)
    },
};
export default {
    state,
    mutations,
    getters,
    actions
}


