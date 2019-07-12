import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import setaxios from './setaxios'
import axios from 'axios'
setaxios()
Vue.config.productionTip = false
Vue.prototype.$http=axios
//路由守卫,无论刷新还是跳转路由，都经过这里
router.beforeEach((to,from,next)=>{
  store.commit('settoken',localStorage.getItem('tolen'))
  if(to.meta.requireAuth){
    if(store.state.token){
      next();
    }else{
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }
  }
  else{
    next();
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
