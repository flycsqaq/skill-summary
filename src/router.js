import Vue from 'vue'
import Router from 'vue-router'
import cssRouter from './views/css/router'
import html5Router from './views/html5/router'
import jsRouter from './views/js/router'
import meRouter from './views/aboutMe/router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    meRouter,
    html5Router,
    cssRouter,
    jsRouter,
    {
      path: '',
      redirect: '/css/three'
    }
  ]
})
