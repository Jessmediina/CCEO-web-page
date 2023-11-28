import {createRouter, createWebHistory} from 'vue-router';
import Error404 from '../views/error/Error404.vue';

import Index from "@/views/web-page/Index.vue";
import About from "@/views/web-page/About.vue";
import Services from "@/views/web-page/Services.vue";
import Products from "@/views/web-page/Products.vue";
import Contact from "@/views/web-page/Contact.vue";
import Careers from "@/views/web-page/Careers.vue";
import TermsAndConditions from "@/views/web-page/TermsAndConditions.vue";
import NoticeOfPrivacy from "@/views/web-page/NoticeOfPrivacy.vue";
import CustomerSupport from "@/views/web-page/CustomerSupport.vue";
import FrequentQuestions from "@/views/web-page/FrequentQuestions.vue";

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
    },
    {
        path: '/nosotros',
        name: 'about',
        component: About,
    },
    {
        path: '/servicios',
        name: 'services',
        component: Services,
    },
    {
        path: '/productos',
        name: 'products',
        component: Products,
    },
    {
        path: '/contacto',
        name: 'contact',
        component: Contact,
    },
    {
        path: '/carreras',
        name: 'careers',
        component: Careers,
    },
    {
        path: '/terminos-y-condiciones',
        name: 'termsAndConditions',
        component: TermsAndConditions,
    },
    {
        path: '/aviso-de-privacidad',
        name: 'noticeOfPrivacy',
        component: NoticeOfPrivacy,
    },
    {
        path: '/soporte-a-clientes',
        name: 'customerSupport',
        component: CustomerSupport,
    },
    {
        path: '/preguntas-frecuentes',
        name: 'frequentQuestions',
        component: FrequentQuestions,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Error404',
        component: Error404,
    },
];

export default function () {
    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes,
    });

    return router;
}
