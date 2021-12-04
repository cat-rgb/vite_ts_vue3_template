import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'
import naive from 'naive-ui'
import 'vue-global-api'

const app = createApp(App)
app.use(router)
app.use(createPinia())

app.use(naive)

app.mount('#app')
