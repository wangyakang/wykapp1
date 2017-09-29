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
import myLog from '@/components/workLog/myLog'
import writeDiary from '@/components/workLog/writeDiary'
import editLog from '@/components/workLog/editLog'
//考勤打卡
import checkAttendance from '@/components/checkAttendance/checkAttendance'

//抄送流程
import ccprocessIndex from '@/components/ccprocess/ccprocessIndex'
//我的流程
import myProcessIndex from '@/components/myProcess/myProcessIndex'
import selectionProcess from '@/components/myProcess/selectionProcess'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { //考勤
      path:'/Approval',
      component:ParentPage,
      children:[
        {
          path:'/',
          component:PendingApproval,
        }
      ]
    },
    {  //工作日志
      path:'/workLog',
      component:ParentPage,
      children:[
          {
           path:'/',
           component:workLogIndex,
          },
          {
            path:'/myLog',
            component:myLog,
          },
          {
              path:'/writeDiary',
              component:writeDiary,
          },
          {
            path:'/editLog',
            component:editLog,
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
    { //抄送流畅
      path:'/ccprocess',
      component:ParentPage,
      children:[
        {
          path:'/',
          component:ccprocessIndex,
        }
      ]
    },
    { //我的流程
      path:'/myProcess',
      component:ParentPage,
      children:[
        {
          path:'/',
          component:myProcessIndex,
        },
        {
          path:'/selectionProcess',
          component:selectionProcess,
        }
      ]
    }

  ]
})
