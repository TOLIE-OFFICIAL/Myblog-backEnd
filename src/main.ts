import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

const blackList = ["/admin"];

app.use(createPinia())
app.use(router)

// 前置守卫
router.beforeEach((to, from, next) => {
  if (!blackList.includes(to.path) || localStorage.getItem('token')) {
    next()
  } else {
    next('/login')
  }
})

app.mount('#app')
