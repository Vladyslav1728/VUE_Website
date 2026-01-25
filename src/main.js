import { createApp } from "vue" // чтобы создать корневое Vue-приложение
import { createPinia } from 'pinia' // для создания Pinia store

import App from "@/App.vue"
import router from "@/router/index.js"
import "@/assets/main.css"

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')