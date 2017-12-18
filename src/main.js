// The Vue build version to load with the `import` command
//js中写路由
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'
import VueResource from 'vue-resource'
import './common/stylus/icon.styl'

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter({
	linkActiveClass:'active',
  	routes: [
    { path: '/goods', component: goods },
    { path:'/ratings', component:ratings},
    { path:'/seller', component:seller}
  ]
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
//router.push('goods')   //导向特殊页面,刚开始指定的页面,go方法改变已被用作前进后退