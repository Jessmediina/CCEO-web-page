import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import generateRouter from '@/router';

const generateApp = () => {
    const app = createApp(App);

    app.use(generateRouter());
    app.mount('#app');

    return { app };
}

generateApp();