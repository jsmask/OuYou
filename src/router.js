import Vue from 'vue'
import Router from 'vue-router'

// const Home = () => import('./views/Home.vue');
// const Circle = () => import('./views/easy/Circle.vue');
// const Spotlight = () => import('./views/easy/Spotlight.vue');
// const Turncard = () => import('./views/easy/Turncard.vue');
// const Counter = () => import('./views/easy/Counter.vue');
// const Tick = () => import('./views/easy/Tick.vue');
// const Foodcard = () => import('./views/easy/Foodcard.vue');
// const Brokenline = ()=> import('./views/easy/Brokenline.vue');
// const Dog = ()=> import('./views/easy/Dog.vue');
// const Notfound = ()=> import('./views/easy/Notfount.vue');

Vue.use(Router)


import data from "../routerData";

const handleData = function(data){
   let list = [];

   data.forEach(item=>{
      let name = item.path.split("/")[1];
      let cp = name.charAt(0).toUpperCase()+name.substr(1,name.length-1);
      list.push({
        path: item.path,
        name,
        meta: { title:item.title },
        component: () => import(`./views/easy/${cp}.vue`)
      })
   })

   return list;
}

let router = new Router({
  routes: [
    ...handleData(data),
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    }, 
    {
      path: '*',
      redirect: '/notfount'
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