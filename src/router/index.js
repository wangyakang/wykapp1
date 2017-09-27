import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


//引入页面
import Home from '@/components/home'
import ParentPage from '@/components/parentPage'
//审批流程子页面
import PendingApproval from '@/components/approval/pendingApproval'

//工作日志
import workLogIndex from '@/components/workLog/workLogIndex.vue'

//考勤打卡
import checkAttendance from '@/components/checkAttendance/checkAttendance'

//抄送流程
import ccprocessIndex from '@/components/ccprocess/ccprocessIndex'

//我的流程
import myProcessIndex from '@/components/myProcess/myProcessIndex'
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
    },
    {
      path:'/workLog',
      component:ParentPage,
      children:[
        {
          path:'/',
          component:workLogIndex,
        }
      ]
    },
    {  //考勤打卡
      path:'/checkAttendance',
      component:ParentPage,
      children:[
        {
          path:'/',
          component:checkAttendance,
        }
      ]
    },
    {
      path:'/ccprocess',
      component:ParentPage,
      children:[
        {
          path:'/',
          component:ccprocessIndex,
        }
      ]
    },
    {
      path:'/myProcess',
      component:ParentPage,
      children:[
        {
          path:'/',
          component:myProcessIndex,
        }
      ]
    }

  ]
})
