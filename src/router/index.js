import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


//引入页面
import Home from '@/components/Home'
import ParentPage from '@/components/ParentPage'
//审批流程子页面
import PendingApprova from '@/components/Approval/PendingApprova'






export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ]
})
