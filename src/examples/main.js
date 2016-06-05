import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import LoginPage from './LoginPage.vue'
import HomePage from './HomePage.vue'
import ErrorPage from './ErrorPage.vue'

Vue.use(Router)

const router = new Router()

router.map({
  '/': { component: HomePage },
  '/health': { component: HomePage },
  '/todo': { component: HomePage },
  '/blog': { component: HomePage },
  '/login': { component: LoginPage },
  '/error': { component: ErrorPage },
  '*': { component: ErrorPage } // 404
})

router.start(App, '#container')
