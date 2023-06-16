import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/router'

import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap"

const pinia = createPinia()

const app = createApp(App).use(router).use(pinia)

app.mount('#app')
