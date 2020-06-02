import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Home'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home/1',
        name: "Lag",
        component: () => import('../components/page/Lag.vue')
      },
      {
        path: '/home/2',
        name: "2",
        component: () => import('../components/page/2.vue')
      },
      {
        path: '/home/3',
        name: "3",
        component: () => import('../components/page/3.vue')
      }, {
        path: '/home/4',
        name: "4",
        component: () => import('../components/page/4.vue')
      }, {
        path: '/home/5',
        name: "5",
        component: () => import('../components/page/5.vue')
      }, {
        path: '/home/6',
        name: "6",
        component: () => import('../components/page/6.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
    // component: resolve=>(require(["@/components/HelloWorld"],resolve))   第二种懒加载
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
