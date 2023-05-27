import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueCookies from 'vue-cookies';
import './style.css';
import App from './App.vue';
import router from './router';

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(VueCookies)
  .use(router)
  .mount('#app')
