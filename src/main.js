import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
library.add(faBasketShopping);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
import './assets/css/main.css'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';



createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.use(router)
.use(ToastPlugin)
.mount('#app')
