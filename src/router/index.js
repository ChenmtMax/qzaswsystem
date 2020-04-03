import Vue from 'vue'
import VueRouter from 'vue-router'
import systemIndex from '@/views/systemIndex/index.vue'
import jobManage from '@/views/jobManagement/jobManage.vue'
import jobAll from '@/views/jobManagement/jobAll.vue'
import jobsDraft from '@/views/jobManagement/jobsDraft.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'index',
    component: systemIndex
  },
  {
    path: '/jobManage',
    name: 'jobManage',
    component: jobManage,
    redirect: '/jobManage/jobAll', // 默认选中第一个路由
    children: [{
      // 以 '/' 开头会被当做根路径，所以子路由不用加
      path: 'jobAll',
      name: 'jobAll',
      component: jobAll
    }, {
      path: 'jobsDraft',
      name: 'jobsDraft',
      component: jobsDraft
    }]
  },
  // {
  //   path: '/enrollManage',
  //   name: 'enrollManage',
  //   component: enrollManage,
  //   redirect: '/enrollManage/enrollList',
  //   children: [{
      
  //   }]
  // },
  {
    path: '*',
    // 重定向
    redirect: '/index'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // 配置左侧菜单栏点击样式
  linkActiveClass: 'on'
})

export default router
