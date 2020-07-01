import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./views/Home.vue');
const Circle = () => import('./views/Circle.vue');
const Spotlight = () => import('./views/Spotlight.vue');
const Turncard = () => import('./views/Turncard.vue');


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/circle',
      name: 'circle',
      meta: { title:"圆环倒计时" },
      component: Circle
    },
    {
      path: '/spotlight',
      name: 'spotlight',
      meta: { title:"聚光灯效果" },
      component: Spotlight
    },
    {
      path: '/turncard',
      name: 'turncard',
      meta: { title:"翻牌效果" },
      component: Turncard
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  else{
    document.title = "欧呦Mask";
  }
  next()
})


export default router