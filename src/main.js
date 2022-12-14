import { createApp, } from 'vue'
import App from './App.vue'
import store from "./store/index"
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'




createApp(App).use(Quasar, store, quasarUserOptions).use(router).use(store).mount('#app')
