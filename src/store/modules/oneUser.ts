import {IUser} from "@/types";
import HttpService from "@/services/http.service";


const state = {
    user: {} as IUser,
};

const getters = {
    USER: (state: any) => {
        return state.user
    }
};
const mutations = {
    SET_USER: (state: any, payload: any) => {
        state.user = payload;
    }
};


const actions = {
    SET_USER: async (context: { commit: (arg0: string, arg1: any) => void; }, payload: any) => {
        let {data} = await HttpService.get(`/user/${payload}`);
        context.commit('SET_USER', data);
    },
    ADD_USER: async (context: { commit: (arg0: string, arg1: any) => void; }, payload: IUser) => {
        await HttpService.post(`/user/`, {
            name: payload.name,
            secondName: payload.secondName,
            lastName: payload.lastName,
            email: payload.email,
            phone: payload.phone,
            gender: payload.gender,
            address: payload.address
        }).then(response => console.log(response))
            .catch(error => {
                console.log(error);
            });
    },
    DELETE_USER: async (context: { commit: (arg0: string, arg1: any) => void; }, payload: string) => {
        await HttpService.delete(`/user/${payload}`)
            .then(response => console.log(response))
            .catch(error => {
                console.log(error);
            });
    },
    UPDATE_USER: async (context: { commit: (arg0: string, arg1: any) => void; }, payload: IUser) => {
        await HttpService.put(`/user/${payload.id}`, {
                name: payload.name,
                secondName: payload.secondName,
                lastName: payload.lastName,
                email: payload.email,
                phone: payload.phone,
                gender: payload.gender,
                address: payload.address,
            }
        ).then(response => console.log(response))
            .catch(error => {
                console.log(error);
            });
    },
};

export function updateUser(data: IUser) {
    return HttpService.put(`/user/${data.id}`, {
        name: data.name,
        secondName: data.secondName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        gender: data.gender,
        address: data.address,
    }).then(response => console.log(response))
        .catch(error => {
            console.log(error);
        });
}


export default {
    state,
    mutations,
    getters,
    actions
}


