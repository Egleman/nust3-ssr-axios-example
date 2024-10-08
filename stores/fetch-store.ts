import {defineStore} from 'pinia'
import type {IFetchStore} from "~/types/fetch-store";
import {use_api} from "~/composable/use_api";

export const useFetchStore = defineStore('fetchStore', {
    state: (): IFetchStore => ({
        users: []
    }),

    getters: {},

    actions: {
        async get_users() {
            return await use_api().get('https://jsonplaceholder.typicode.com/users')
        }
    },
})