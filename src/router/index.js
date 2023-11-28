import {createRouter, createWebHistory} from 'vue-router';

import Index from "@/views/web-page/Index.vue";

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
    },
];

export default function () {
    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes,
    });

    return router;
}
