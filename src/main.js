import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {request,text} from 'network/request'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
// Vue.prototype.axios = axios
Vue.use(ElementUI);


//过滤器
Vue.filter('langChange',(msg,arg)=>{
    return msg+'元'+arg 
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')




