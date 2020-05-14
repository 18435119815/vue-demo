import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {request,text} from 'network/request'

Vue.config.productionTip = false
// Vue.prototype.axios = axios

//过滤器
Vue.filter('langChange',(msg,arg)=>{
    return msg+'元'+arg 
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


request({
   url: "/navList",
})
.then(res => {
    console.log(res);
})


