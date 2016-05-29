import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
// import HomePage from './HomePage.vue'
import ErrorPage from './ErrorPage.vue'
import NotfoundPage from './NotfoundPage.vue'

Vue.use(Router)

const router = new Router()

router.map({
  // '/': { component: HomePage },
  '/error': { component: ErrorPage },
  '*': { component: NotfoundPage } // 404
})

router.start(App, '#container')
