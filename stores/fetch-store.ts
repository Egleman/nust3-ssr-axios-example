import {defineStore} from 'pinia'
import type {IFetchStore} from "~/types/fetch-store";
import {use_api} from "~/composable/use_api";

export const useFetchStore = defineStore('fetchStore', {
    state: (): IFetchStore => {
        return {
            users: []
        }
    },

    getters: {},

    actions: {
        async get_users() {
            const response = await useAsyncData(() => use_api().get('https://jsonplaceholder.typicode.com/users'))
            this.users = response.data.value
        }
    },
})