import '@/styles/tailwind.css';
import { createApp } from 'vue';
import MakeitCaptcha from 'makeit-captcha';
import 'makeit-captcha/dist/captcha.min.css';
import App from './App.vue';
import router from './router/router';
import { createPinia } from 'pinia';
import naive from 'naive-ui';
import 'vue-global-api';
import Application from '@/components/Application/Application.vue';
const appProvider = createApp(Application);
const app = createApp(App);
app.use(createPinia());

app.use(naive);
app.use(MakeitCaptcha);

app.use(router);

// appProvider.mount('#appProvider', true);

app.mount('#app');
