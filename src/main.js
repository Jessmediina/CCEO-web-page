import { createApp } from 'vue'
import './css/style.css'
import App from './App.vue'

import generateRouter from '@/router';
import store from '@/store';

const generateApp = () => {
    const app = createApp(App);

    app.use(store);
    app.use(generateRouter(store));
    app.mount('#app');

    return { app };
}

generateApp();