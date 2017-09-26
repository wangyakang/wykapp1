import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


//引入页面
import Home from '@/components/home'
import ParentPage from '@/components/parentPage'
//审批流程子页面
import PendingApproval from '@/components/approval/pendingApproval'






export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/Approval',
      component:ParentPage,
      children:[
        {
          path:'/',
          component:PendingApproval,
        }
      ]
    }

  ]
})
