import Vue from 'vue';
import App from './App.vue';
// 引入mint 
import Mint from 'mint-ui';
import "mint-ui/lib/style.css";
// 引入路由
import router from './router';

// 引入jq
import $ from "jquery";
Vue.prototype.$ = $;


Vue.use(Mint)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
