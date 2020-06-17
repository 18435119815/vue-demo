import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './network/request'
import {request,text} from 'network/request'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入Mock
require('./mock/index')

Vue.config.productionTip = false
//挂载axios
Vue.prototype.axios = axios
//使用ElementUI
Vue.use(ElementUI);


//全局过滤器
Vue.filter('langChange',(msg,arg)=>{
    return msg+'元'+arg 
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')




