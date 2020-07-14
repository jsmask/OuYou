import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Layout,Card,Button,Icon  } from 'ant-design-vue';

import '../src/assets/reset.css'
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;

Vue.use(Layout);
Vue.use(Card);
Vue.use(Button);
Vue.use(Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
