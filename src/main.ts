import {defineCustomElements} from '@ionic/pwa-elements/loader';
import { createApp, provide} from 'vue'

import App from './App.vue'
import router from './router';
import ApiService from './services/api.service';
import { TokenService } from "./services/token.service";
import  store from "@/store/index";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { createDynamicForms } from '@asigloo/vue-dynamic-forms';
const VueDynamicForms = createDynamicForms();
const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store)
  .use(VueDynamicForms);
  // Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
router.isReady().then(() => {
  app.mount('#app');
});

ApiService.init(process.env.VUE_APP_ROOT_API);

if (TokenService.getToken()) {
  console.log("token");
  
  ApiService.setHeader();
  ApiService.mountRequestInterceptor();
  ApiService.mount401Interceptor();
}