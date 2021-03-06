import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router/index'
import { projectAuth } from './firebase/config'

let app

projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
        .use(router)
        .mount('#app')
    }
})


