import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./views/Home.vue');
const Circle = () => import('./views/easy/Circle.vue');
const Spotlight = () => import('./views/easy/Spotlight.vue');
const Turncard = () => import('./views/easy/Turncard.vue');
const Counter = () => import('./views/easy/Counter.vue');
const Tick = () => import('./views/easy/Tick.vue');
const Foodcard = () => import('./views/easy/Foodcard.vue');
const Brokenline = ()=> import('./views/easy/Brokenline.vue');
const Dog = ()=> import('./views/easy/Dog.vue');

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
    },{
      path:"/brokenline",
      name:"brokenline",
      meta:{title:"折线动画"},
      component:Brokenline
    },{
      path:"/dog",
      name:"dog",
      meta:{title:"柴犬动画"},
      component:Dog
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