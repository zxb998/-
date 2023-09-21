// myStore.ts
import { defineStore } from 'pinia';

export const useMyStore = defineStore('myStore', {
    state: () => ({
        count: 0,
    }),
    getters: {
        // 在这里定义您的 getters
    },
    actions: {
        increment() {
            this.count++;
        },
    },
});
