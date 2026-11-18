import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/fontawesome/css/all.min.css'
import './assets/customer/css/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
