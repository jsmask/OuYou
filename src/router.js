import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./views/Home.vue');
const Circle = () => import('./views/Circle.vue');
const Spotlight = () => import('./views/Spotlight.vue');
const Turncard = () => import('./views/Turncard.vue');
const Counter = () => import('./views/Counter.vue');
const Tick = () => import('./views/Tick.vue');
const Foodcard = () => import('./views/Foodcard.vue')

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
    },
    {
      path: '/counter',
      name: 'counter',
      meta: { title:"滚动计数器" },
      component: Counter
    },{
      path:'/tick',
      name:"tick",
      meta:{title:"打勾效果"},
      component:Tick
    },{
      path:'/foodcard',
      name:"foodcard",
      meta:{title:"食物卡片"},
      component:Foodcard
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